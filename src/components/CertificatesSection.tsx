import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle2, ArrowUpRight, X, ExternalLink } from "lucide-react";

interface Certification {
  id: number;
  name: string;
  company: string;
  description: string;
  technology: string;
  credentialId: string;
  accent: string;
  // User can replace these dummy image URLs with actual certificate scans/images or local assets (e.g. /certs/cert1.png)
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: "Hands-on Agentic AI in Business Applications",
    company: "Kognitive Emerging Softwares Services",
    description: "Supervised & unsupervised learning, cost function optimization, linear/logistic regression, decision trees, and ensemble boosting.",
    technology: "Scikit-learn • Pandas • NumPy • Matplotlib • Seaborn",
    credentialId: "ML-SPEC-2024",
    accent: "lime",
    image: "https://www.dropbox.com/scl/fi/xi8cc8p8r2ktxtgp8l2jv/ARITRA-MUKHOPADHYAYkognitiveAgentic_Ai.jpg?rlkey=2my9zn3bdn1wtq7e36qdvxkeq&st=7xxxvdjx&dl=1",
  },
  {
    id: 2,
    name: 'Data Modelling Techniques for Al-driven applications using "Django and MongoDB"',
    company: "Kognitive Emerging Softwares Services",
    description: "Deep neural networks, CNNs for computer vision, RNNs/LSTMs, batch normalization, and hyperparameter tuning.",
    technology: "Keras • TensorFlow • PyTorch • Python • GPU Colab",
    credentialId: "DL-SPEC-2024",
    accent: "emerald",
    image: "https://www.dropbox.com/scl/fi/x6tb3o8pzt44dzr18d94m/ARITRA-MUKHOPADHYAY-data_modelling.png?rlkey=3roctarhgq1ko7qn5d4ankh58&st=hu2brcfh&dl=1",
  },
  {
    id: 3,
    name: "Foundations & Practical Applications of AWS",
    company: "DataSpace Academy & The Neotia University",
    description: "Cloud computing infrastructure, serverless Lambda functions, EC2 compute clustering, S3 data buckets, IAM & Guard Duty.",
    technology: "EC2 • S3 • Lambda • IAM • CloudWatch • Security Hub",
    credentialId: "AWS-FOUND-2024",
    accent: "lime",
    image: "https://www.dropbox.com/scl/fi/ugteykpmhz0tmcakqhf1l/ARITRA-MUKHOPADHYAY-PRACTICALS-OF-AWS.jpg?rlkey=tyb3yebljq8m5f75cri3b03w8&st=weo611oc&dl=1",
  },
  {
    id: 4,
    name: "Cyber Security Advanced Training",
    company: "Webel PVT. LTD & The Neotia University",
    description: "Six-week practical summer security intensive: penetration testing, network sniffing, Linux security hardening, and vulnerability mitigation.",
    technology: "Nmap • Metasploit • Nessus • Wireshark • Burp Suite",
    credentialId: "SEC-ADV-2024",
    accent: "emerald",
    image: "https://www.dropbox.com/scl/fi/d4batuo1mrk0o2iijlq91/ADVENCED-LINUX-FOR-PRESENT-FUTURE.jpeg?rlkey=kv9qal9ep82o7lmubvgum71z7&st=akduc7jb&dl=1",
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Close on Escape & prevent body background scrolling when popup is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-[1520px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span>ACCREDITATIONS // VALIDATED CERTS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ebebeb]">
              VERIFIED <span className="italic gradient-lime-text">CERTIFICATIONS_</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#ebebeb]/60 max-w-md uppercase tracking-wider">
            Formal specializations in Machine Learning, Neural Networks, Cloud Ops & Cyber Defense.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] p-8 flex flex-col justify-between group hover:border-[#ccff00]/40 transition-all duration-300 relative overflow-hidden shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ccff00] group-hover:scale-105 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[#ccff00]">
                    {cert.credentialId}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-[#ebebeb] mb-2 group-hover:text-[#ccff00] transition-colors">
                  {cert.name}
                </h3>

                <p className="font-mono text-xs text-[#10b981] font-semibold mb-3">
                  {cert.company}
                </p>

                <p className="text-xs text-[#ebebeb]/65 leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer with Details and Bottom-Right View Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-[#ebebeb]/50 truncate max-w-[55%] sm:max-w-[65%]">
                  {cert.technology}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-mono uppercase tracking-wider text-[#ebebeb] hover:text-black hover:bg-[#ccff00] hover:border-[#ccff00] transition-all shrink-0 cursor-pointer group/btn shadow-sm"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Medium Size Certificate Preview Popup Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl lg:max-w-3xl max-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-[2rem] p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col z-10 overflow-hidden"
            >
              {/* Modal Top Header */}
              <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00]">
                      {selectedCert.credentialId}
                    </span>
                    <span className="font-mono text-[10px] text-[#10b981] truncate">
                      {selectedCert.company}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#ebebeb] leading-snug truncate">
                    {selectedCert.name}
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shrink-0 cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewer (fits image size) */}
              <div className="relative w-full flex-1 min-h-[220px] max-h-[58vh] bg-black/70 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-2 group">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-full object-contain max-h-[55vh] rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback in case of network issue
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1589330694653-dad6bc01cf0f?w=1200&auto=format&fit=crop&q=80";
                  }}
                />

                {/* Open in new tab overlay pill */}
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-wider text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all shadow-lg"
                >
                  <span>Open Full Image</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Modal Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <p className="font-mono text-[10px] text-[#ebebeb]/50">
                  {selectedCert.technology}
                </p>
                <span className="font-mono text-[10px] text-[#ccff00]/70">
                  Press ESC or click outside to dismiss
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
