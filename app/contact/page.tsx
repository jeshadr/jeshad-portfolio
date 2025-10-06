import Header from "@/components/Header";
import type { Metadata } from "next";
import Image from "next/image";
import ContactPage from "./components/PageContent";

export const metadata: Metadata = {
  title: "Contact Me!",
  description: "Get in touch with Jeshad Rahman for collaboration, job opportunities, or just to say hi! Contact via email, LinkedIn, GitHub, or use the contact form. Based in Houston, TX.",
  keywords: ["Contact Jeshad Rahman", "Hire Developer", "Software Engineer Contact", "Collaboration", "Job Opportunities", "Houston Developer", "React Developer Contact"],
  openGraph: {
    title: "Contact Jeshad Rahman - Software Developer",
    description: "Get in touch for collaboration, job opportunities, or just to say hi! Available for software development projects.",
    images: ["/images/playlists/jeshadgpt.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jeshad Rahman - Software Developer",
    description: "Get in touch for collaboration and job opportunities",
    images: ["/images/playlists/jeshadgpt.png"],
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

            <Header backgroundColor="from-lime-800">
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
                                src="/images/playlists/jeshadgpt.png" />
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
                            font-bold">Contact Me</h1>
                            <p className="hidden mx-1 my-3 md:block font-semibold text-neutral-400 text-sm">
                                Want to collaborate, hire me, or just say hi? I read every message. 👋
                            </p>

                        </div>
                    </div>
                </div>
            </Header>
            <ContactPage />
        </div>
    )
}

export default Liked;