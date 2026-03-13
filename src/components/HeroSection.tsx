import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Brain, Code2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              AI/ML Enthusiast & Developer
            </span>
          </div> */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi I'm{" "}
            
            <span className="gradient-text">
              {/* TODO: Replace with your name */}
              Aritra Mukhopadhyay
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed">
            A passionate <span className="text-primary font-semibold">AI & Machine Learning</span> student
            building intelligent systems and beautiful web experiences. I turn data into insights and ideas into reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {[
              { icon: Brain, label: "Machine Learning" },
              { icon: Code2, label: "Full-Stack Dev" },
              { icon: Sparkles, label: "Deep Learning" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="glass-card rounded-lg px-4 py-2 flex items-center gap-2"
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-lg font-semibold text-foreground hover:border-primary/30 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;
