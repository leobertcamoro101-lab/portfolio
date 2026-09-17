// ProjectCard.jsx — reusable project card for Storybook
const ProjectCard = ({
  title = 'Project Title',
  description = 'Project description goes here.',
  tech = [],
  live = null,
  github = null,
  highlight = '',
  icon = '🚀',
  color = 'from-violet-500 to-purple-400',
}) => (
  <div className="bg-white/3 border border-white/10 hover:border-violet-400/30
                  rounded-2xl p-5 sm:p-6 transition-all group">
    <div className="flex items-start justify-between mb-4">
      <span className="text-3xl">{icon}</span>
      <div className="flex gap-2">
        {github && (
          <a href={github} target="_blank" rel="noreferrer"
            className="text-gray-500 hover:text-white text-xs transition-colors">
            GitHub →
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer"
            className="text-violet-400 hover:text-violet-300 text-xs transition-colors">
            Live →
          </a>
        )}
      </div>
    </div>

    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
      {title}
    </h3>

    {highlight && (
      <p className={`bg-gradient-to-r ${color} bg-clip-text text-transparent
                     text-xs font-mono mb-3`}>
        {highlight}
      </p>
    )}

    <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>

    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span key={t}
          className="bg-white/5 border border-white/10 text-gray-400
                     text-xs px-2 py-1 rounded-lg">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
