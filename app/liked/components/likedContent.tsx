"use client";
import { SKILL_SONGS } from "@/data/skillsPlaylist";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { HiArrowDown, HiArrowUp, HiSwitchVertical } from "react-icons/hi";

type Row = {
  name: string;
  icon: string;
  category: string;
  since?: string | number;
  proficiency?: number | string;
  notes?: string;
};

type SortKey = "category" | "since" | "proficiency" | null;
type SortDir = "asc" | "desc";

function SortHint() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 animate-fadeIn">
      <button
        onClick={() => setOpen(false)}
        className="
          w-96 text-left
          rounded-xl border border-white/10
          bg-neutral-900/95 shadow-xl backdrop-blur
          p-5 flex items-start gap-4
          hover:bg-neutral-800 transition
        "
      >
        <div className="rounded-md bg-green-500/15 p-3">
          <HiSwitchVertical className="h-6 w-6 text-green-400" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-medium text-white">Sorting</p>
          <p className="text-sm text-neutral-300 mt-1">
            Click Category, Since, or Proficiency to sort. Click again to flip the order. Third click resets.
          </p>
          <p className="text-sm text-green-400 mt-3">
            Click anywhere on this tip to dismiss
          </p>
        </div>
      </button>
    </div>
  );
}


export default function LikedContent() {
  const baseRows: Row[] = SKILL_SONGS as Row[];

  const categoryCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const r of baseRows) m.set(r.category, (m.get(r.category) ?? 0) + 1);
    return m;
  }, [baseRows]);

  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  function cycleSort(key: Exclude<SortKey, null>) {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("desc");
      return;
    }
    if (sortDir === "desc") {
      setSortDir("asc");
      return;
    }
    setSortKey(null);
  }

  const toNum = (v: unknown) => {
    if (typeof v === "number") return v;
    if (typeof v === "string") {
      const num = Number(v.replace(/[^\d.-]/g, ""));
      return Number.isFinite(num) ? num : NaN;
    }
    return NaN;
  };

  const sorted = useMemo(() => {
    if (!sortKey) return baseRows;
    const rows = [...baseRows];

    rows.sort((a, b) => {
      let A = 0;
      let B = 0;

      if (sortKey === "category") {
        A = categoryCounts.get(a.category) ?? 0;
        B = categoryCounts.get(b.category) ?? 0;
        if (A !== B) return B - A;
        const catCmp = a.category.localeCompare(b.category);
        if (catCmp !== 0) return catCmp;
        return a.name.localeCompare(b.name);
      }

      if (sortKey === "since") {
        A = toNum(a.since);
        B = toNum(b.since);
        if (Number.isNaN(A) && Number.isNaN(B)) return 0;
        if (Number.isNaN(A)) return 1;
        if (Number.isNaN(B)) return -1;
        return B - A;
      }

      if (sortKey === "proficiency") {
        A = toNum(a.proficiency);
        B = toNum(b.proficiency);
        if (Number.isNaN(A) && Number.isNaN(B)) return 0;
        if (Number.isNaN(A)) return 1;
        if (Number.isNaN(B)) return -1;
        return B - A;
      }

      return 0;
    });

    if (sortDir === "asc") rows.reverse();
    return rows;
  }, [baseRows, sortKey, sortDir, categoryCounts]);

  const Arrow = ({ active, dir }: { active: boolean; dir: SortDir }) => {
    if (!active) return null;
    return dir === "asc" ? (
      <HiArrowUp className="inline-block h-4 w-4 text-green-500 ml-1 align-middle" />
    ) : (
      <HiArrowDown className="inline-block h-4 w-4 text-green-500 ml-1 align-middle" />
    );
  };

  const headerBase =
    "cursor-pointer hover:text-white transition inline-flex items-center";
  const headClass = (k: SortKey, extra = "") =>
    `${headerBase} ${extra} ${sortKey === k ? "text-green-400 hover:text-green-300" : ""}`;

  return (
    <div className="px-4 sm:px-6">
      <SortHint />

      {/* Header row */}
      <div
        className="
          hidden md:grid
          grid-cols-[24px_minmax(0,1fr)_140px_120px_80px]
          gap-4 py-3 px-4 text-xs uppercase tracking-widest text-neutral-400
          border-b border-white/10 sticky top-0 z-10
          bg-gradient-to-b to-transparent backdrop-blur
        "
      >
        <div>#</div>
        <div>Title</div>

        <div
          role="button"
          tabIndex={0}
          className={headClass("category", "-ml-4")}
          onClick={() => cycleSort("category")}
          onKeyDown={(e) => e.key === "Enter" && cycleSort("category")}
        >
          Category
          <Arrow active={sortKey === "category"} dir={sortDir} />
        </div>

        <div
          role="button"
          tabIndex={0}
          className={headClass("since")}
          onClick={() => cycleSort("since")}
          onKeyDown={(e) => e.key === "Enter" && cycleSort("since")}
        >
          Since
          <Arrow active={sortKey === "since"} dir={sortDir} />
        </div>

        <div
          role="button"
          tabIndex={0}
          className={headClass("proficiency", "justify-self-end")}
          onClick={() => cycleSort("proficiency")}
          onKeyDown={(e) => e.key === "Enter" && cycleSort("proficiency")}
        >
          Proficiency
          <Arrow active={sortKey === "proficiency"} dir={sortDir} />
        </div>
      </div>

      {/* Rows */}
      <div className="mt-2">
        {sorted.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="
              rounded transition hover:bg-white/5
              px-3 py-3
              flex-col gap-1
              md:grid md:grid-cols-[24px_minmax(0,1fr)_155px_120px_80px] md:items-center md:gap-4
            "
          >
            {/* Mobile first line */}
            <div className="md:hidden flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative h-10 w-10 rounded overflow-hidden flex-none">
                  <Image src={s.icon} alt={s.name} fill className="object-contain p-1.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium truncate">{s.name}</div>
                </div>
              </div>
              <div className="text-neutral-200 text-sm tabular-nums">{s.proficiency}</div>
            </div>

            {/* Mobile meta */}
            <div className="md:hidden flex items-center gap-1 ml-13 -mt-1 text-neutral-400 text-xs leading-tight">
              <span>{s.category}</span>
              {s.since ? <span className="mx-1">•</span> : null}
              {s.since ? <span>{s.since}</span> : null}
              {s.notes ? <span className="mx-1">• {s.notes}</span> : null}
            </div>

            {/* Desktop cells */}
            <div className="hidden md:block text-neutral-400 text-sm">{i + 1}</div>

            <div className="hidden md:flex items-center gap-3 min-w-0">
              <div className="relative h-10 w-10 rounded overflow-hidden shrink-0">
                <Image src={s.icon} alt={s.name} fill className="object-contain p-1.5" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">{s.name}</div>
                {s.notes ? <div className="text-neutral-400 text-xs truncate">{s.notes}</div> : null}
              </div>
            </div>

            <div className="hidden md:block text-neutral-300 text-sm">{s.category}</div>
            <div className="hidden md:block text-neutral-300 text-sm">{s.since}</div>
            <div className="hidden md:block justify-self-end text-neutral-200 text-sm tabular-nums">
              {s.proficiency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
