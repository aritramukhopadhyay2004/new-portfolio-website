import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C"],
    color: "primary",
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "Flask", "FastAPI"],
    color: "primary",
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL"],
    color: "primary",
  },
  {
    title: "AI/ML & Data Science",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Pandas", "HuggingFace"],
    color: "accent",
  },
  {
    title: "Cloud & Deployment",
    skills: ["Docker", "Git", "GitHub", "Render", "Streamlit"],
    color: "primary",
  },
  {
    title: "Tools & Technologies",
    skills: ["VS Code", "Anaconda", "Jupyter", "Colab", "Linux"],
    color: "primary",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies and tools I work with to build intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className={`text-sm font-mono font-semibold mb-4 ${cat.color === "accent" ? "gradient-text-accent" : "gradient-text"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-secondary text-secondary-foreground rounded-md px-3 py-1.5 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
