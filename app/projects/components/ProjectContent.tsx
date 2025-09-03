"use client";

import Image from "next/image";

type Project = {
  name: string;
  image: string;
  description: string;
  created: string;
  link?: string;
  tags: string[];   // NEW
};

const PROJECTS: Project[] = [
  {
    name: "Jeshadify",
    image: "/images/spotify.png",
    description:
      "A Spotify-inspired portfolio app that centralizes my work — projects, experience, and skills — with playlist-style navigation, artist-like highlights, and a clean interactive layout.",
    created: "Sep. 2025",
    link: "https://github.com/jeshadr/jeshad-portfolio",
    tags: ["Next.js", "React", "JavaScript", "Tailwind", "TypeScript"],
  },
  {
    name: "PinchDraw",
    image: "/images/pinchdraw.png",
    description:
      "Real-time camera-based gesture app converting pinch motions into brush strokes with fingertip alignment.",
    created: "Jul. 2025",
    link: "https://github.com/jeshadr/PinchDraw",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Dave’s Calorie Calculator",
    image: "/images/daves2.png",
    description:
      "Fast food calorie tracker with spice-level selection and cart flows, deployed via Azure App Service.",
    created: "Jun. 2025",
    link: "https://github.com/jeshadr/DavesCalorieCalculator",
    tags: ["ASP.NET", "JavaScript", "Azure", "HTML/CSS"],
  },
  {
    name: "Breast Cancer Prediction Model",
    image: "/images/ml.png",
    description:
      "ML model achieving 96.5% accuracy on tumor classification using logistic regression and Kaggle dataset.",
    created: "Aug. 2025",
    link: "https://github.com/jeshadr/MachineLearningModel",
    tags: ["Python", "Scikit-learn", "Pandas", "Kaggle"],
  },
  {
    name: "2D RPG Game",
    image: "/images/comingsoon.png",
    description:
      "Lightweight 2d RPG-style game showcasing foundational game mechanics and animation logic.",
    created: "In-progress",
    link: "https://github.com/jeshadr/RPG_Game",
    tags: ["Java"],
  },
];

export default function ProjectContent() {
  return (
    <div className="px-6 pb-24">
      <div className="mt-6 flex flex-col divide-y divide-white/10">
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              grid grid-cols-[180px_minmax(0,1fr)_100px]
              gap-6 items-center
              py-6
              hover:bg-white/5 transition
              rounded-lg px-4
            "
          >
            {/* Project Image */}
            <div className="relative h-40 w-40 rounded-lg overflow-hidden bg-neutral-800 shrink-0">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Middle: Title + Description + Tags */}
            <div className="flex flex-col min-w-0">
              <h3 className="text-white font-semibold text-lg truncate">
                {p.name}
              </h3>
              <p className="text-neutral-300 text-sm mt-2 line-clamp-3">
                {p.description}
              </p>

              {/* Tag bubbles */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Created Date */}
            <div className="justify-self-end text-neutral-400 text-sm">
              {p.created}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
