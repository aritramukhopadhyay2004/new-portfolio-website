import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "RESUME", href: "#resume" },
  { label: "CERTIFICATES", href: "#certificates" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-[1520px] mx-auto flex items-center justify-between rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 pointer-events-auto ${
          scrolled
            ? "bg-[#0c0c0c]/90 backdrop-blur-[16px] border border-white/10 shadow-2xl"
            : "bg-[#0c0c0c]/70 backdrop-blur-[16px] border border-white/10 shadow-lg"
        }`}
      >
        {/* Left: Portfolio Logo & Brand */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/PORTFOLIO%20LOGO.png"
            alt="Portfolio Logo"
            className="w-10 h-10 object-contain rounded-xl group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_0_12px_rgba(204,255,0,0.35)]"
          />
          <span className="font-bold tracking-tight text-lg sm:text-xl text-[#ebebeb] group-hover:text-[#ccff00] transition-colors">
            Portfolio
          </span>
        </a>

        {/* Center: Pill-shaped navigation bar showing ONLY requested links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.05] backdrop-blur-[16px] border border-white/10 rounded-full px-4 py-2 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-mono uppercase tracking-[0.16em] px-4 py-1.5 rounded-full text-[#ebebeb]/70 hover:text-[#000000] hover:bg-[#ccff00] transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-[#ebebeb] hover:text-[#ccff00] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-[1520px] mx-auto bg-[#0c0c0c]/95 backdrop-blur-[16px] border border-white/10 rounded-3xl p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-[#ebebeb]/80 hover:text-[#000000] hover:bg-[#ccff00] px-4 py-2.5 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
