"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Game = { title: string; src: string };

const GAMES: Game[] = [
  { title: "Minecraft", src: "/images/about/minecraft.png" },
  { title: "Elden Ring", src: "/images/about/elden.png" },
  { title: "Counter Strike 2", src: "/images/about/cs2.png" },
  //{ title: "Roblox", src: "/images/about/roblox.png" },
  { title: "Terraria", src: "/images/about/terraria.png" },
];

const GALLERY: string[] = [
  "/images/about/friends5.jpg",
  "/images/about/gallery2.jpg",
  "/images/about/friends2.jpg",
  "/images/about/friends3.jpg",
  "/images/about/gallery1.jpg",
  "/images/about/friends1.jpg",
  "/images/about/gallery3.jpg",
  "/images/about/friends4.jpg",
];

// Games: dynamic tile sizing
const GAMES_GRID_CLASS =
  "grid gap-3 md:gap-4 [grid-template-columns:repeat(auto-fit,minmax(clamp(80px,9vw,140px),1fr))]";

const IMAGE_SIZES =
  "(min-width:1280px) 140px, (min-width:1024px) 9vw, (min-width:640px) 18vw, 25vw";

// Gallery: always 4 columns
const GALLERY_GRID_CLASS = "grid grid-cols-4 gap-3 md:gap-4";

export default function AboutContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Preload gallery images for faster modal loading
  useEffect(() => {
    const preloadImages = () => {
      GALLERY.forEach((src) => {
        const img = new window.Image();
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(src));
        };
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pb-24">
      <section
        className="
          max-w-7xl px-6 mt-4
          grid grid-cols-1
          lg:[grid-template-columns:clamp(280px,32vw,420px)_1fr]
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
              sizes="(min-width:1024px) 32vw, 90vw"
            />
          </div>
          <div className="rounded-b-xl rounded-t-none -mt-px p-4 md:p-5">
            <h2 className="text-white text-center text-xl md:text-2xl font-bold">
              Jeshad Rahman
            </h2>
            <p className="mt-2 md:mt-3 text-neutral-300 leading-relaxed text-sm md:text-base">
              Full-stack developer passionate about building secure, scalable apps with a love for
              intuitive UI. Experienced in healthcare tech, distributed systems, and AI/ML. I&apos;m
              always learning and creating. I thrive on taking projects from idea to launch,
              iterating with real users along the way.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8 md:space-y-10 md:pl-10">
          {/* Games */}
          <section>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              Games I Like 🎮
            </h3>
            <div className={GAMES_GRID_CLASS}>
              {GAMES.map((g) => (
                <div
                  key={g.title}
                  className="relative aspect-square rounded-xl overflow-hidden bg-neutral-800 group"
                >
                  <Image
                    src={g.src}
                    alt={g.title}
                    fill
                    className="object-cover"
                    sizes={IMAGE_SIZES}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white font-semibold text-sm text-center px-1">
                      {g.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section>
            <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 md:mb-4">
              My Gallery 🎥
            </h3>
            <div className={GALLERY_GRID_CLASS}>
              {GALLERY.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-xl overflow-hidden bg-neutral-800 cursor-pointer group"
                  onClick={() => openModal(src)}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 25vw, (min-width:640px) 25vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading indicator */}
                  {!loadedImages.has(src) && (
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                      <div className="animate-spin rounded-full h-3 w-3 border-b border-white"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              {loadedImages.has(selectedImage) ? (
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full rounded-lg"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800 rounded-lg">
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    <span className="text-white text-sm">Loading image...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
