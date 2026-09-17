// ============================================
// SkillCard.stories.jsx
//
// This file shows the FULL power of Storybook:
// - Args (live prop editing in Controls tab)
// - ArgTypes (control types: select, text, etc.)
// - Multiple stories showing all states
// - Auto-generated docs with autodocs
// ============================================
import SkillCard from '../components/SkillCard';

// ============================================
// LESSON 6: ArgTypes
//
// argTypes tell Storybook HOW to render controls
// for each prop in the Controls panel.
//
// Types: 'text', 'select', 'boolean', 'number',
//        'color', 'object', 'radio'
// ============================================
const meta = {
  title: 'Portfolio/SkillCard',
  component: SkillCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#070710' }],
    },
  },
  // ============================================
  // argTypes — defines the Controls panel
  // ============================================
  argTypes: {
    category: {
      control: 'text',
      description: 'The category label shown at the top',
    },
    items: {
      control: 'object',
      description: 'Array of skill names to display as badges',
    },
    variant: {
      control: 'select',
      options: ['default', 'highlighted', 'compact'],
      description: 'Visual style variant of the card',
    },
  },
  // ============================================
  // Default args — used by all stories unless overridden
  // ============================================
  args: {
    category: 'Frontend',
    items: ['React JS', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    variant: 'default',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// ============================================
// STORIES — each shows a different state
// ============================================

// Default state — uses args from meta
export const Default = {};

// Highlighted variant
export const Highlighted = {
  args: {
    variant: 'highlighted',
  },
};

// Backend category
export const Backend = {
  args: {
    category: 'Backend',
    items: ['Laravel', 'PHP', 'Node.js', 'REST APIs', 'Sanctum', 'PostgreSQL'],
    variant: 'default',
  },
};

// DevOps category
export const DevOps = {
  args: {
    category: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Vercel', 'Git'],
    variant: 'highlighted',
  },
};

// Many skills — tests overflow behavior
export const ManySkills = {
  args: {
    category: 'All Skills',
    items: [
      'React', 'Next.js', 'TypeScript', 'Tailwind',
      'Laravel', 'PHP', 'PostgreSQL', 'Docker',
      'GraphQL', 'tRPC', 'Zod', 'Prisma',
      'Redis', 'Stripe', 'WebSockets',
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests how the card handles a large number of skill badges.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

// Single skill — edge case
export const SingleSkill = {
  args: {
    category: 'Specialty',
    items: ['WebSockets'],
  },
};
