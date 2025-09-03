// app/search/page.tsx
"use client";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { matchItems, SEARCH_INDEX, type SearchItem } from "@/data/searchIndex";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function SearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo<SearchItem[]>(() => matchItems(q), [q]);

  // Group results by section
  const grouped = useMemo(() => {
    const map = new Map<string, SearchItem[]>();
    for (const r of results) {
      if (!map.has(r.section)) map.set(r.section, []);
      map.get(r.section)!.push(r);
    }
    return Array.from(map.entries());
  }, [results]);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput onQueryChange={setQ} />
        </div>
      </Header>

      <div className="px-6 py-6 space-y-8">
        {!q && (
          <div className="text-neutral-400">
            Try searching for a project, technology, or page. (e.g. <span className="text-neutral-200">React</span>, <span className="text-neutral-200">Projects</span>, <span className="text-neutral-200">Experience</span>)
          </div>
        )}

        {q && results.length === 0 && (
          <div className="text-neutral-400">No results for “{q}”.</div>
        )}

        {grouped.map(([section, items]) => (
          <div key={section} className="space-y-3">
            <h2 className="text-white font-semibold">{section}</h2>
            <ul className="divide-y divide-white/10 rounded-xl overflow-hidden ring-1 ring-white/5">
              {items.map((it) => (
                <li key={it.id} className="bg-neutral-900/40 hover:bg-white/5 transition">
                  <Link
                    href={it.href}
                    className="flex items-center gap-4 px-4 py-3"
                  >
                    {/* Thumb/Icon */}
                    <div className="relative h-10 w-10 rounded-md overflow-hidden bg-neutral-800 shrink-0">
                      {it.icon ? (
                        <Image src={it.icon} alt={it.title} fill className="object-contain p-1.5" />
                      ) : it.image ? (
                        <Image src={it.image} alt={it.title} fill className="object-cover" />
                      ) : null}
                    </div>

                    {/* Title + subtitle */}
                    <div className="min-w-0">
                      <div className="text-white font-medium truncate">{it.title}</div>
                      {it.subtitle ? (
                        <div className="text-neutral-400 text-sm truncate">{it.subtitle}</div>
                      ) : null}
                    </div>

                    <span className="ml-auto text-neutral-500 text-sm">Open</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {!q && (
          <div className="space-y-2">
            <h2 className="text-white font-semibold">Quick links</h2>
            <div className="flex flex-wrap gap-2">
              {SEARCH_INDEX
                .filter((i) => i.section === "Pages")
                .slice(0, 5)
                .map((i) => (
                  <Link
                    key={i.id}
                    href={i.href}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-neutral-100 text-sm hover:bg-white/15 transition"
                  >
                    {i.title}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
