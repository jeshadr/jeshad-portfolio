"use client";

import Image from "next/image";
import { useMobilePlayer, type MobileTrack } from "./MobilePlayerProvider";

type Props = {
  items: MobileTrack[];
  title?: string;
};

export default function MobileSongList({ items, title }: Props) {
  const { openQueue } = useMobilePlayer();

  return (
    <div className="md:hidden px-1">
      <ul className="divide-y divide-neutral-900/40 rounded-xl overflow-hidden ring-1 ring-neutral-900/40">
        {items.map((t, i) => (
          <li key={t.id}>
            <button
              onClick={() => openQueue(items, i)}
              className="w-full flex items-center gap-3 px-3 py-3 text-left bg-neutral-900/40 hover:bg-white/5 transition"
            >
              <div className="relative h-10 w-10 rounded overflow-hidden bg-neutral-800 shrink-0">
                {t.image ? (
                  <Image src={t.image} alt={t.title} fill className="object-cover" />
                ) : null}
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">{t.title}</div>
                {t.subtitle ? (
                  <div className="text-neutral-400 text-xs truncate">{t.subtitle}</div>
                ) : null}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
