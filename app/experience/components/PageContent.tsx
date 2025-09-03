"use client";

import { EXPERIENCES } from "@/data/skills";
import Image from "next/image";

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
              md:grid md:grid-cols-[180px_minmax(0,1fr)_150px] md:items-start md:gap-6 scale-[0.90]
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

              <ul className="list-disc list-inside mt-2 space-y-1 text-neutral-400 text-sm text-left md:text-left">
                {p.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              {/* Mobile date */}
              <div className="mt-3 text-neutral-400 text-sm md:hidden">
                {p.created}
              </div>
            </div>

            {/* Desktop date */}
            <div className="hidden md:block justify-self-end text-neutral-400 text-sm whitespace-nowrap">
              {p.created}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
