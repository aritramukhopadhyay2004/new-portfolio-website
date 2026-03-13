import { motion } from "framer-motion";
import { Award } from "lucide-react";

// Placeholder certifications — will be managed from admin panel
const certifications = [
  {
    id: 1,
    name: "Machine Learning Specialization",
    company: "Udemy",
    description: "Comprehensive ML course covering supervised and unsupervised learning.",
    technology: "Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn",
  },
  {
    id: 2,
    name: "Deep Learning Specialization",
    company: "Udemy",
    description: "Neural networks, CNNs, RNNs and sequence models.",
    technology: "Keras, TensorFlow,Jupyter Notebooks, Pytorch, Python",
  },
  {
    id: 3,
    name: "Foundations and Practical Applications of AWS",
    company: "DataSpace Academy & The Neotia University",
    description: "Comprehensive training on AWS cloud services, EC2, S3, Lambda, and cloud deployment strategies.",
    technology: "EC2, S3, Lambda, IAM, Guard Duty, Security HUB",
  },
  {
    id: 4,
    name: "Cyber Security Advanced Training",
    company: "Webel PVT. LTD & The Neotia University",
    description: "Advanced six-week summer training program covering ethical hacking and security protocols, Linux CLI, File System  Management, User & Group Administration.",
    technology: "Nmap, Metasploit, Nessus, Wireshark, Burp Suite",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Courses and certifications I've completed
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex gap-4"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground text-sm">{cert.name}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">{cert.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                <span className="inline-block mt-2 text-xs font-mono bg-secondary text-secondary-foreground rounded px-2 py-0.5">
                  {cert.technology}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
