import { EXPERIENCES, PROJECTS, TECHS } from "@/data/skills";

export type SearchItem = {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  section: "Projects" | "Tech" | "Experience" | "Pages";
  keywords?: string[];
  image?: string;
  icon?: string;
};

// ---- Projects ----
const projectItems: SearchItem[] = PROJECTS.map((p) => ({
  id: `project-${p.name}`,
  title: p.name,
  subtitle: p.description,
  href: "/projects",
  section: "Projects",
  keywords: [p.name, ...(p.tags ?? [])],
  image: p.image,
}));


// ---- Tech stack ----
const techItems: SearchItem[] = TECHS.map((t) => ({
  id: `tech-${t.name}`,
  title: t.name,
  subtitle: t.subtitle,
  href: "/techstack",
  section: "Tech",
  keywords: [t.name, t.subtitle, t.proficiency],
  icon: t.icon,
}));

// ---- Experience ----
const experienceItems: SearchItem[] = (EXPERIENCES ?? []).map((e) => ({
  id: `exp-${e.company}`,
  title: e.company,
  subtitle: e.role,
  href: "/experience",
  section: "Experience",
  keywords: [e.company, e.role, ...(e.tags ?? [])],
  image: e.image,
}));

// ---- Top-level  ----
const pageItems: SearchItem[] = [
  { id: "page-projects",   title: "Projects",          href: "/projects",   section: "Pages", icon: "/images/myprojectsicon.png" },
  { id: "page-techstack",  title: "Techstack",         href: "/techstack",  section: "Pages", icon: "/images/techstackPlaylist.png" },
  { id: "page-experience", title: "Experience & Skills", href: "/experience", section: "Pages", icon: "/images/experienceicon.png" },
  { id: "page-contact",    title: "Contact",           href: "/contact",    section: "Pages", icon: "/images/jeshadgpt.png" },
  { id: "page-about",      title: "About Me",          href: "/about",      section: "Pages", icon: "/images/aboutme.png" },
];


export const SEARCH_INDEX: SearchItem[] = [
  ...projectItems,
  ...techItems,
  ...experienceItems,
  ...pageItems,
];

// Basic matcher
export function matchItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((it) => {
    const hay = [
      it.title,
      it.subtitle ?? "",
      ...(it.keywords ?? []),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}
