import Header from "@/components/Header";
import Image from "next/image";
import ProjectContent from "./components/ProjectContent";

const Liked = () => {
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
                                src="/images/myprojectsicon.png" />
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
                            font-bold">My Projects</h1>
                            <p className="hidden mx-1 my-3 md:block font-semibold text-sm">
                                A few things I&apos;ve built across full stack, app development, MLL model, and games.
                            </p>

                        </div>
                    </div>
                </div>
            </Header>
            <ProjectContent />
        </div>
    )
}

export default Liked;