import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    const serviceId =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_my6j1hg";
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_as5n739";
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "uAk352gu_wvw6G2Es";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "mukhopadhyayaritra635@gmail.com" },
              { icon: Phone, label: "+91 97339 69068" },
              { icon: MapPin, label: "Kolkata, West Bengal, India" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/aritramukhopadhyay2004",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/aritra-mukhopadhyay-61293730b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            ref={formRef}
            className="md:col-span-3 glass-card rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            {/* duplicate fields for templates using {{name}} */}
            <input type="hidden" name="name" value={form.name} />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            {/* duplicate field for templates using {{email}} */}
            <input type="hidden" name="email" value={form.email} />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full justify-center"
              disabled={sending}
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
