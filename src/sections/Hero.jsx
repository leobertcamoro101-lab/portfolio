import { motion } from 'framer-motion';
import { personal } from '../data/portfolio';

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          {personal.availability}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 tracking-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-violet-400 text-base sm:text-xl md:text-2xl mb-4 sm:mb-6"
        >
          &lt; {personal.role} /&gt;
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-400 text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
        >
          {personal.subTagline}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-500 text-xs sm:text-sm mb-8 sm:mb-10"
        >
          📍 {personal.location} · {personal.company}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto bg-violet-500 hover:bg-violet-400 text-white font-bold px-8 py-3.5 sm:py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50 text-white font-bold px-8 py-3.5 sm:py-4 rounded-2xl transition-all"
          >
            Get in Touch
          </button>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-bold px-8 py-3.5 sm:py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            GitHub →
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
