"use client";

import { useMobilePlayer, type MobileTrack } from "@/components/Mobile/MobilePlayerProvider";
import { PROJECT_CARDS, TECHS } from "@/data/skills";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

export default function PageContent() {
  const router = useRouter();
  const { openQueue } = useMobilePlayer();
  const goStack = () => router.push("/techstack");
  const goProjects = () => router.push("/projects");

  // Drag scroll state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [dragThreshold] = useState(5); // pixels of movement to consider it a drag

  // Convert PROJECT_CARDS to mobile track format
  const mobileTracks: MobileTrack[] = PROJECT_CARDS.map((p) => ({
    id: `home-proj-${p.title}`,
    title: p.title,
    subtitle: "Project",
    description: p.description,
    image: p.image,
    href: p.href,
  }));

  const handleProjectClick = (index: number) => {
    openQueue(mobileTracks, index);
  };

  // Drag scroll handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    
    // Prevent text selection during drag
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    
    // Check if we've moved enough to consider it a drag
    const distance = Math.abs(x - startX);
    if (distance > dragThreshold) {
      setHasDragged(true);
    }
  }, [isDragging, startX, scrollLeft, dragThreshold]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // Reset hasDragged after a short delay to allow click handlers to check it
    setTimeout(() => setHasDragged(false), 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
    // Reset hasDragged after a short delay to allow click handlers to check it
    setTimeout(() => setHasDragged(false), 100);
  }, []);

  return (
    <div className="space-y-8">
      {/* My Techstack */}
      <section className="px-6 mt-0 md:mt-6">
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
          <div 
            ref={scrollContainerRef}
            className={`px-4 sm:px-6 pb-5 overflow-x-auto no-scrollbar select-none transition-colors ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            <div className="flex flex-nowrap gap-4 sm:gap-6 scale-[0.97]">
              {PROJECT_CARDS.map((p, index) => (
                <div
                  key={p.title}
                  className="
                    group relative rounded-xl overflow-hidden bg-neutral-800
                    w-[240px] sm:w-[260px] md:w-[280px]
                    aspect-square
                    ring-1 ring-white/10 hover:ring-white/20
                    transition
                    shrink-0
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  "
                >
                  {/* Mobile: Click to open player */}
                  <button
                    onClick={(e) => {
                      if (!isDragging) {
                        handleProjectClick(index);
                      }
                    }}
                    className="md:hidden absolute inset-0 w-full h-full z-10"
                    aria-label={`Open ${p.title} in mobile player`}
                  />
                  
                  {/* Desktop: Click to open external link */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (isDragging || hasDragged) {
                        e.preventDefault();
                      }
                    }}
                    className="hidden md:block absolute inset-0 w-full h-full z-10"
                    aria-label={p.title}
                  />
                  
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
                  
                  {/* Mobile indicator */}
                  <div className="md:hidden absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
