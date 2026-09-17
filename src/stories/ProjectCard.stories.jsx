import ProjectCard from '../components/ProjectCard';

const meta = {
  title: 'Portfolio/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#070710' }],
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    tech: { control: 'object' },
    live: { control: 'text' },
    github: { control: 'text' },
    highlight: { control: 'text' },
    icon: { control: 'text' },
    color: {
      control: 'select',
      options: [
        'from-violet-500 to-purple-400',
        'from-blue-500 to-cyan-400',
        'from-green-500 to-emerald-400',
        'from-yellow-500 to-orange-400',
        'from-emerald-500 to-teal-400',
        'from-pink-500 to-rose-400',
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

// ============================================
// All your real projects as stories!
// ============================================

export const JobBoard = {
  args: {
    title: 'JobBoard',
    description: 'Full-stack job board where companies post jobs and candidates apply. Features search, filtering, and form validation.',
    tech: ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'React Query', 'Zod'],
    github: 'https://github.com/leobertcamoro101-lab/JobBoard',
    live: 'https://job-board-rho-green.vercel.app',
    highlight: 'Full-stack · REST API · Railway · Vercel',
    color: 'from-emerald-500 to-teal-400',
    icon: '💼',
  },
};

export const TaskFlow = {
  args: {
    title: 'TaskFlow',
    description: 'Full-stack task manager with Laravel API backend, React frontend, JWT auth via Sanctum, and Docker containerization.',
    tech: ['React', 'Laravel', 'PostgreSQL', 'Sanctum', 'Docker'],
    github: 'https://github.com/leobertcamoro101-lab',
    live: null,
    highlight: 'Full-stack · Auth · Docker · CI/CD',
    color: 'from-violet-500 to-purple-400',
    icon: '✅',
  },
};

export const LinkSnap = {
  args: {
    title: 'LinkSnap',
    description: 'URL shortener with Next.js App Router, Prisma ORM, Redis caching, rate limiting, and Stripe payments.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Redis', 'Stripe', 'TypeScript'],
    github: 'https://github.com/leobertcamoro101-lab',
    live: null,
    highlight: 'Redis caching · Rate limiting · Stripe payments',
    color: 'from-blue-500 to-cyan-400',
    icon: '✂️',
  },
};

export const AICodeReviewer = {
  args: {
    title: 'AI Code Reviewer',
    description: 'AI-powered code reviewer using OpenAI GPT-4o-mini with real-time streaming, review history, and token estimation.',
    tech: ['Next.js', 'OpenAI', 'TypeScript', 'Streaming API'],
    github: 'https://github.com/leobertcamoro101-lab',
    live: 'https://ai-code-reviewer-alpha-eight.vercel.app',
    highlight: 'OpenAI · Streaming · GPT-4o-mini',
    color: 'from-pink-500 to-rose-400',
    icon: '🤖',
  },
};

export const ReelScout = {
  args: {
    title: 'ReelScout',
    description: 'Movie discovery app with real-time search debounce, cast details, trailers, and pagination.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TMDB API'],
    github: 'https://github.com/leobertcamoro101-lab/ReelScout',
    live: 'https://reel-scout-eight.vercel.app/',
    highlight: 'Debounce · React Query · Skeleton UI',
    color: 'from-yellow-500 to-orange-400',
    icon: '🎬',
  },
};

// No links — shows card without action buttons
export const NoLinks = {
  args: {
    title: 'Private Project',
    description: 'An internal project with no public repository or live demo.',
    tech: ['React', 'Laravel', 'PostgreSQL'],
    highlight: 'Internal · Enterprise',
    icon: '🔒',
  },
};
