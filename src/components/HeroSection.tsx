import { motion } from "framer-motion";
import { Download } from "lucide-react";

const methodologyPoints = [
  {
    number: "1",
    title: "Subtract until it breaks",
    description: "We remove everything that isn't essential to the user's intent.",
  },
  {
    number: "2",
    title: "Motion adds meaning",
    description: "Animation should explain relationships, not just decorate.",
  },
  {
    number: "3",
    title: "Content is interface",
    description: "The best UI is no UI. Let the content speak for itself.",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8"
    >
      {/* Light-grey / Off-white Rounded Container from Reference */}
      <div className="w-full max-w-[1520px] mx-auto bg-[#ececec] text-[#000000] rounded-[2.5rem] lg:rounded-[3rem] p-6 sm:p-10 lg:p-16 relative overflow-hidden shadow-2xl">
        
        {/* Top-left Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black/20 bg-black/5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-black/80 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>METHODOLOGY</span>
          </div>
        </motion.div>

        {/* 2-Column Split: Content & Typography on Left, Circular Photo with Glass Testimonial on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Giant Heading & 3 Points */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Heading matching reference */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold leading-[1.05] tracking-tight text-black mb-12 sm:mb-16">
                Simplicity is the <br />
                ultimate <br />
                <span className="font-serif italic font-medium text-[#14532d]">
                  sophistication.
                </span>
              </h1>

              {/* Numbered List (1, 2, 3) */}
              <div className="space-y-8 sm:space-y-10 max-w-xl">
                {methodologyPoints.map((point, idx) => (
                  <motion.div
                    key={point.number}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.15, duration: 0.5 }}
                    className="flex items-start gap-5 sm:gap-6"
                  >
                    {/* Circle Number */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/25 flex items-center justify-center font-mono text-xs sm:text-sm font-semibold text-black shrink-0 mt-0.5">
                      {point.number}
                    </div>

                    {/* Point Text */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mb-1">
                        {point.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/65 font-sans leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Large Circular Portrait with Dark Glass Overlay Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex flex-col items-center"
            >
              {/* Large Circular Portrait with Aritra's Photo */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] rounded-full overflow-hidden bg-[#222222] shadow-2xl mx-auto flex items-center justify-center">
                <img
                  src="/aritra.jpg"
                  alt="Aritra Mukhopadhyay"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110"
                />
              </div>

              {/* Dark Glassmorphism Testimonial Card Overlaying Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-[92%] sm:w-[86%] max-w-md -mt-20 sm:-mt-24 z-20 bg-black/80 backdrop-blur-[16px] border border-white/15 rounded-3xl p-5 sm:p-6 text-white shadow-2xl"
              >
                <p className="text-xs sm:text-sm font-medium text-white/95 leading-relaxed mb-4 italic font-sans">
                  "Building intelligent systems that turn complex mathematical abstractions into seamless, intuitive realities."
                </p>

                <div className="flex items-center justify-between gap-2.5 sm:gap-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00] shrink-0" />
                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-white font-bold leading-tight">
                      <div className="whitespace-nowrap">ARITRA MUKHOPADHYAY</div>
                      <div className="whitespace-nowrap mt-0.5 text-white/80">AI/ML DEVELOPER</div>
                    </div>
                  </div>

                  {/* Bottom-right Download CV Button */}
                  <a
                    href="/CV2026.pdf"
                    download="Aritra_Mukhopadhyay_CV2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#ccff00] text-black font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(204,255,0,0.35)] shrink-0 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>DOWNLOAD CV</span>
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
