import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Radio, Terminal } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatusMessage(null);

    const serviceId =
      (import.meta.env.VITE_EMAILJS_SERVICE_ID as string) || "service_my6j1hg";
    const templateId =
      (import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string) || "template_as5n739";
    const publicKey =
      (import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string) || "uAk352gu_wvw6G2Es";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatusMessage("TRANSMISSION_SUCCESSFUL: Packet delivered to Aritra.");
      setForm({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatusMessage("ERROR: Transmission failed. Please try direct email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-[1520px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            {/* System Status Tag */}
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              <span>COMM_CHANNEL // REAL-TIME INGESTION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#ebebeb]">
              INITIATE <span className="italic gradient-lime-text">TRANSMISSION..</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#ebebeb]/60 max-w-md uppercase tracking-wider">
            Available for machine learning engineering roles, AI research collaborations & high-impact systems.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols): Direct Contacts & Social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ccff00]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>DIRECT_FREQUENCY // TELEMETRY</span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#ebebeb] mb-3">
              Let’s architect the next intelligent layer.
            </h3>
            <p className="text-xs text-[#ebebeb]/60 font-sans leading-relaxed mb-8">
              Whether you need to build a custom computer vision model, deploy edge telemetry, or discuss an internship/full-time role, my inbox is open.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:mukhopadhyayaritra635@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#ccff00]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ccff00] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#ebebeb]/40">
                    EMAIL_PROTOCOL
                  </p>
                  <p className="font-mono text-xs text-[#ebebeb] font-semibold">
                    mukhopadhyayaritra635@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919733969068"
                className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#ccff00]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#ebebeb]/40">
                    TELEPHONY_DIRECT
                  </p>
                  <p className="font-mono text-xs text-[#ebebeb] font-semibold">
                    +91 97339 69068
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ccff00]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#ebebeb]/40">
                    GEOLOCATION
                  </p>
                  <p className="font-mono text-xs text-[#ebebeb] font-semibold">
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Pill Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebebeb]/40 mb-3">
                SECURE_NETWORKS
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/aritramukhopadhyay2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center transition-colors text-[#ebebeb]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aritra-mukhopadhyay-61293730b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] flex items-center justify-center transition-colors text-[#ebebeb]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Obsidian Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-[16px] p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebebeb]/60">
                <Terminal className="w-3.5 h-3.5 text-[#ccff00]" />
                <span>PACKET_ENCRYPTION: AES_256</span>
              </div>
              <span className="font-mono text-[10px] text-[#ccff00]">ENDPOINT_READY</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebebeb]/60 mb-2">
                    IDENTIFIER // YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Dr. Ada Lovelace"
                    className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-sm text-[#ebebeb] placeholder:text-[#ebebeb]/25 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] outline-none transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebebeb]/60 mb-2">
                    RETURN_ROUTE // EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-sm text-[#ebebeb] placeholder:text-[#ebebeb]/25 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] outline-none transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[#ebebeb]/60 mb-2">
                  PAYLOAD // MESSAGE & SPECIFICATIONS *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Outline project scope, opportunity details, or inquiry..."
                  className="w-full bg-black/60 border border-white/15 rounded-2xl px-5 py-4 text-sm text-[#ebebeb] placeholder:text-[#ebebeb]/25 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] outline-none transition-all font-mono resize-none"
                />
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className="font-mono text-xs p-4 rounded-xl bg-black/80 border border-[#ccff00]/40 text-[#ccff00]">
                  {statusMessage}
                </div>
              )}

              {/* Neon Pulse Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-neon-pulse inline-flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-[#000000] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>{sending ? "TRANSMITTING..." : "TRANSMIT_MESSAGE"}</span>
                </button>

                <span className="font-mono text-[10px] text-[#ebebeb]/30 hidden sm:inline">
                  LATENCY: ~100MS
                </span>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
