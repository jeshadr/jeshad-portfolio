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
    since: "2021",
    proficiency: "3–4y",
  },
  {
    name: "JavaScript",
    icon: "/images/javascript.svg",
    category: "Language",
    since: "2019",
    proficiency: "5–6y",
  },
  {
    name: "TypeScript",
    icon: "/images/typescript.svg",
    category: "Language",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "Python",
    icon: "/images/python.svg",
    category: "Language",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "C++",
    icon: "/images/cpp.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },
  {
    name: "C#",
    icon: "/images/csharp.svg",
    category: "Language",
    since: "2022",
    proficiency: "2–3y",
  },

  //Frontend
  {
    name: "React",
    icon: "/images/react.svg",
    category: "Frontend",
    since: "2024",
    proficiency: "0-1y",
  },
  {
    name: "Next.js",
    icon: "/images/nextjs.svg",
    category: "Frontend",
    since: "2024",
    proficiency: "1–2y",
  },
  {
    name: "Tailwind CSS",
    icon: "/images/tailwind.svg",
    category: "Frontend",
    since: "2025",
    proficiency: "0–1y",
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
    since: "2022",
    proficiency: "2–3y",
  },
//Backend
  {
    name: "Node.js",
    icon: "/images/nodejs.svg",
    category: "Backend",
    since: "2025",
    proficiency: "0–1y",
  },
  {
    name: "ASP.NET",
    icon: "/images/aspx.svg",
    category: "Backend",
    since: "2023",
    proficiency: "1–2y",
  },
//Cloud/DevOps
  {
    name: "AWS",
    icon: "/images/aws2.svg",
    category: "Cloud/DevOps",
    since: "2023",
    proficiency: "1–2y",
  },
  {
    name: "Docker",
    icon: "/images/docker.svg",
    category: "Cloud/DevOps",
    since: "2025",
    proficiency: "0–1y",
  },
  {
    name: "Azure",
    icon: "/images/azure.svg",
    category: "Cloud/DevOps",
    since: "2023",
    proficiency: "1–2y",
  },
];
