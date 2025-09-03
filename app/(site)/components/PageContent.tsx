"use client";

import { PROJECT_CARDS, TECHS } from "@/data/skills";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PageContent() {
  const router = useRouter();
  const goStack = () => router.push("/techstack");
  const goProjects = () => router.push("/projects");

  return (
    <div className="space-y-8">
      {/* My Techstack */}
      <section className="px-6 mt-6">
        <div className="rounded-xl bg-neutral-900/50 border border-neutral-900/50 overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <h2 className="text-white text-2xl font-semibold">My Techstack</h2>
            <button onClick={goStack} className="text-sm text-neutral-300 hover:text-white transition">
              Show more
            </button>
          </div>

          <ul className="divide-y divide-white/10 scale-[0.97]">
            {TECHS.slice(0, 6).map((t, i) => (
              <li key={t.name + i}>
                <button
                  onClick={goStack}
                  className="
                    w-full grid grid-cols-[auto_minmax(0,1fr)_auto]
                    items-center gap-3 sm:gap-4
                    px-4 sm:px-6 py-3 sm:py-4
                    hover:bg-white/5 transition text-left
                  "
                >
                  <span className="relative h-10 w-10 rounded-lg bg-neutral-800 overflow-hidden">
                    <Image src={t.icon} alt={t.name} fill className="object-contain p-1.5" sizes="40px" />
                  </span>
                  <span className="min-w-0">
                    <div className="text-white font-medium truncate">{t.name}</div>
                    <div className="text-neutral-400 text-sm truncate">{t.subtitle}</div>
                  </span>
                  <span className="justify-self-end text-xs sm:text-sm px-2 py-1 rounded-full bg-white/10 text-neutral-200 whitespace-nowrap">
                    {t.proficiency}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* My Projects */}
      <section className="px-6">
        <div className="rounded-xl bg-neutral-900/50 border border-neutral-900/50 overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <h2 className="text-white text-2xl font-semibold">My Projects</h2>
            <button onClick={goProjects} className="text-sm text-neutral-300 hover:text-white transition">
              Show more
            </button>
          </div>

          {/* Horizontal scroll container */}
          <div className="px-4 sm:px-6 pb-5 overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap gap-4 sm:gap-6 scale-[0.97]">
              {PROJECT_CARDS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative rounded-xl overflow-hidden bg-neutral-800
                    w-[240px] sm:w-[260px] md:w-[280px]
                    aspect-square
                    ring-1 ring-white/10 hover:ring-white/20
                    transition
                    shrink-0
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  "
                  aria-label={p.title}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 260px, 280px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition" />
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      flex flex-col items-center justify-center text-center
                      px-3
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-200
                    "
                  >
                    <span className="text-white text-sm sm:text-base font-semibold">{p.title}</span>
                    <span className="text-neutral-300 text-xs sm:text-sm mt-1">{p.description}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
