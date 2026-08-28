import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { personal } from '../data/portfolio';

const Contact = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="contact" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center">
            <span className="font-mono text-violet-400 text-xs sm:text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          </div>

          {/* Main CTA */}
          <div className="max-w-xl sm:max-w-2xl mx-auto gradient-border p-6 sm:p-10 glow mb-6 sm:mb-8">
            <p className="text-4xl sm:text-5xl mb-4 sm:mb-6">👋</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Let's work together
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              I'm currently open to new opportunities. Whether it's a full-time role,
              freelance project, or just a chat about tech — my inbox is always open.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-block bg-violet-500 hover:bg-violet-400 text-white font-bold
                         px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl transition-all hover:scale-105
                         hover:shadow-xl hover:shadow-violet-500/25 text-base sm:text-lg w-full sm:w-auto"
            >
              Say Hello →
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors font-mono text-sm"
            >
              GitHub ↗
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors font-mono text-sm"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-400 hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              Email ↗
            </a>
          </div>

          {/* Footer */}
          <p className="text-gray-600 text-xs font-mono mt-12 sm:mt-16">
            Built with React + Vite + Tailwind · Designed & coded by Leobert
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
