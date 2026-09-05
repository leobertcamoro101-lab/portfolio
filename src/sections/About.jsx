import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { personal, openSource } from '../data/portfolio';

const About = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <span className="font-mono text-violet-400 text-xs sm:text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text */}
            <div className="space-y-4 sm:space-y-5 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                I'm a Software Engineer based in{' '}
                <span className="text-violet-300 font-medium">Cebu City, Philippines</span>,
                with nearly 4 years of professional experience at{' '}
                <span className="text-violet-300 font-medium">Sprobe Inc.</span>
              </p>
              <p>
                I specialize in building web applications with{' '}
                <span className="text-white font-medium">React JS</span> on the frontend and{' '}
                <span className="text-white font-medium">Laravel</span> on the backend,
                with <span className="text-white font-medium">PostgreSQL</span> as my go-to database.
              </p>
              <p>
                Beyond my day job, I actively practice by building projects and contributing
                to open source. I recently submitted my first PR to{' '}
                <a
                  href={openSource[0]?.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
                >
                  ReactPlay {openSource[0]?.pr}
                </a>.
              </p>
              <p>
                I'm currently <span className="text-emerald-400 font-medium">open to work</span> —
                looking for opportunities where I can grow as a React developer and contribute
                to meaningful products.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '4', label: 'Years Experience', icon: '🗓️' },
                { value: '6', label: 'Projects Built', icon: '🚀' },
                { value: '3', label: 'Open Source PRs', icon: '🔀' },
                { value: '∞', label: 'Lines of Code', icon: '💻' },
                { value: '10+', label: 'Tech Skills', icon: '💻' }
              ].map(({ value, label, icon }) => (
                <div key={label} className="gradient-border p-4 sm:p-5 text-center glow">
                  <p className="text-2xl sm:text-3xl mb-1">{icon}</p>
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">{value}</p>
                  <p className="text-gray-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
