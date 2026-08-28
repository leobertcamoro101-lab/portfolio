import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { experience, openSource } from '../data/portfolio';

const Experience = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="experience" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <span className="font-mono text-violet-400 text-xs sm:text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-5 sm:mb-6">
                Work
              </h3>
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="gradient-border p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-white font-bold text-base sm:text-lg">{exp.role}</h4>
                      <p className="text-violet-400 font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-gray-400 text-xs sm:text-sm font-mono">{exp.period}</p>
                      <p className="text-gray-500 text-xs">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs mb-3">📍 {exp.location}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Open Source */}
            <div>
              <h3 className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-5 sm:mb-6">
                Open Source
              </h3>
              {openSource.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="gradient-border p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <p className="text-violet-400 font-mono text-xs sm:text-sm">{item.repo}</p>
                      <p className="text-white font-bold">{item.pr}</p>
                    </div>
                    <span className="self-start bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-3 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-violet-400 hover:text-violet-300 text-sm font-mono transition-colors"
                  >
                    View PR →
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 bg-violet-500/5 border border-violet-500/20 rounded-2xl p-4 sm:p-5 text-center"
              >
                <p className="text-gray-500 text-sm">More contributions coming soon 🚀</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
