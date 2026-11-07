import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Cloud, Code2, Wrench, Layers } from "lucide-react";

const skillClusters = [
  {
    icon: Code2,
    title: "PROGRAMMING LANGUAGES",
    skills: ["Python", "Java", "C", "TypeScript", "SQL"],
    status: "PROD_LEVEL",
  },
  {
    icon: Cpu,
    title: "AI/ML & DEEP LEARNING",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Pandas", "NumPy", "HuggingFace"],
    status: "SPECIALIZATION",
    highlight: true,
  },
  {
    icon: Layers,
    title: "WEB & INTERFACE_ENG",
    skills: ["React", "Next.js", "Tailwind CSS", "FastAPI", "Flask", "Node.js"],
    status: "ACTIVE_STACK",
  },
  {
    icon: Database,
    title: "DATABASE",
    skills: ["PostgreSQL", "MySQL", "Vector DBs", "Redis"],
    status: "STRUCTURED",
  },
  {
    icon: Cloud,
    title: "EDGE-CLOUD-OPS",
    skills: ["Docker", "Git / GitHub", "Render", "Vercel", "Streamlit", "AWS (EC2, S3)"],
    status: "DEPLOYMENT",
  },
  {
    icon: Wrench,
    title: "DEVELOPER_TOOLING",
    skills: ["VS Code", "JupyterLab", "Linux CLI", "Google Colab", "Anaconda"],
    status: "ENVIRONMENT",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-[1520px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span>STACK_MATRIX // CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ebebeb]">
              <span className="italic gradient-lime-text">SKILLS </span> & TOOLS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#ebebeb]/60 max-w-md uppercase tracking-wider">
            Quantized models, full-stack pipelines, and automated cloud workflows.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillClusters.map((cluster, i) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`rounded-[2.5rem] border p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden backdrop-blur-[16px] ${
                cluster.highlight
                  ? "bg-white/[0.04] border-[#ccff00]/30 hover:border-[#ccff00] shadow-[0_0_30px_rgba(204,255,0,0.1)]"
                  : "bg-white/[0.03] border-white/10 hover:border-[#ccff00]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ccff00] group-hover:scale-105 transition-transform">
                    <cluster.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#ccff00]">
                    {cluster.status}
                  </span>
                </div>

                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-[#ebebeb]/80 mb-5 font-semibold">
                  {cluster.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-black/40 border border-white/10 text-[#ebebeb] hover:border-[#ccff00] hover:text-[#ccff00] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[9px] text-[#ebebeb]/40">
                <span>PARADIGM: DETERMINISTIC</span>
                <span className="text-[#ccff00]">SYNC: 100%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
