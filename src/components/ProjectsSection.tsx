import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Placeholder projects — will be managed from admin panel
const projects = [
  {
    id: 1,
    title: "AI Image Classifier",
    description: "Deep learning model for classifying images using CNNs with TensorFlow and Keras.",
    // TODO: Replace with actual project poster from admin panel
    poster: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    liveDemo: "#",
  },
  {
    id: 2,
    title: "Pollution level scoring of cities",
    description: "Analyzes city pollution data to score and rank cities based on AQI, PM levels, and other environmental factors.",
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveDemo: "https://pollution-level-scoring-of-cities.vercel.app/",
  },
  {
    id: 3,
    title: "stress\n-\nsheild",
    description: "A real-time health monitoring system that detects stress levels in individuals, provides instant alerts, and delivers personalized recommendations including relaxation techniques, medication reminders, and duty-cycling rest schedules to optimize work-rest balance for improved healthcare outcomes.",
    poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveDemo: "https://stress-sheild.vercel.app/dashboard",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A showcase of things I've built and experimented with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.poster}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
