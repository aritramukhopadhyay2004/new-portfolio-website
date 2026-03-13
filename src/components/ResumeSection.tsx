import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Download } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Education, experience, and specialization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-border">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary" />
                <h4 className="font-semibold text-foreground">
                  {/* TODO: Replace with your degree */}
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-sm gradient-text font-semibold">
                  Specialization in AI & Machine Learning
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {/* TODO: Replace with your college */}
                  The Neotia University • 2023 - 2027
                </p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground">
                  Higher Secondary Education
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {/* TODO: Replace with your school */}
                  Vivekananda Vidyapith(H.S) • 2021 - 2023
                </p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground">
                  Secondary Education
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {/* TODO: Replace with your school */}
                  Vivekananda Vidyapith(H.S) • 2015 - 2020
                </p>
              </div>
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Internships</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-border">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-primary" />
                <h4 className="font-semibold text-foreground">
                  {/* TODO: Replace with your internship */}
                  Cyber Security Intern
                </h4>
                <p className="text-sm text-primary font-medium">
                  Webel PVT. LTD & The Neotia University
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Six-week intensive summer training program covering cyber
                  security fundamentals, ethical hacking, and security
                  protocols.
                </p>
              </div>
              <div className="relative pl-6 border-l border-border">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-accent" />
                <h4 className="font-semibold text-foreground">
                  Cyber Security Intern
                </h4>
                <p className="text-sm text-accent font-medium">
                  DataSpace Academy & The Neotia University
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  One month comprehensive training in cyber security concepts,
                  threat analysis, and defensive security measures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Address & Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between glass-card rounded-xl p-6 gap-4"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-sm">
              {/* TODO: Replace with your address */}
              Kolkata, West Bengal, India
            </span>
          </div>
          <button
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/MY_CV2026.pdf";
              link.download = "MY_CV2026.pdf";
              link.click();
            }}
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
