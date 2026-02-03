import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_HEIGHT = 64; // h-16 = 64px

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // ✅ 平滑滚动 + 解决 fixed navbar 遮挡：用 window.scrollTo 精确偏移
  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 12; // 再留 12px 空隙
    window.scrollTo({ top: y, behavior: 'smooth' });

    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ 用 IntersectionObserver 判断当前 section（更稳定）
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 选出“最可见”的那个 section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        // 关键：把“触发区域”往下移，避开固定导航栏
        // 让 active 更贴近“导航栏下面看到的内容”
        root: null,
        rootMargin: `-${NAV_HEIGHT + 20}px 0px -55% 0px`,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-background/80'
      } border-b border-border`}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('home')}
            className="font-space-grotesk text-[20px] font-bold tracking-wide hover:text-accent transition-colors duration-300"
          >
            WEIQI(VICKY) DONG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-[20px] uppercase tracking-[0.08em] transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-white/60 hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-[13px] uppercase tracking-[0.08em] text-left transition-all duration-300 ${
                    activeSection === link.id
                      ? 'text-accent border-l-2 border-accent pl-4'
                      : 'text-white hover:text-accent pl-4'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
