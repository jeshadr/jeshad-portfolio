import Header from "@/components/Header";
import MobilePlayerSheet from "@/components/Mobile/MobilePlayerSheet";
import MobileSongList from "@/components/Mobile/MobileSongList";
import YouMightAlsoLike, { YMALItem } from "@/components/Mobile/YouMightLike";
import { EXPERIENCES } from "@/data/skills";
import Image from "next/image";
import PageContent from "./components/PageContent";

export default function Experience() {
    const mobileTracks = EXPERIENCES.map((p) => ({
        id: `exp-${p.company}`,
        title: p.company,
        subtitle: p.created,
        description: p.description,
        image: p.image,
        href: p.link,
    }));

    const alsoLike: YMALItem[] = [
        {
            title: "Projects",
            description: "A showcase of apps, models, and builds I’ve worked on!",
            image: "/images/playlists/solidMy_Project.svg",
            href: "/projects",
        },
        {
            title: "Contact",
            description: "Reach out to collaborate or say hi 👋",
            image: "/images/playlists/jeshadgpt.png",
            href: "/contact",
        },
        {
            title: "About Me",
            description: "Quick intro and what I care about.",
            image: "/images/playlists/solidAbout_Me.svg",
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
        overflow-y-auto"
        >
            <Header>
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
                                src="/images/playlists/solidExperience.svg" />
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
                            font-bold">Experience & Skills</h1>
                            <p className="hidden mx-1 my-3 md:block font-semibold text-neutral-400 text-sm">
                                A concise snapshot of the apps, tools, and impact I&apos;ve built.
                            </p>
                        </div>
                    </div>
                </div>
            </Header>
            {/* Mobile: song-style list */}
            <section className="md:hidden px-2 pt-2">
                <MobileSongList items={mobileTracks} title="Experience" />
            </section>

            {/* Desktop: existing project content */}
            <section className="hidden md:block">
                <PageContent />
            </section>

            {/* You might also like */}
            <YouMightAlsoLike items={alsoLike} className="pb-28" />

            {/* Bottom player sheet for mobile */}
            <MobilePlayerSheet title="Experiences"/>
        </div>
    )
}