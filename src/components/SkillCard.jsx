// ============================================
// SkillCard.jsx — extracted from Skills section
//
// LESSON 5: Why extract components for Storybook
//
// Skills.jsx uses framer-motion + scroll hooks
// which are hard to test in isolation.
//
// Extract the SkillCard as a pure component:
// → easier to test in Storybook
// → easier to reuse
// → better separation of concerns
// ============================================

const SkillCard = ({ category, items, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-white/5 border border-white/10',
    highlighted: 'bg-violet-500/10 border border-violet-500/30',
    compact: 'bg-white/3 border border-white/5',
  };

  return (
    <div className={`${variantStyles[variant]} rounded-xl p-4 sm:p-5`}>
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
    </div>
  );
};

export default SkillCard;
