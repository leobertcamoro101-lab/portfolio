import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index, inView }) => {
  const { title, description, tech, github, live, highlight, color, icon } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="gradient-border p-5 sm:p-6 group hover:glow transition-all duration-300 flex flex-col"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className={`text-3xl sm:text-4xl p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br ${color} bg-opacity-10`}>
          {icon}
        </div>
        <div className="flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-violet-400 transition-colors text-xs sm:text-sm font-mono"
            >
              GitHub →
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm font-mono"
            >
              Live →
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg sm:text-xl mb-2 group-hover:text-violet-300 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      {/* Highlight */}
      <p className="font-mono text-xs text-violet-400/70 mb-4">{highlight}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs px-2.5 py-1 rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="projects" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <span className="font-mono text-violet-400 text-xs sm:text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
