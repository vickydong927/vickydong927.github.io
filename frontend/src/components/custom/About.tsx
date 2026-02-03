const About = () => {
  const techGroups = [
    {
      title: 'Languages & Frameworks',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        {
          name: 'JavaScript / TypeScript Ecosystem',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'Spring (Boot, Batch)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        },
        {
          name: 'Python Web (FastAPI, Flask)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
        },
        {
          name: 'SQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        },
      ],
    },
    {
      title: 'Data & ML',
      items: [
        {
          name: 'Machine Learning (scikit-learn, XGBoost, PyTorch, TensorFlow)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        },
        {
          name: 'Streaming (Kafka)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
        },
        {
          name: 'Media / Search / Cache (FFmpeg, Elasticsearch, Redis)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg',
        },
      ],
    },
    {
      title: 'Systems & Cloud',
      items: [
        {
          name: 'Cloud & Observability (AWS, Prometheus, Grafana)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        },
        {
          name: 'Containers & Service Mesh (Docker, Kubernetes, Istio)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        },
        {
          name: 'Linux & Databases (Linux, PostgreSQL)',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        },
      ],
    },
  ];

  return (
    <section className="border-t border-border pb-24">
      {/* Anchor for navigation */}
      <div id="about" className="scroll-mt-28" />

      {/* Visual offset */}
      <div className="-mt-24 pt-24">
        {/* Title */}
        <div className="relative pt-12 mb-12">
          <p className="relative font-space-grotesk text-[48px] sm:text-[56px] font-extrabold inline-block">
            About Me
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-accent" />
          </p>
        </div>

        {/* Text */}
        <div className="mb-10 max-w-[900px] space-y-4">
          <p className="text-[18px] leading-[1.7] text-white font-semibold">
            I design and run scalable, reliable backend and data systems used in real production environments.
          </p>
          <p className="text-[18px] leading-[1.7] text-white font-semibold">
            My experience covers distributed services, event-driven pipelines, and ML-enabled applications on modern cloud stacks.
          </p>
        </div>

        {/* Tech */}
        {techGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <h3 className="text-[16px] uppercase tracking-[0.14em] text-accent mb-4 font-semibold">
              {group.title}
            </h3>

            {/* ✅ compact grid + fake buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {group.items.map((tech) => (
                <button
                  key={tech.name}
                  type="button"
                  aria-label={tech.name}
                  className="
                    group w-full
                    rounded-full
                    border border-border
                    bg-secondary/35
                    px-3 py-2
                    transition-all duration-200
                    hover:bg-secondary/60
                    hover:border-accent/60
                    hover:-translate-y-[1px]
                    hover:shadow-[0_6px_18px_rgba(0,0,0,0.35)]
                    active:translate-y-0
                    active:scale-[0.99]
                  "
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7 shrink-0"
                    />
                    <span className="text-[14px] text-white font-medium leading-tight text-left">
                      {tech.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
