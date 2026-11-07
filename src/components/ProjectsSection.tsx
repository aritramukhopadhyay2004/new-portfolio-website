import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Download } from "lucide-react";

const projects = {
  mantra: {
    title: "MANTRA — AI Task Guidance",
    subtitle: "Real-time camera verification & spatial token tracking",
    badge: "MANTRA // AI VISION STUDIO",
    poster: "https://www.dropbox.com/scl/fi/bgk0a2jmn2wkx0zi7h7xe/MANTRA.jpg?rlkey=utg9tncwsgfkexquh8yvctlgs&st=e8amd9cy&dl=1",
    url: "https://mantra-v2.vercel.app/",
    type: "LIVE_DEMO",
  },
  stressShield: {
    title: "Stress Shield",
    subtitle: "Occupational Stress & Biometric Telemetry",
    badge: "STRESS SHIELD // CLINICAL AI",
    poster: "https://www.dropbox.com/scl/fi/sozqntt90l9p58gspn8ol/StressShield.jpg?rlkey=a8gcy1qu7dy1ceduwvw6y35pb&st=vg1qnzn9&dl=1",
    url: "https://stress-sheild.vercel.app/",
    type: "LIVE_DEMO",
  },
  nearNest: {
    title: "NearNest Tracker",
    subtitle: "AI Family Safety & Geo Movement Assistant",
    badge: "NEARNEST // MOBILE TELEMETRY",
    poster: "https://www.dropbox.com/scl/fi/qa4oiyluos6q8alepgwb2/NearNest.jpg?rlkey=rrzg1g7iwf0f7d5grfdyh71bs&st=tkzpmbe8&dl=1",
    url: "https://raw.githubusercontent.com/aritramukhopadhyay2004/NearNest/main/apk/NearNest-latest.apk",
    type: "DOWNLOAD_APK",
  },
  abhigraha: {
    title: "ABHIGRAHA 2K25",
    subtitle: "Freshers Orientation & Event Management Platform",
    badge: "ABHIGRAHA // FULL-STACK WEB",
    poster: "https://www.dropbox.com/scl/fi/7em886edw1suj3zgbq4j2/FRESHERS.jpg?rlkey=dgfasoe61s5lpha0kn2clhglv&st=xflzgbyb&dl=1",
    url: "https://abhigraha2k25.vercel.app/",
    type: "LIVE_DEMO",
  },
  architecture: {
    title: "GitHub",
    subtitle: "Open source neural pipelines & edge inference models",
    badge: "MY PUBLIC REPOSITORIES",
    poster: "/hero-bg.jpg",
    url: "https://github.com/aritramukhopadhyay2004",
    type: "OPEN_SOURCE",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 lg:py-36 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Subtle Star Dust & Glow Backdrop */}
      <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none -z-10" />

      <div className="max-w-[1520px] mx-auto flex flex-col items-center">
        
        {/* Top Status Pill matching Reference Picture */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-[11px] font-mono tracking-wider text-[#ebebeb] hover:border-[#ccff00]/40 transition-colors shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="font-semibold text-white/90">LIVE V3.0 Engine Live</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
          </div>
        </motion.div>

        {/* 3D Constellation Stage with Perspective Viewport */}
        <div className="relative w-full max-w-[1280px] min-h-[620px] lg:min-h-[720px] flex items-center justify-center [perspective:1400px]">
          
          {/* Loosely Curved Rope Connecting Cables (Desktop & Tablet) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block overflow-visible"
            viewBox="0 0 1000 650"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ropeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ccff00" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#ffffff" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.85" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ROPE 1: Center to Top-Left Card (Loosely drooping curve) */}
            <g>
              <path
                d="M 410 235 C 330 315, 220 265, 180 135"
                stroke="rgba(0, 0, 0, 0.7)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 410 235 C 330 315, 220 265, 180 135"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 410 235 C 330 315, 220 265, 180 135"
                stroke="url(#ropeGlow)"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="animate-dash-flow"
              />
              <circle cx="410" cy="235" r="3.5" fill="#ccff00" />
              <circle cx="180" cy="135" r="3.5" fill="#ccff00" />
            </g>

            {/* ROPE 2: Center to Top-Right Card (Loosely drooping curve) */}
            <g>
              <path
                d="M 590 235 C 670 315, 780 265, 820 135"
                stroke="rgba(0, 0, 0, 0.7)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 590 235 C 670 315, 780 265, 820 135"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 590 235 C 670 315, 780 265, 820 135"
                stroke="url(#ropeGlow)"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="animate-dash-flow"
              />
              <circle cx="590" cy="235" r="3.5" fill="#ccff00" />
              <circle cx="820" cy="135" r="3.5" fill="#ccff00" />
            </g>

            {/* ROPE 3: Center to Bottom-Left Card (Deep hanging sag like slack rope) */}
            <g>
              <path
                d="M 420 370 C 370 520, 250 560, 180 480"
                stroke="rgba(0, 0, 0, 0.7)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 420 370 C 370 520, 250 560, 180 480"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 420 370 C 370 520, 250 560, 180 480"
                stroke="url(#ropeGlow)"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="animate-dash-flow"
              />
              <circle cx="420" cy="370" r="3.5" fill="#10b981" />
              <circle cx="180" cy="480" r="3.5" fill="#10b981" />
            </g>

            {/* ROPE 4: Center to Bottom-Right Card (Deep hanging sag like slack rope) */}
            <g>
              <path
                d="M 580 370 C 630 520, 750 560, 820 480"
                stroke="rgba(0, 0, 0, 0.7)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M 580 370 C 630 520, 750 560, 180 480"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 580 370 C 630 520, 750 560, 820 480"
                stroke="url(#ropeGlow)"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="animate-dash-flow"
              />
              <circle cx="580" cy="370" r="3.5" fill="#10b981" />
              <circle cx="820" cy="480" r="3.5" fill="#10b981" />
            </g>
          </svg>

          {/* SATELLITE CARD 1 (Top-Left): ABHIGRAHA 2K25 - 3D Tilt from Reference 1 */}
          <div className="md:absolute md:top-2 md:left-2 lg:top-4 lg:left-6 z-20 mb-6 md:mb-0">
            <motion.a
              href={projects.abhigraha.url}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -6, 0],
                rotateZ: [-7, -5, -7],
                rotateX: [8, 6, 8],
                rotateY: [10, 8, 10],
              }}
              whileHover={{
                scale: 1.08,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0,
                zIndex: 50,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block w-full max-w-[280px] aspect-[16/10] bg-[#121212]/95 backdrop-blur-[16px] border border-white/25 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ccff00] hover:shadow-[0_25px_60px_rgba(204,255,0,0.25)] transition-all duration-300 group relative [transform-style:preserve-3d]"
            >
              {/* Project Banner Image */}
              <img
                src={projects.abhigraha.poster}
                alt={projects.abhigraha.title}
                onError={(e) => {
                  e.currentTarget.src = "/hero-bg.jpg";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#10b981] font-bold">
                    {projects.abhigraha.badge}
                  </p>
                  <p className="text-xs font-bold text-white tracking-tight truncate max-w-[190px]">
                    {projects.abhigraha.title}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#ccff00] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* SATELLITE CARD 2 (Top-Right): Stress Shield - 3D Tilt from Reference 1 */}
          <div className="md:absolute md:top-6 md:right-2 lg:top-6 lg:right-6 z-20 mb-6 md:mb-0">
            <motion.a
              href={projects.stressShield.url}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -7, 0],
                rotateZ: [8, 6, 8],
                rotateX: [8, 6, 8],
                rotateY: [-10, -8, -10],
              }}
              whileHover={{
                scale: 1.08,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0,
                zIndex: 50,
              }}
              transition={{
                duration: 11.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="block w-full max-w-[280px] aspect-[16/10] bg-[#121212]/95 backdrop-blur-[16px] border border-white/25 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ccff00] hover:shadow-[0_25px_60px_rgba(204,255,0,0.25)] transition-all duration-300 group relative [transform-style:preserve-3d]"
            >
              {/* Project Banner Image */}
              <img
                src={projects.stressShield.poster}
                alt={projects.stressShield.title}
                onError={(e) => {
                  e.currentTarget.src = "/hero-bg.jpg";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#ccff00] font-bold">
                    {projects.stressShield.badge}
                  </p>
                  <p className="text-xs font-bold text-white tracking-tight truncate max-w-[190px]">
                    {projects.stressShield.title}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#ccff00] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* MAIN CENTRAL FEATURED SHOWCASE CARD (MANTRA) - 3D Tilted Hovering from Reference 2 */}
          <div className="relative z-30 my-8 md:my-0">
            <motion.a
              href={projects.mantra.url}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -8, 0],
                rotateX: [11, 9, 11],
                rotateY: [-14, -12, -14],
                rotateZ: [3.5, 4.5, 3.5],
              }}
              whileHover={{
                scale: 1.04,
                rotateX: 3,
                rotateY: -4,
                rotateZ: 1,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="block w-[320px] sm:w-[480px] lg:w-[540px] xl:w-[580px] aspect-[16/10] rounded-[2.2rem] border border-white/30 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_50px_rgba(204,255,0,0.18)] relative overflow-hidden group hover:border-[#ccff00] transition-all duration-500 [transform-style:preserve-3d]"
            >
              {/* Real Project Banner Image */}
              <img
                src={projects.mantra.poster}
                alt={projects.mantra.title}
                onError={(e) => {
                  e.currentTarget.src = "/hero-bg.jpg";
                }}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Vignette & Specular Rim Light */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2.2rem] pointer-events-none" />

              {/* Bottom-Left Glass Badge matching Reference 2 */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/25 text-white font-mono text-xs font-bold uppercase tracking-wider group-hover:border-[#ccff00] transition-colors shadow-xl mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] shadow-[0_0_10px_#ccff00]" />
                    <span>{projects.mantra.badge}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight drop-shadow">
                    {projects.mantra.title}
                  </h3>
                  <p className="text-xs text-[#ebebeb]/80 hidden sm:block drop-shadow">
                    {projects.mantra.subtitle}
                  </p>
                </div>

                {/* Quick Action External Button */}
                <div className="w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center text-white group-hover:bg-[#ccff00] group-hover:text-black transition-colors shadow-xl shrink-0">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* SATELLITE CARD 3 (Bottom-Left): Architecture & Repositories - 3D Tilt from Reference 1 */}
          <div className="md:absolute md:bottom-2 md:left-2 lg:bottom-4 lg:left-6 z-20 mt-6 md:mt-0">
            <motion.a
              href={projects.architecture.url}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -6, 0],
                rotateZ: [-6, -4, -6],
                rotateX: [-7, -5, -7],
                rotateY: [8, 6, 8],
              }}
              whileHover={{
                scale: 1.08,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0,
                zIndex: 50,
              }}
              transition={{
                duration: 10.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="block w-full max-w-[280px] aspect-[16/10] bg-[#121212]/95 backdrop-blur-[16px] border border-white/25 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ccff00] hover:shadow-[0_25px_60px_rgba(204,255,0,0.25)] transition-all duration-300 group relative [transform-style:preserve-3d]"
            >
              {/* Project Banner Image */}
              <img
                src={projects.architecture.poster}
                alt={projects.architecture.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#ccff00] font-bold">
                    {projects.architecture.badge}
                  </p>
                  <p className="text-xs font-bold text-white tracking-tight truncate max-w-[190px]">
                    {projects.architecture.title}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#ccff00] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          </div>

          {/* SATELLITE CARD 4 (Bottom-Right): NearNest Tracker - 3D Tilt from Reference 1 */}
          <div className="md:absolute md:bottom-2 md:right-2 lg:bottom-4 lg:right-6 z-20 mt-6 md:mt-0">
            <motion.a
              href={projects.nearNest.url}
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                y: [0, -7, 0],
                rotateZ: [7, 5, 7],
                rotateX: [-7, -5, -7],
                rotateY: [-8, -6, -8],
              }}
              whileHover={{
                scale: 1.08,
                rotateZ: 0,
                rotateX: 0,
                rotateY: 0,
                zIndex: 50,
              }}
              transition={{
                duration: 12.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="block w-full max-w-[280px] aspect-[16/10] bg-[#121212]/95 backdrop-blur-[16px] border border-white/25 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-[#ccff00] hover:shadow-[0_25px_60px_rgba(204,255,0,0.25)] transition-all duration-300 group relative [transform-style:preserve-3d]"
            >
              {/* Project Banner Image */}
              <img
                src={projects.nearNest.poster}
                alt={projects.nearNest.title}
                onError={(e) => {
                  e.currentTarget.src = "/hero-bg.jpg";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Bottom Tag & Title */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#10b981] font-bold">
                    {projects.nearNest.badge}
                  </p>
                  <p className="text-xs font-bold text-white tracking-tight truncate max-w-[190px]">
                    {projects.nearNest.title}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#ccff00] group-hover:text-black transition-colors shrink-0 shadow-md">
                  <Download className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.a>
          </div>

        </div>

        {/* Headline & CTA Underneath matching Reference */}
        <div className="mt-16 sm:mt-24 text-center max-w-3xl flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Your intelligent <br />
            <span className="font-serif italic font-normal text-[#e8d7c5] sm:text-[#ebebeb]">
              design partner.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-[#ebebeb]/65 font-sans max-w-xl leading-relaxed mb-10"
          >
            The world's most powerful AI systems and neural architectures. Built for real creators and edge deployment.
          </motion.p>

          {/* Two CTA Buttons matching Reference */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://mantra-v2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/20 text-xs font-mono uppercase tracking-wider text-white hover:border-[#ccff00] hover:text-[#ccff00] transition-all duration-300"
            >
              Enter Studio
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ccff00] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300"
            >
              Start Free Trial
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
