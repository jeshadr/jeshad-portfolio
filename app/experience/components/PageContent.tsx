"use client";

import Image from "next/image";

type Experience = {
  company: string;
  role: string;
  image: string;
  description: string;
  created: string;
  link?: string;
  tags: string[];
  bullets: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Irenic Therapeutic Services",
    role: "Software Engineering Intern",
    image: "/images/ireniclogo.png",
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
    image: "/images/wss.png",
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
    image: "/images/idialogo.png",
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

export default function ProjectContent() {
  return (
    <div className="px-6 pb-24">
      <div className="mt-6 flex flex-col divide-y divide-white/10">
        {EXPERIENCES.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center gap-4 py-6 px-4
              hover:bg-white/5 transition rounded-lg
              md:grid md:grid-cols-[180px_minmax(0,1fr)_150px] md:items-start md:gap-6
            "
          >
            {/* Company Logo */}
            <div className="relative h-28 w-28 md:h-40 md:w-40 rounded-lg overflow-hidden bg-neutral-800 shrink-0 flex items-center justify-center">
              <Image
                src={p.image}
                alt={p.company}
                fill
                className="object-contain"
              />
            </div>

            {/* Middle: Company + Role + Description + Bullets */}
            <div className="flex flex-col min-w-0 text-center md:text-left">
              <h3 className="text-white font-semibold text-lg">{p.company}</h3>
              <p className="text-neutral-400 text-sm font-medium mt-0.5">
                {p.role}
              </p>
              <p className="text-neutral-300 text-sm mt-2">{p.description}</p>

              {/* Bullets */}
              <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 text-sm text-left md:text-left">
                {p.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              {/* Created Date (mobile shows below, desktop on the right) */}
              <div className="mt-3 text-neutral-400 text-sm md:hidden">
                {p.created}
              </div>
            </div>

            {/* Desktop: Created Date on the far right */}
            <div className="hidden md:block justify-self-end text-neutral-400 text-sm whitespace-nowrap">
              {p.created}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
