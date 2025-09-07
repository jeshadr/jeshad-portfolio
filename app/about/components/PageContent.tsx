"use client";

import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="pb-24">
      {/* container + sane max width */}
      <section
        className="
    max-w-7xl px-6 mt-4
    grid grid-cols-1
    lg:[grid-template-columns:clamp(320px,36vw,500px)_1fr]
    gap-6 items-start
        "
      >
        {/* LEFT */}
        <div className="w-full">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/about/jeshadimage.jpg"
              alt="Jeshad Rahman"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="rounded-b-xl rounded-t-none -mt-px p-5">
            <h2 className="text-white text-center text-2xl font-bold">Jeshad Rahman</h2>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Full-stack developer passionate about building secure, scalable apps with a love for
              intuitive UI. Experienced in healthcare tech, distributed systems, and AI/ML. I&apos;m
              always learning and creating. I thrive on taking projects from idea to launch,
              iterating with real users along the way.
            </p>
          </div>
        </div>

        <div className="space-y-10 md:pl-10">
          <section>
            <h3 className="text-white text-2xl font-semibold mb-4">Games I Like 🎮</h3>
            <div className="flex gap-4 no-scrollbar">
              {[
                { title: "Minecraft", src: "/images/about/minecraft.png" },
                { title: "Elden Ring", src: "/images/about/elden.png" },
                { title: "Counter Strike 2", src: "/images/about/cs2.png" },
                { title: "Roblox", src: "/images/about/roblox.png" },
                { title: "Terraria", src: "/images/about/terraria.png" },
              ].map((g) => (
                <div
                  key={g.title}
                  className="relative flex-none w-40 h-40 md:w-44 md:h-44 rounded-xl overflow-hidden bg-neutral-800 group"
                >
                  <Image src={g.src} alt={g.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white font-semibold">{g.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-white text-2xl font-semibold mb-4">My Gallery 🎥</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-3">
              {[
                "/images/about/friends5.jpg",
                "/images/about/gallery2.jpg",
                "/images/about/friends2.jpg",
                "/images/about/friends3.jpg",
                "/images/about/gallery1.jpg",
                "/images/about/friends1.jpg",
                "/images/about/gallery3.jpg",
                "/images/about/friends4.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-square rounded-lg overflow-hidden bg-neutral-800"
                >
                  <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
