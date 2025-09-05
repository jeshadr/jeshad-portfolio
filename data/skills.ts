export type SkillTile = {
  name: string;
  image: string;
  href?: string;
};

export const SKILL_TILES: SkillTile[] = [
  { name: "Java", image: "/images/techstack/java.svg" },
  { name: "JavaScript", image: "/images/techstack/javascript.svg" },
  { name: "TypeScript", image: "/images/techstack/typescript.svg" },
  { name: "Python", image: "/images/techstack/python.svg" },
  { name: "C++", image: "/images/techstack/cpp.svg" },
  { name: "C#", image: "/images/techstack/csharp.svg" },
];

export const FRONTEND_TILES: SkillTile[] = [
  { name: "React", image: "/images/techstack/react.svg" },
  { name: "Next.js", image: "/images/techstack/nextjs.svg" },
  { name: "Tailwind CSS", image: "/images/techstack/tailwind.svg" },
  { name: "HTML", image: "/images/techstack/html.svg" },
  { name: "CSS", image: "/images/techstack/css.svg" },
];

export const BACKEND_TILES: SkillTile[] = [
  { name: "Node.js", image: "/images/techstack/nodejs.svg" },
  { name: "ASP.NET", image: "/images/techstack/aspx.svg", },
];

export type Tech = {
  name: string;
  icon: string;
  subtitle: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

export const TECHS: Tech[] = [
  { name: "HTML", icon: "/images/techstack/html.svg", subtitle: "Website Development", proficiency: "Expert" },
  { name: "React", icon: "/images/techstack/react.svg", subtitle: "Website Development", proficiency: "Intermediate" },
  { name: "TypeScript", icon: "/images/techstack/typescript.svg", subtitle: "Web Development", proficiency: "Advanced" },
  { name: "Node.js", icon: "/images/techstack/nodejs.svg", subtitle: "Backend Development", proficiency: "Intermediate" },
  { name: "Python", icon: "/images/techstack/python.svg", subtitle: "Scripting & ML", proficiency: "Intermediate" },
  { name: "Tailwind", icon: "/images/techstack/tailwind.svg", subtitle: "UI Engineering", proficiency: "Advanced" },
];

export type ProjectCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const PROJECT_CARDS: ProjectCard[] = [
  {
    title: "Jeshadify",
    description: "A Spotify-inspired portfolio showcasing my work, tech stack, and resume.",
    image: "/images/jeshadify.png",
    href: "https://github.com/jeshadr/jeshad-portfolio",
  },
  {
    title: "PinchDraw",
    description: "Real-time gesture drawing app using camera pinch detection.",
    image: "/images/projects/pinchdraw.png",
    href: "https://github.com/jeshadr/PinchDraw",
  },
  {
    title: "Daves Calorie Calc",
    description: "Fast food calorie tracker with cart flows and spice-level selection.",
    image: "/images/projects/daves2.png",
    href: "https://github.com/jeshadr/DavesCalorieCalculator",
  },
  {
    title: "BC Prediction",
    description: "Machine learning model achieving 96.5% accuracy on tumor classification.",
    image: "/images/projects/ml.png",
    href: "https://github.com/jeshadr/MachineLearningModel",
  },
];

export type Experience = {
  company: string;
  role: string;
  image: string;
  description: string;
  created: string;
  link?: string;
  tags: string[];
  bullets: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Irenic Therapeutic Services",
    role: "Software Engineering Intern",
    image: "/images/experience/ireniclogo.png",
    description:
      "Secure, scalable app development in a healthcare environment with HIPAA compliance.",
    created: "Jul. 2025 - Present",
    link: "https://github.com/jeshadr/jeshad-portfolio",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    bullets: [
      "Designed backend services with encrypted storage and audit logging",
      "Led a multi-disciplinary team delivering therapist–patient journaling features",
      "Integrated SSO and RBAC to support clinician workflows",
    ],
  },
  {
    company: "Web Surfing Studios",
    role: "Junior Software Developer",
    image: "/images/experience/websurfing.png",
    description:
      "Collaborative full-stack development with emphasis on code reviews and Git workflows.",
    created: "Jul. 2025 - Present",
    link: "https://github.com/jeshadr/PinchDraw",
    tags: ["JavaScript", "HTML", "CSS"],
    bullets: [
      "Contributed to Phase 1 engineering program with structured onboarding",
      "Participated in collaborative feature development and bug fixes",
      "Followed Agile-style sprints and peer code review",
    ],
  },
  {
    company: "Institute for Digital Inclusion Acceleration",
    role: "Digital Navigator",
    image: "/images/experience/idiaclean.png",
    description:
      "Community-facing role bridging digital literacy and access to technology.",
    created: "Aug. 2025 - Present",
    link: "https://github.com/jeshadr/DavesCalorieCalculator",
    tags: ["Workshops", "Community Support", "Digital Inclusion"],
    bullets: [
      "Facilitated workshops and one-on-one digital literacy training for 50+ people",
      "Collaborated with local organizations to expand program reach",
      "Helped community members adopt online tools for healthcare and education",
    ],
  },
];


type Project = {
  name: string;
  image: string;
  description: string;
  created: string;
  link?: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    name: "Jeshadify",
    image: "/images/projects/jeshadifyprojectlogo.png",
    description:
      "A Spotify-inspired portfolio app that centralizes my work — projects, experience, and skills — with playlist-style navigation, artist-like highlights, and a clean interactive layout.",
    created: "Sep. 2025",
    link: "https://github.com/jeshadr/jeshad-portfolio",
    tags: ["Next.js", "React", "JavaScript", "Tailwind", "TypeScript"],
  },
  {
    name: "PinchDraw",
    image: "/images/projects/pinchdraw.png",
    description:
      "Real-time camera-based gesture app converting pinch motions into brush strokes with fingertip alignment.",
    created: "Jul. 2025",
    link: "https://github.com/jeshadr/PinchDraw",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Dave’s Calorie Calculator",
    image: "/images/projects/daves2.png",
    description:
      "Fast food calorie tracker with spice-level selection and cart flows, deployed via Azure App Service.",
    created: "Jun. 2025",
    link: "https://github.com/jeshadr/DavesCalorieCalculator",
    tags: ["ASP.NET", "JavaScript", "Azure", "HTML/CSS"],
  },
  {
    name: "Breast Cancer Prediction Model",
    image: "/images/projects/ml.png",
    description:
      "ML model achieving 96.5% accuracy on tumor classification using logistic regression and Kaggle dataset.",
    created: "Aug. 2025",
    link: "https://github.com/jeshadr/MachineLearningModel",
    tags: ["Python", "Scikit-learn", "Pandas", "Kaggle"],
  },
  {
    name: "2D RPG Game",
    image: "/images/projects/comingsoon.png",
    description:
      "Lightweight 2D RPG-style game showcasing foundational game mechanics and animation logic.",
    created: "In-progress",
    link: "https://github.com/jeshadr/RPG_Game",
    tags: ["Java"],
  },
];

export type SkillRow = {
  name: string;
  icon: string;
  category: "Language" | "Frontend" | "Backend" | "Cloud/DevOps";
  since: string;
  proficiency: string;
  notes?: string;
  link?: string;
};

export const SKILL_SONGS: SkillRow[] = [
  {
    name: "Java",
    icon: "/images/techstack/java.svg",
    category: "Language",
    since: "2021",
    proficiency: "3–4y",
  },
  {
    name: "JavaScript",
    icon: "/images/techstack/javascript.svg",
    category: "Language",
    since: "2019",
    proficiency: "5–6y",
  },
  {
    name: "TypeScript",
    icon: "/images/techstack/typescript.svg",
    category: "Language",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "Python",
    icon: "/images/techstack/python.svg",
    category: "Language",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "C++",
    icon: "/images/techstack/cpp.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },
  {
    name: "C#",
    icon: "/images/techstack/csharp.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },

  //Frontend
  {
    name: "React",
    icon: "/images/techstack/react.svg",
    category: "Frontend",
    since: "2024",
    proficiency: "0-1y",
  },
  {
    name: "Next.js",
    icon: "/images/techstack/nextjs.svg",
    category: "Frontend",
    since: "2024",
    proficiency: "1–2y",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/techstack/tailwind.svg",
    category: "Frontend",
    since: "2025",
    proficiency: "0–1y",
  },
  {
    name: "HTML 5",
    icon: "/images/techstack/html.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "CSS",
    icon: "/images/techstack/css.svg",
    category: "Frontend",
    since: "2022",
    proficiency: "2–3y",
  },
  //Backend
  {
    name: "Node.js",
    icon: "/images/techstack/nodejs.svg",
    category: "Backend",
    since: "2025",
    proficiency: "0–1y",
  },
  {
    name: "ASP.NET",
    icon: "/images/techstack/aspx.svg",
    category: "Backend",
    since: "2023",
    proficiency: "1–2y",
  },
  //Cloud/DevOps
  {
    name: "AWS",
    icon: "/images/techstack/aws2.svg",
    category: "Cloud/DevOps",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "Docker",
    icon: "/images/techstack/docker.svg",
    category: "Cloud/DevOps",
    since: "2025",
    proficiency: "0–1y",
  },
  {
    name: "Azure",
    icon: "/images/techstack/azure.svg",
    category: "Cloud/DevOps",
    since: "2023",
    proficiency: "1–2y",
  },
];
