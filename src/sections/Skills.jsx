import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { skills } from '../data/portfolio';

const Skills = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="skills" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <span className="font-mono text-violet-400 text-xs sm:text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Skills</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map(({ category, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border p-4 sm:p-5"
              >
                <h3 className="text-violet-400 font-mono text-xs font-bold mb-3 sm:mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/5 border border-white/10 hover:border-violet-400/50
                                 text-gray-300 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
