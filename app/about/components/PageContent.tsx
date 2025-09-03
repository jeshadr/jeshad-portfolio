"use client";

import Image from "next/image";

export default function AboutContent() {
  return (
    <div className="px-6 pb-24 space-y-12">
      {/* Profile Section */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative h-40 w-40 md:h-64 md:w-64 rounded-full overflow-hidden bg-neutral-800">
          <Image
            src="/images/jeshadimage.jpg"
            alt="Jeshad Rahman"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-white text-3xl font-bold">Jeshad Rahman</h1>
        <p className="text-neutral-300 max-w-xl">
          Full-stack developer passionate about building secure, scalable apps with a love for
          intuitive UI. Experienced in healthcare tech, distributed systems, and AI/ML. I&apos;m always
          learning and creating. I thrive on taking projects from idea to launch, iterating
          with real users along the way.
        </p>
      </section>

      {/* Favorite Games Section */}
      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">Games I Like</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {[
            { title: "Minecraft", src: "/images/minecraft.png" },
            { title: "Zelda", src: "/images/elden.png" },
            { title: "Counter Strike 2", src: "/images/cs2.png" },
            { title: "Roblox", src: "/images/roblox.png" },
            { title: "Terraria", src: "/images/terraria.png" },
          ].map((g) => (
            <div
              key={g.title}
              className="relative flex-none w-36 h-36 md:w-40 md:h-40 rounded-xl overflow-hidden bg-neutral-800 group"
            >
              <Image src={g.src} alt={g.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-semibold">{g.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Funny Cats Section */}
      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">My Gallery 🎥</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {[
            "/images/friends1.jpg",
            "/images/friends2.jpg",
            "/images/friends3.jpg",
            "/images/friends4.jpg",
            "/images/friends5.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-square rounded-lg overflow-hidden bg-neutral-800 scale-95"
            >
              <Image
                src={src}
                alt={`Funny Cat ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
