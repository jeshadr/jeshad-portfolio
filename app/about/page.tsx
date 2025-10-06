import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import AboutContent from "./components/PageContent";
//import ProjectContent from "./components/ProjectContent";

export const metadata: Metadata = {
  title: "About Me!",
  description: "Learn about Jeshad Rahman, a passionate full-stack developer with experience in healthcare tech, distributed systems, and AI/ML. Based in Houston, TX. Love for gaming, photography, and building intuitive user experiences.",
  keywords: ["About Jeshad Rahman", "Full-Stack Developer", "Software Engineer", "Healthcare Tech", "Houston Developer", "React Developer", "TypeScript", "Python", "Machine Learning"],
  openGraph: {
    title: "About Jeshad Rahman - Full-Stack Developer",
    description: "Passionate full-stack developer with experience in healthcare tech, AI/ML, and building intuitive user experiences",
    images: ["/images/about/jeshadimage.jpg"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jeshad Rahman - Full-Stack Developer",
    description: "Passionate full-stack developer with experience in healthcare tech and AI/ML",
    images: ["/images/about/jeshadimage.jpg"],
  },
};
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
            <Header backgroundColor="from-green-800">
                <div className="mt-20">
                    <div className="flex flex-col md:flex-row items-center gap-x-5">
                        <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                            <Image
                                fill
                                alt="Playlist"
                                className="object-cover"
                                src="/images/playlists/solidAbout_Me.svg" />
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
                            font-bold">About me</h1>
                            <p className="hidden mx-1 my-3 md:block text-neutral-400 font-semibold text-sm">
                            A quick look at who I am beyond the code — my journey, passions, and the things I enjoy.
                            </p>

                        </div>
                    </div>
                </div>
            </Header>
            <AboutContent />
        </div>
    )
}

export default Liked;