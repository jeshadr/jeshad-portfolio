"use client";

import Header from "@/components/Header";
import MobilePlayerSheet from "@/components/Mobile/MobilePlayerSheet";
import MobileSongList from "@/components/Mobile/MobileSongList";
import YouMightAlsoLike, { YMALItem } from "@/components/Mobile/YouMightLike";
import { PROJECTS } from "@/data/skills";
import Image from "next/image";
import ProjectContent from "./components/ProjectContent";

export default function ProjectsPage() {
    const mobileTracks = PROJECTS.map((p) => ({
        id: `proj-${p.name}`,
        title: p.name,
        subtitle: p.created,
        description: p.description,
        image: p.image,
        href: p.link,
    }));

    const alsoLike: YMALItem[] = [
        {
            title: "Experience",
            description: "Roles, skills, and highlights from work.",
            image: "/images/experiencelogo.png",
            href: "/experience",
        },
        {
            title: "Contact",
            description: "Reach out to collaborate or say hi.",
            image: "/images/jeshadgpt.png",
            href: "/contact",
        },
        {
            title: "About Me",
            description: "Quick intro and what I care about.",
            image: "/images/aboutmelogo.png",
            href: "/about",
        },

    ];

    return (
        <div
            className="
        no-scrollbar
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
        >
            <Header>
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                            <Image
                                fill
                                alt="Playlist"
                                className="object-cover"
                                src="/images/projectslogo.png"
                            />
                        </div>

                        <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                            <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                                My Projects
                            </h1>

                            <p className="hidden mx-1 my-3 md:block text-neutral-400 font-semibold text-sm">
                                A few things I&apos;ve built across full stack, app development, ML model work, and games.
                            </p>
                        </div>
                    </div>
                </div>
            </Header>

            {/* Mobile: song-style list */}
            <section className="md:hidden px-2 pt-2">
                <MobileSongList items={mobileTracks} title="Projects" />
            </section>

            {/* Desktop: existing project content */}
            <section className="hidden md:block">
                <ProjectContent />
            </section>

            {/* You might also like */}
            <YouMightAlsoLike items={alsoLike} className="pb-28" />

            {/* Bottom player sheet for mobile */}
            <MobilePlayerSheet />
        </div>
    );
}
