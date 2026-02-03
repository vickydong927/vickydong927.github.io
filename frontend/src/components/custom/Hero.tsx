import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveAvatarRing from "@/components/custom/InteractiveAvatarRing";


const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <motion.header
      id="home"
      className="min-h-[85vh] flex items-center py-28 lg:py-32"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="relative">
          {/* 1) Hello. */}
          <p className="font-space-grotesk text-[72px] sm:text-[64px] leading-[1.0] font-black text-white">
            Hello
            <span className="text-accent ml-2">！</span>
          </p>

          {/* 2) underline + I'm Vicky (same row) */}
          <div className="mt-6 flex items-center gap-10">
            <div className="h-[3px] w-64 bg-accent/80" />
            <p className="font-space-grotesk text-[44px] sm:text-[56px] leading-[1.05]  text-white">
              I&apos;m{" "}
              <span className="text-accent font-extrabold">Vicky</span>
            </p>
          </div>

          {/* 3) Main title */}
          <h1 className="mt-5 font-space-grotesk text-[52px] sm:text-[64px] md:text-[64px] lg:text-[64px] xl:text-[64px] leading-[0.98] font-black text-white whitespace-nowrap">
            Software Engineer
          </h1>



          {/* Buttons (left aligned) */}
          <div className="mt-12 flex flex-wrap gap-6">
            {/* Primary */}
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center justify-center px-10 py-4
                border-2 border-accent text-white text-[15px] font-semibold uppercase tracking-[0.08em]
                transition-all duration-300 hover:bg-accent hover:text-black"
            >
              View Projects
            </button>

            {/* Secondary */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="inline-flex items-center justify-center px-10 py-4
                border-2 border-accent text-white text-[15px] font-semibold uppercase tracking-[0.08em]
                transition-all duration-300 hover:bg-accent hover:text-black"
            >
              My Resume
            </a>

            {/* Optional: GitHub (outline) */}
            <a
              href="https://github.com/vickydong927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4
                bg-accent text-black text-[15px] font-semibold uppercase tracking-[0.08em]
                transition-all duration-300 hover:opacity-90"
            >
              GitHub<ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <InteractiveAvatarRing
            src="photo.png"
            alt="Vicky Dong"
          />
        </div>

      </div>
        {/* Decorative exclamation mark */}

    </motion.header>

  );
};

export default Hero;
