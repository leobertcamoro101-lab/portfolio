export const personal = {
  name: 'Leobert',
  role: 'Software Engineer',
  tagline: 'I build things for the web.',
  subTagline: 'Full-stack developer with nearly 4 years of experience building React frontends and Laravel APIs.',
  location: 'Cebu City, Philippines 🇵🇭',
  company: 'Sprobe Inc.',
  email: 'leobert.camoro101@gmail.com',
  github: 'https://github.com/leobertcamoro101-lab',
  linkedin: 'https://www.linkedin.com/in/leobert-camoro-1b811a231/',
  availability: 'Open to work',
};

export const skills = [
  {
    category: 'Frontend',
    items: ['React JS', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    category: 'State & Data',
    items: ['Zustand', 'Context API', 'React Query', 'React Router', 'Custom Hooks', 'useMemo', 'useCallback'],
  },
  {
    category: 'Backend',
    items: ['Laravel', 'PHP', 'REST APIs', 'Laravel Sanctum', 'Prisma', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Testing & Tools',
    items: ['Vitest', 'React Testing Library', 'Git', 'GitHub', 'Bash', 'VS Code', 'Postman', 'Turborepo'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'TaskFlow',
    description: 'Full-stack task manager with Laravel API backend, React frontend, JWT auth via Sanctum, and PostgreSQL database.',
    tech: ['React', 'Vite', 'Laravel', 'PostgreSQL', 'Sanctum', 'Zustand', 'React Query'],
    github: 'https://github.com/leobertcamoro101-lab/TaskFlow-react-laravel',
    live: null,
    highlight: 'Full-stack · REST API · Auth · CRUD',
    color: 'from-violet-500 to-purple-400',
    icon: '✅',
  },
  {
    id: 2,
    title: 'WeatherNow',
    description: 'Real-time weather app for any city with 5-reading forecast. Built with custom hooks, Axios, and the OpenWeather API.',
    tech: ['React', 'Vite', 'CSS Modules', 'OpenWeather API'],
    github: 'https://github.com/leobertcamoro101-lab/WeatherNow',
    live: 'https://weather-now-sigma-three.vercel.app/',
    highlight: 'Custom useWeather hook · useEffect · Async/Await',
    color: 'from-blue-500 to-cyan-400',
    icon: '🌤',
  },
  {
    id: 3,
    title: 'ReelScout',
    description: 'Movie discovery app with real-time search debounce, cast details, trailers, and pagination. Powered by TMDB API.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'TMDB API'],
    github: 'https://github.com/leobertcamoro101-lab/ReelScout',
    live: 'https://reel-scout-eight.vercel.app/',
    highlight: 'Debounce · Promise.all · Skeleton UI · Modal',
    color: 'from-yellow-500 to-orange-400',
    icon: '🎬',
  },
  {
    id: 3,
    title: 'Spendr',
    description: 'Full-featured expense tracker with category filters, date filtering, CSS chart visualizations, and localStorage persistence.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'localStorage'],
    github: 'https://github.com/leobertcamoro101-lab/Spendr',
    live: 'https://spendr-lac.vercel.app/',
    highlight: 'useMemo · localStorage · CSS Charts',
    color: 'from-green-500 to-emerald-400',
    icon: '💸',
  },
];

export const experience = [
  {
    company: 'Sprobe Inc.',
    role: 'Software Engineer',
    period: 'April 2022 – March 2026',
    duration: 'Nearly 4 years',
    location: 'Cebu City, Philippines',
    description: 'Building and maintaining web applications using React JS, Laravel, and PostgreSQL. Collaborating with cross-functional teams to deliver quality software.',
    tech: ['React JS', 'Laravel', 'PostgreSQL', 'Bash'],
  },
];

export const openSource = [
  {
    repo: 'calcom/cal.diy',
    pr: '#30079',
    description: 'Fixed hardcoded data-testid in VerticalTabItem component, making it truly reusable. Updated component and test file.',
    url: 'https://github.com/calcom/cal.diy/pull/30079',
    status: 'Open',
  },
  {
    repo: 'calcom/cal.diy',
    pr: '#30078',
    description: 'Removed unused TokenHandler component and its test file after confirming it was not exported or imported anywhere in the codebase.',
    url: 'https://github.com/calcom/cal.diy/pull/30078',
    status: 'Open',
  },
  {
    repo: 'reactplay/react-play',
    pr: '#1721',
    description: 'Removed unused imports and fixed Prettier formatting across 3 files.',
    url: 'https://github.com/reactplay/react-play/pull/1721',
    status: 'Open',
  },
];