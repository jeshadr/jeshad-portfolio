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


/*
  { name: "Docker",        image: "/images/docker.svg"},
  { name: "AWS",           image: "/images/aws.svg"},
  */
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


  //href test: { name: "Java",          image: "/images/java.svg",     href: "/projects?skill=Tailwind" },