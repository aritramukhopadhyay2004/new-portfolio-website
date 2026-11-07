import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  Download,
  ChevronDown,
  ChevronUp,
  MousePointer2,
} from "lucide-react";

const educationHistory = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Specialization in AI & Machine Learning",
    institution: "The Neotia University",
    period: "2023 - 2027",
    status: "CURRENT // CGPA: 9.15",
  },
  {
    degree: "Higher Secondary Certificate (WBCHSE)",
    specialization: "Science Stream (PCM & Computer Science)",
    institution: "Vivekananda Vidyapith (H.S)",
    period: "2021 - 2023",
    status: "COMPLETED // 95.28%",
  },
  {
    degree: "Secondary Education (WBBSE)",
    specialization: "General Science & Mathematics Foundation",
    institution: "Vivekananda Vidyapith (H.S)",
    period: "2015 - 2020",
    status: "COMPLETED",
  },
];

const internshipHistory = [
  {
    role: "AI/ML Research Intern",
    organization: "National Institute of Technology (NIT), Durgapur",
    duration: "Jun 2026 – Jul 2026",
    description:
      "Investigated 7 EfficientNet-B0 variants on CIFAR-100 using TensorFlow, replacing standard convolutions with quadratic formulations. Evaluated RBF, Polynomial, Swish, LeakyReLU, and ELU activations; achieved 84.29% accuracy (5.57 percentage-point gain).",
    tag: "APPLIED_AI_RESEARCH",
    accent: "emerald",
  },
  {
    role: "Generative AI Intern",
    organization: "GENBYTE AI, Kerala, India",
    duration: "Jun 2026 – Jul 2026",
    description:
      "Built a RAG-based Tourism Assistant using Groq (Llama 3.3 70B), Streamlit, and Supabase pgvector; developed semantic retrieval with 384-dimensional MiniLM embeddings, cosine similarity, PDF/TXT ingestion, and guardrails.",
    tag: "GENERATIVE_AI_RAG",
    accent: "lime",
  },
  {
    role: "Advanced Linux Intern",
    organization: "Webel Pvt. Ltd., India",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Practiced Linux system administration, file system management, user/group permissions, process control, command-line tools, and shell scripting. Explored system architecture and resource automation.",
    tag: "SYSTEMS_ADMIN",
    accent: "emerald",
  },
  {
    role: "Cyber Security Research Intern",
    organization: "DataSpace Academy & The Neotia University",
    duration: "One-Month Comprehensive Program",
    description:
      "Explored proactive defensive systems, network vulnerability scanning, threat vector modeling, packet telemetry analysis, and incident mitigation frameworks.",
    tag: "SECURITY_DEFENSE",
    accent: "lime",
  },
];

const ResumeSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollProgress(pct);
  };

  const scrollByAmount = (offset: number) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ top: offset, behavior: "smooth" });
  };

  return (
    <section id="resume" className="section-padding relative">
      <div className="max-w-[1520px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span>TIMELINE_CHRONOLOGY // ACADEMICS & ROLES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ebebeb]">
              EXPERIENCE & <span className="italic gradient-lime-text">ACADEMICS..</span>
            </h2>
          </div>

          {/* Download Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/CV2026.pdf";
              link.download = "Aritra_Mukhopadhyay_CV2026.pdf";
              link.click();
            }}
            className="btn-neon-pulse inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[#000000] self-start md:self-auto"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>DOWNLOAD CV (2026)</span>
          </button>
        </div>

        {/* 2-Column Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-stretch">
          
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between h-full min-h-[520px]"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ccff00]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#ebebeb] uppercase tracking-wide">
                      Academic Formation
                    </h3>
                    <span className="font-mono text-[10px] text-[#ebebeb]/40 uppercase tracking-widest">
                      THE_NEOTIA_UNIV & WB
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/20 px-3 py-1 rounded-full">
                  ACADEMICS
                </span>
              </div>

              <div className="space-y-8 relative before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-white/15">
                {educationHistory.map((item, idx) => (
                  <div key={idx} className="relative pl-9 group">
                    {/* Timeline Node */}
                    <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_8px_#ccff00] group-hover:scale-125 transition-transform" />

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-base text-[#ebebeb] group-hover:text-[#ccff00] transition-colors">
                        {item.degree}
                      </h4>
                      <span className="font-mono text-[10px] text-[#ccff00] bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10">
                        {item.period}
                      </span>
                    </div>

                    <p className="font-mono text-xs text-[#10b981] font-semibold mb-1">
                      {item.specialization}
                    </p>

                    <div className="flex items-center justify-between text-xs text-[#ebebeb]/60">
                      <span>{item.institution}</span>
                      <span className="font-mono text-[10px] text-[#ccff00]/80 font-bold">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#ebebeb]/40">
              <span>SPECIALIZATION: AI & DEEP LEARNING</span>
              <span className="text-[#10b981]">STATUS: ACTIVE (2027)</span>
            </div>
          </motion.div>

          {/* Right Column: Industry Experience with Interactive Scrolling Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] p-8 sm:p-10 shadow-2xl relative flex flex-col justify-between h-full min-h-[520px] group/card"
          >
            <div>
              {/* Header with Navigation Controls and Scroll Indicator */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#10b981]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#ebebeb] uppercase tracking-wide">
                      Industry Experience
                    </h3>
                    <span className="font-mono text-[10px] text-[#ebebeb]/40 uppercase tracking-widest">
                      RESEARCH & ENGINEERING ({internshipHistory.length} ROLES)
                    </span>
                  </div>
                </div>

                {/* Interactive Scroll Controls & Progress Indicator */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded-full border border-[#10b981]/25">
                    <MousePointer2 className="w-3 h-3 animate-bounce" />
                    <span>SCROLL TO EXPLORE</span>
                  </div>

                  <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-full p-1">
                    <button
                      onClick={() => scrollByAmount(-140)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#ebebeb]/60 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Scroll Up"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => scrollByAmount(140)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-[#ebebeb]/60 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Scroll Down"
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable Timeline Area with fade masks */}
              <div className="relative">
                {/* Top Fade Mask */}
                <div
                  className={`pointer-events-none absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-[#0c0c0c]/90 to-transparent z-10 transition-opacity duration-300 ${
                    scrollProgress > 5 ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Bottom Fade Mask */}
                <div
                  className={`pointer-events-none absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#0c0c0c]/95 to-transparent z-10 transition-opacity duration-300 ${
                    scrollProgress < 95 ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Internal Scroll Container */}
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="max-h-[350px] overflow-y-auto pr-3 space-y-7 relative experience-scrollbar select-none overscroll-contain before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-white/15"
                >
                  {internshipHistory.map((item, idx) => (
                    <div key={idx} className="relative pl-9 group">
                      {/* Timeline Node */}
                      <div
                        className={`absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor] group-hover:scale-125 transition-transform ${
                          item.accent === "lime"
                            ? "bg-[#ccff00] text-[#ccff00]"
                            : "bg-[#10b981] text-[#10b981]"
                        }`}
                      />

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold text-base text-[#ebebeb] group-hover:text-[#ccff00] transition-colors">
                          {item.role}
                        </h4>
                        <span className="font-mono text-[10px] text-[#ebebeb]/60 bg-black/40 px-2.5 py-0.5 rounded-full border border-white/10 shrink-0">
                          {item.duration}
                        </span>
                      </div>

                      <p
                        className={`font-mono text-xs font-semibold mb-2 ${
                          item.accent === "lime" ? "text-[#ccff00]" : "text-[#10b981]"
                        }`}
                      >
                        {item.organization}
                      </p>

                      <p className="text-xs text-[#ebebeb]/70 leading-relaxed font-sans mb-3">
                        {item.description}
                      </p>

                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[#ebebeb]/60">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar & Footer */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-[#ebebeb]/40">
              <div className="flex items-center gap-2">
                <span>VIEWING PROGRESS:</span>
                <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#10b981] to-[#ccff00] transition-all duration-150 rounded-full"
                    style={{ width: `${Math.max(15, scrollProgress)}%` }}
                  />
                </div>
              </div>
              <span className="text-[#ccff00]">VERIFIED IN CLINICAL & AI TRACKS</span>
            </div>
          </motion.div>

        </div>

        {/* Location & Status Bar */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#ccff00]" />
            <span className="font-mono text-xs text-[#ebebeb]/80 uppercase tracking-widest">
              BASE_NODE: Kolkata, West Bengal, India [22.5726° N, 88.3639° E]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#10b981] tracking-[0.18em]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
            <span>GLOBAL_REMOTE_AVAILABLE</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
