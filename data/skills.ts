export type SkillTile = {
  name: string;
  image: string;   // public path
  href?: string;    // route or external link
};

export const SKILL_TILES: SkillTile[] = [
  { name: "Java",          image: "/images/java.svg"},
  { name: "JavaScript",    image: "/images/javascript.svg"},
  { name: "TypeScript",    image: "/images/typescript.svg"},
  { name: "Python",        image: "/images/python.svg"},
  { name: "C++",           image: "/images/cpp.svg"},
  { name: "C#",            image: "/images/csharp.svg"},
];

export const FRONTEND_TILES: SkillTile[] = [
  { name: "React",         image: "/images/react.svg"},
  { name: "Next.js",       image: "/images/nextjs.svg"},
  { name: "Tailwind CSS",  image: "/images/tailwind.svg"},
  { name: "HTML",          image: "/images/html.svg"},
  { name: "CSS",          image: "/images/css.svg"},
];

export const BACKEND_TILES: SkillTile[] = [
  { name: "Node.js",       image: "/images/nodejs.svg"},
  { name: "ASP.NET",       image: "/images/aspx.svg",},
];

export type Tech = {
  name: string;
  icon: string;
  subtitle: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

export const TECHS: Tech[] = [
  { name: "HTML", icon: "/images/html.svg", subtitle: "Website Development", proficiency: "Expert" },
  { name: "React", icon: "/images/react.svg", subtitle: "Website Development", proficiency: "Expert" },
  { name: "TypeScript", icon: "/images/typescript.svg", subtitle: "Web Development", proficiency: "Advanced" },
  { name: "Node.js", icon: "/images/nodejs.svg", subtitle: "Backend Development", proficiency: "Advanced" },
  { name: "Python", icon: "/images/python.svg", subtitle: "Scripting & ML", proficiency: "Intermediate" },
  { name: "Tailwind", icon: "/images/tailwind.svg", subtitle: "UI Engineering", proficiency: "Advanced" },
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
    image: "/images/spotify.png",
    href: "https://github.com/jeshadr/jeshad-portfolio",
  },
  {
    title: "PinchDraw",
    description: "Real-time gesture drawing app using camera pinch detection.",
    image: "/images/pinchdraw.png",
    href: "https://github.com/jeshadr/PinchDraw",
  },
  {
    title: "Calorie Calc",
    description: "Fast food calorie tracker with cart flows and spice-level selection.",
    image: "/images/daves2.png",
    href: "https://github.com/jeshadr/DavesCalorieCalculator",
  },
  {
    title: "BC Prediction",
    description: "Machine learning model achieving 96.5% accuracy on tumor classification.",
    image: "/images/ml.png",
    href: "https://github.com/jeshadr/MachineLearningModel",
  },
];
