import Header from "@/components/Header";
import YouMightAlsoLike, { YMALItem } from "@/components/Mobile/YouMightLike";
import { PROJECTS } from "@/data/skills";
import type { Metadata } from "next";
import Image from "next/image";
import LikedContent from "./components/likedContent";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Explore my technical skills and tools including JavaScript, TypeScript, React, Next.js, Python, Node.js, and cloud technologies like AWS and Azure. 5+ years of programming experience.",
  keywords: ["Tech Stack", "Programming Languages", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Node.js", "AWS", "Azure", "Software Development Tools"],
  openGraph: {
    title: "Jeshad Rahman's Tech Stack",
    description: "Programming languages, frameworks, and tools I use for software development including React, TypeScript, Python, and cloud technologies",
    images: ["/images/playlists/techicon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeshad Rahman's Tech Stack",
    description: "Programming languages and tools for software development",
    images: ["/images/playlists/techicon.png"],
  },
};

export default function Liked() {
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
                image: "/images/playlists/solidExperience.svg",
                href: "/experience",
            },
            {
                title: "Contact",
                description: "Reach out to collaborate or say hi.",
                image: "/images/playlists/jeshadgpt.png",
                href: "/contact",
            },
                {
            title: "Projects",
            description: "A showcase of apps, models, and builds I’ve worked on.",
            image: "/images/playlists/solidMy_Project.svg",
            href: "/projects",
        },
    
        ];
    return (
        <div
            className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto"
        >
            <Header backgroundColor="from-violet-800">
                <div className="mt-20">
                    <div className="
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    gap-x-5">
                        <div className="
                        relative
                        h-32
                        w-32
                        lg:h-44
                        lg:w-44
                        ">
                            <Image
                                fill
                                alt="Playlist"
                                className="object-cover"
                                src="/images/playlists/techicon.png" />
                        </div>
                        <div className="
                        flex
                        flex-col
                        gap-y-2
                        mt-4
                        md:mt-0">
                            <h1 className="
                            text-white
                            text-4xl
                            sm:text-5xl
                            lg:text-7xl
                            font-bold">My Techstack</h1>
                            <p className="hidden mx-1 my-3 md:block text-neutral-400 font-semibold text-sm">
                            A curated playlist of the tools, frameworks, and languages I use to design, build, and ship projects.
                            </p>
                        </div>
                    </div>
                </div>
            </Header>
            <LikedContent />
            <YouMightAlsoLike items={alsoLike} className="pb-28" />
        </div>
    )
}
