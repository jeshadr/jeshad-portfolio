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
    icon: "/images/java.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },
  {
    name: "JavaScript",
    icon: "/images/javascript.svg",
    category: "Language",
    since: "2021",
    proficiency: "3–4y",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },
  {
    name: "Python",
    icon: "/images/python.svg",
    category: "Language",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "C++",
    icon: "/images/cpp.svg",
    category: "Language",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "C#",
    icon: "/images/csharp.svg",
    category: "Language",
    since: "2020",
    proficiency: "4–5y",
  },

  //Frontend
  {
    name: "React",
    icon: "/images/react.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "Next.js",
    icon: "/images/csharp.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/csharp.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "HTML 5",
    icon: "/images/html.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "CSS",
    icon: "/images/css.svg",
    category: "Frontend",
    since: "2020",
    proficiency: "4–5y",
  },
//Backend
  {
    name: "Node.js",
    icon: "/images/nodejs.svg",
    category: "Backend",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "ASP.NET",
    icon: "/images/aspx.svg",
    category: "Backend",
    since: "2020",
    proficiency: "4–5y",
  },
//Cloud/DevOps
  {
    name: "AWS",
    icon: "/images/aws2.svg",
    category: "Cloud/DevOps",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "Docker",
    icon: "/images/docker.svg",
    category: "Cloud/DevOps",
    since: "2020",
    proficiency: "4–5y",
  },
  {
    name: "Azure",
    icon: "/images/azure.svg",
    category: "Cloud/DevOps",
    since: "2020",
    proficiency: "4–5y",
  },
];
