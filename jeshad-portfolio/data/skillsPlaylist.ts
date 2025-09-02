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
  // … add the rest
];
