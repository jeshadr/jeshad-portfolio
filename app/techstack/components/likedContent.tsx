"use client";

import { SKILL_SONGS } from "@/data/skills";
import { useSkillSort } from "@/hooks/useSkillSort";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import Row from "./Row";
import SortHint from "./sortHint";

type RowType = {
  name: string;
  icon: string;
  category: string;
  since?: string | number;
  proficiency?: number | string;
  notes?: string;
};

export default function TechstackPageContent() {
  const baseRows: RowType[] = SKILL_SONGS as RowType[];
  const { sortKey, sortDir, cycleSort, sorted } = useSkillSort(baseRows);

  const headerBase = "cursor-pointer hover:text-white transition inline-flex items-center";
  const headClass = (k: "category" | "since" | "proficiency" | null, extra = "") =>
    `${headerBase} ${extra} ${sortKey === k ? "text-green-400 hover:text-green-300" : ""}`;

  const Arrow = ({ active, dir }: { active: boolean; dir: "asc" | "desc" }) =>
    active ? (
      dir === "asc" ? (
        <HiArrowUp className="inline-block h-4 w-4 text-green-500 ml-1 align-middle" />
      ) : (
        <HiArrowDown className="inline-block h-4 w-4 text-green-500 ml-1 align-middle" />
      )
    ) : null;

  const headerColsClass =
    "hidden md:grid grid-cols-[24px_minmax(0,1fr)_140px_120px_80px] gap-4 py-3 px-4 text-xs uppercase tracking-widest text-neutral-400 border-b border-white/10 sticky top-0 z-10 bg-gradient-to-b to-transparent backdrop-blur";

  return (
    <div className="px-4 sm:px-6">
      <SortHint />

      {/* Header row */}
      <div className={headerColsClass}>
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
          <Row
            key={`${s.name}-${i}`}
            index={i + 1}
            name={s.name}
            icon={s.icon}
            category={s.category}
            since={s.since}
            proficiency={s.proficiency}
            notes={s.notes}
          />
        ))}
      </div>
    </div>
  );
}
