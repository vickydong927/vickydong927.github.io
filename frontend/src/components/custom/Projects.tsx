import { useEffect, useState } from "react";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      category: "DISTRIBUTED SYSTEMS",
      title: "VideoVault",
      description:
        "Scalable video streaming platform built with microservices architecture. Handles video upload, transcoding, storage, and adaptive streaming with high availability and fault tolerance.",
      image: "/videovault.png",
      image2: "/videovault2.png",
      technologies: [
        "Spring Boot",
        "Kafka",
        "Node.js",
        "FFmpeg",
        "Redis",
        "PostgreSQL",
        "Elasticsearch",
        "AWS S3",
        "Docker",
        "Kubernetes",
        "Istio",
        "Prometheus",
        "Grafana",
      ],
      highlights: [
        "Designed distributed transcoding pipeline using job queues and worker pools",
        "Implemented event-driven workflows with Kafka for scalability and fault isolation",
        "Built real-time progress tracking with WebSocket and Redis pub/sub",
      ],
      githubUrl: "https://github.com/vickydong927/videovault",
      prototypeUrl: "https://prototype-videovault.vercel.app/",
    },
    {
      category: "DATA ENGINEERING",
      title: "BatchOrchestrator",
      description:
        "High-throughput batch orchestration system for ETL workflows. Manages scheduling, dependencies, retries, and monitoring for large-scale data pipelines.",
      image: "/batchorchestrator.png",
      image2: "/batchorchestrator2.png",
      technologies: [
        "Spring Boot",
        "Spring Batch",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana",
      ],
      highlights: [
        "Built DAG-based scheduler supporting parallel execution",
        "Implemented retry logic with exponential backoff and dead-letter handling",
        "Designed observability layer using Prometheus metrics and Grafana dashboards",
      ],
      githubUrl: "https://github.com/vickydong927/batchorchestrator",
      prototypeUrl: "https://prototype-batchorchestrator.vercel.app/",
    },
  ];

  // ====== Modal state ======
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImages, setViewerImages] = useState([]);
  const [viewerIndex, setViewerIndex] = useState(0);

  const openViewer = (images, startIndex = 0) => {
    setViewerImages(images);
    setViewerIndex(startIndex);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
    setViewerImages([]);
    setViewerIndex(0);
  };

  const prevImg = () => {
    setViewerIndex((i) => (i - 1 + viewerImages.length) % viewerImages.length);
  };

  const nextImg = () => {
    setViewerIndex((i) => (i + 1) % viewerImages.length);
  };

  // ESC 关闭 + ←/→ 切换
  useEffect(() => {
    if (!viewerOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };

    window.addEventListener("keydown", onKeyDown);
    // 锁滚动
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [viewerOpen, viewerImages.length]);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="relative mb-16">
        <div className="absolute -left-6 top-0 w-[1px] h-24 bg-border hidden lg:block"></div>
        <div className="absolute -left-[27px] top-8 w-[3px] h-[3px] bg-accent rounded-full hidden lg:block"></div>
        <p className="relative font-space-grotesk text-[48px] sm:text-[56px] leading-[1.05] font-extrabold mb-4 inline-block">
          Projects
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-accent"></span>
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => {
          const imgs = [project.image, project.image2].filter(Boolean);

          return (
            <div key={project.title}>
              <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* 🖼 图片区域 */}
                <div className="lg:col-span-6 space-y-5">
                  {/* 第一张图 */}
                  <button
                    type="button"
                    onClick={() => openViewer(imgs, 0)}
                    className="aspect-video w-full overflow-hidden border border-border group-hover:border-accent transition-colors duration-300 block text-left"
                    aria-label={`Open ${project.title} screenshot 1`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} Screenshot 1`}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-[1.06]
                      "
                    />
                  </button>

                  {/* 第二张图 */}
                  {project.image2 && (
                    <button
                      type="button"
                      onClick={() => openViewer(imgs, 1)}
                      className="aspect-video w-full overflow-hidden border border-border group-hover:border-accent transition-colors duration-300 block text-left"
                      aria-label={`Open ${project.title} screenshot 2`}
                    >
                      <img
                        src={project.image2}
                        alt={`${project.title} Screenshot 2`}
                        className="
                          w-full h-full object-cover
                          transition-transform duration-700 ease-out
                          group-hover:scale-[1.06]
                        "
                      />
                    </button>
                  )}
                </div>

                {/* 文字区域 */}
                <div className="lg:col-span-6">
                  <p className="text-[32px] uppercase tracking-[0.2em] text-accent mb-3 font-medium">
                    {project.category}
                  </p>

                  <h3
                    className="
                      font-space-grotesk text-[48px] leading-[1.3] font-bold mb-4
                      transition-transform duration-300 ease-out
                      hover:scale-[1.03]
                      origin-left
                    "
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        aria-label={tech}
                        className="
                          text-[16px] sm:text-[18px]
                          px-5 py-2
                          rounded-full
                          border-2 border-accent/60
                          bg-secondary/50
                          text-white
                          cursor-default
                          select-none
                          transition-all duration-200 ease-out
                          hover:border-accent
                          hover:bg-secondary/80
                          hover:scale-[1.05]
                        "
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  <p className="text-[20px] leading-[1.7] text-white mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {project.highlights.map((highlight) => (
                      <p key={highlight} className="text-[15px] text-white">
                        → {highlight}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent uppercase tracking-[0.05em] hover:gap-3 transition-all duration-300"
                    >
                      View GitHub <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={project.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent uppercase tracking-[0.05em] hover:gap-3 transition-all duration-300"
                    >
                      View Prototype <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>

              {index < projects.length - 1 && (
                <div className="h-[1px] bg-border mt-16"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* ========= Fullscreen Image Viewer ========= */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => {
            // 点背景关闭（点到图/按钮不关）
            if (e.target === e.currentTarget) closeViewer();
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-6xl">
            {/* Close */}
            <button
              type="button"
              onClick={closeViewer}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 text-white/90 hover:text-white"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
              <span className="text-sm">Close</span>
            </button>

            {/* Image */}
            <div className="w-full overflow-hidden border border-white/10 bg-black/30">
              <img
                src={viewerImages[viewerIndex]}
                alt="Full size preview"
                className="w-full h-auto max-h-[85vh] object-contain"
                draggable="false"
              />
            </div>

            {/* Controls */}
            {viewerImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 border border-white/10 hover:bg-black/60 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 border border-white/10 hover:bg-black/60 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="mt-3 text-center text-white/70 text-sm">
                  {viewerIndex + 1} / {viewerImages.length} (←/→ 切换，ESC 关闭)
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;