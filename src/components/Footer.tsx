import { ArrowUpRight, Github, Linkedin, Mail, Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] text-[#ebebeb] relative overflow-hidden pt-20 pb-12 px-6 sm:px-10 lg:px-16 border-t border-white/10">
      
      {/* Top: Massive background watermark text 'SUPER' (10rem size, 5% opacity) */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center font-bold tracking-tighter text-white/[0.05] text-[7rem] sm:text-[10rem] lg:text-[13rem] leading-none whitespace-nowrap z-0">
        SUPER
      </div>

      <div className="max-w-[1520px] mx-auto relative z-10">
        
        {/* Call To Action Container */}
        <div className="flex flex-col items-center text-center pb-20 border-b border-white/10">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00] bg-white/[0.05] px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
            <span>CONNECTIVITY_LAYER // 2026</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#ebebeb] mb-10 max-w-3xl">
            READY TO ENGINEER <br />
            <span className="italic gradient-lime-text">THE NEXT PARADIGM??? </span>
          </h2>

          {/* Oversized lime button (#ccff00) with a slide-up white background transition on hover */}
          <a
            href="#contact"
            className="relative overflow-hidden group bg-[#ccff00] text-[#000000] font-bold text-base sm:text-xl tracking-tight rounded-full px-10 sm:px-14 py-5 sm:py-6 shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:scale-105 transition-transform duration-300 inline-flex items-center gap-4"
          >
            {/* Slide-up white background transition */}
            <span className="absolute inset-0 bg-[#ffffff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 font-bold uppercase tracking-wider flex items-center gap-3">
              <span>INITIATE CONTACT</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </span>
          </a>
        </div>

        {/* Bottom: 3-Column Footer */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Column 1: Policy Links / System Specs */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 font-mono text-[11px] text-[#ebebeb]/50">
            <a href="#home" className="hover:text-[#ccff00] transition-colors">
              // ARCHITECTURE_SPEC.MD
            </a>
            <a href="#methodology" className="hover:text-[#ccff00] transition-colors">
              // ETHICAL_AI_&_PRIVACY_STANDARDS
            </a>
            <a href="#projects" className="hover:text-[#ccff00] transition-colors">
              // OPEN_SOURCE_REPOSITORIES
            </a>
          </div>

          {/* Column 2: Social Icons (hollow circles) */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/aritramukhopadhyay2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center transition-colors text-[#ebebeb] bg-white/[0.02]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aritra-mukhopadhyay-61293730b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center transition-colors text-[#ebebeb] bg-white/[0.02]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:mukhopadhyayaritra635@gmail.com"
              aria-label="Email"
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center transition-colors text-[#ebebeb] bg-white/[0.02]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Column 3: Monospaced Copyright Info */}
          <div className="md:text-right font-mono text-[10px] text-[#ebebeb]/50 uppercase tracking-wider space-y-1">
            <p className="text-[#ebebeb]/80 font-bold">
              © {new Date().getFullYear()} ARITRA MUKHOPADHYAY
            </p>
            <p>DESIGN_SPEC: OBSIDIAN & LIME</p>
            <p className="text-[#ccff00]/80">SYS_REV: v2.6.0_PROD</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
