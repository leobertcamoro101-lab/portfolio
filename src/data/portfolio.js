export const personal = {
  name: 'Leobert',
  role: 'Software Engineer',
  tagline: 'I build things for the web.',
  subTagline: 'React developer with nearly 4 years of experience crafting clean, performant web applications.',
  location: 'Cebu City, Philippines 🇵🇭',
  company: 'Sprobe Inc.',
  email: 'leobert.camoro101@gmail.com',
  github: 'https://github.com/leobertcamoro101-lab',
  linkedin: 'https://www.linkedin.com/in/leobert-camoro-1b811a231/',
  availability: 'Open to work',
};

export const skills = [
  { category: 'Frontend', items: ['React JS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Laravel', 'PHP', 'REST APIs'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Bash', 'VS Code', 'Postman'] },
];

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    description: 'Full-featured expense tracker with category filters, date filtering, Recharts visualizations, and localStorage persistence.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/leobertcamoro101-lab/Spendr',
    live: 'https://spendr-lac.vercel.app/',
    highlight: 'useMemo · localStorage · Pie + Bar charts',
    color: 'from-green-500 to-emerald-400',
    icon: '💸',
  },
];

export const experience = [
  {
    company: 'Sprobe Inc.',
    role: 'Software Engineer',
    period: '2021 – Present',
    duration: 'Nearly 4 years',
    location: 'Cebu City, Philippines',
    description: 'Building and maintaining web applications using React JS, Laravel, and PostgreSQL. Collaborating with cross-functional teams to deliver quality software.',
    tech: ['React JS', 'Laravel', 'PostgreSQL', 'Bash'],
  },
];

export const openSource = [
  {
    repo: 'reactplay/react-play',
    pr: '#1721',
    description: 'Removed unused imports and fixed Prettier formatting across 3 files, full feature contribution.',
    url: 'https://github.com/reactplay/react-play/pull/1721',
    status: 'Open',
  },
];
