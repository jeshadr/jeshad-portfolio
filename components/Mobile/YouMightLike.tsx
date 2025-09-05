"use client";

import Image from "next/image";

export type YMALItem = {
  title: string;
  description?: string;
  image: string;
  href: string;
};

type Props = {
  items: YMALItem[];
  className?: string;
  title?: string;
};

export default function YouMightAlsoLike({
  items,
  className = "",
  title = "You might also like",
}: Props) {
  return (
    <section className={`mt-8 md:hidden ${className}`}>
      <h2 className="text-white text-xl font-semibold px-4">{title}</h2>
      <div className="mt-4 px-4">
        <div className="grid grid-cols-3 max-w-full mx-auto">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="
                group
                rounded-lg hover:bg-white/10 transition
                p-2
                w-full
              "
            >
              <div className="relative w-full aspect-square rounded-md overflow-hidden bg-neutral-800">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-2">
                <div className="text-white font-medium text-sm truncate">
                  {item.title}
                </div>
                {item.description ? (
                  <div className="text-neutral-400 text-xs mt-1 line-clamp-2">
                    {item.description}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
