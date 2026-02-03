import { useEffect } from "react";
import Navigation from "@/components/custom/Navigation";
import Hero from "@/components/custom/Hero";
import About from "@/components/custom/About";
import Projects from "@/components/custom/Projects";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import CursorGlow from "@/components/custom/CursorGlow";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen bg-background font-dm-sans antialiased">
      {/* ✅ 鼠标跟随互动：放在内容后面 */}
      <CursorGlow />

      {/* ✅ 内容层：压在光效上面 */}
      <div className="relative z-10">
        <Navigation />

        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* ✅ Toast 通常需要在最上层（它自己有 z-index） */}
      <Toaster />
    </div>
  );
};

export default Index;
