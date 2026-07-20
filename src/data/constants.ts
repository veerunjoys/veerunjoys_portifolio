// Skills and Experience data
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VERCEL = "vercel",
  LINUX = "linux",
  LARAVEL = "laravel",
  PYTHON = "python",
  DOTNET = "dotnet",
  SOCKETIO = "socketio",
  REDIS = "redis",
  SQLITE = "sqlite",
  CSHARP = "csharp",
  PHP = "php",
  PRETTIER = "prettier",
  AWS = "aws",
  FIREBASE = "firebase",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "The web's core language, runs everywhere! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript equipped with a powerful type system 🔒💪",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The web's building block, everything starts here 🏗️🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "The heart of style and design, visual excellence 💅✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "The star of component-based UI development ⚛️🌟",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React's most powerful framework, with SSR and SSG support 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Fast and consistent designs with utility-first CSS 🌪️🎨",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript, now powerful on the server side too! 🔙🚀",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express.js",
    shortDescription: "A fast and minimal web framework for Node.js 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 10,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "A powerful and reliable relational database 🐘💎",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 11,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "A flexible NoSQL database with JSON-like documents 🍃💪",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Version control system, keeping code safe 🔄🛡️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "The hub of the open-source world, PRs and collaboration 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 14,
    name: "docker",
    label: "Docker",
    shortDescription: "Consistent environments through containerization 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 15,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deploy and relax, the best frontend hosting 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 16,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system, the foundation of server management 🐧🔓",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 17,
    name: "laravel",
    label: "Laravel",
    shortDescription: "PHP's most elegant framework, elegant syntax 🎯🔴",
    color: "#ff2d20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 18,
    name: "python",
    label: "Python",
    shortDescription: "The favorite language of AI and data science 🐍🧠",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.DOTNET]: {
    id: 19,
    name: "dotnet",
    label: ".NET Core",
    shortDescription: "Microsoft's powerful cross-platform framework 💜⚡",
    color: "#512bd4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  [SkillNames.SOCKETIO]: {
    id: 20,
    name: "socketio",
    label: "Socket.io",
    shortDescription: "The heart of real-time communication, WebSocket-based ⚡🔌",
    color: "#010101",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  [SkillNames.REDIS]: {
    id: 21,
    name: "redis",
    label: "Redis",
    shortDescription: "Lightning-fast in-memory data store ⚡🔴",
    color: "#dc382d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 22,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "Lightweight and portable embedded database 📦💾",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.CSHARP]: {
    id: 23,
    name: "csharp",
    label: "C# / .NET",
    shortDescription: "A modern, object-oriented, powerful and flexible language 💜⚡",
    color: "#9b4993",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  [SkillNames.PHP]: {
    id: 24,
    name: "php",
    label: "PHP",
    shortDescription: "A staple of web servers, dynamic and flexible 🐘💙",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 25,
    name: "prettier",
    label: "Prettier",
    shortDescription: "The hero that auto-formats your code ✍️✨",
    color: "#f7b93e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.AWS]: {
    id: 26,
    name: "aws",
    label: "AWS",
    shortDescription: "The giant power of cloud computing ☁️🌩️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 27,
    name: "firebase",
    label: "Firebase",
    shortDescription: "A fast and secure BaaS platform 🗄️🔥",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jul 2025",
    endDate: "Present",
    title: "Full Stack Developer",
    company: "Novelski IT Solutions — Hyderabad, Telangana",
    description: [
      "Developed full-stack web applications using Python (FastAPI) for backend services and React.js for responsive frontend interfaces.",
      "Designed RESTful APIs across decoupled frontend-backend systems, standardizing data contracts and reducing cross-team integration issues.",
      "Built reusable React.js and Tailwind CSS UI components, speeding up feature delivery and ensuring a consistent experience across devices.",
      "Implemented JWT-based authentication and RBAC to secure sensitive user data and enforce authorization policies.",
      "Optimized PostgreSQL and MongoDB queries, reducing API response times and improving overall application performance.",
      "Collaborated in an Agile environment — sprint planning, code reviews, and daily stand-ups — to deliver features on schedule.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.PYTHON,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode is blindingly bright!",
    "Careful: Light mode is active! Put your sunglasses on.",
    "Only professionals can handle this much brightness!",
    "Turning on light mode... Are your eyes ready?",
    "Switching to light mode — brighter than your future!",
  ],
  dark: [
    "Dark mode active! May the power of the dark side be with you.",
    "Welcome back to dark mode. How was life on the light side?",
    "Dark mode active! Thanks from the bottom of my heart and eyes.",
    "Welcome back to the shadows. How was life out there?",
    "Dark mode is on! Finally, someone who understands true elegance.",
  ],
};
