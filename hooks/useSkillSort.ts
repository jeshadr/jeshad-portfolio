"use client";

import { useMemo, useState } from "react";

export type SortKey = "category" | "since" | "proficiency" | null;
export type SortDir = "asc" | "desc";

const toNum = (v: unknown) => {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const num = Number(v.replace(/[^\d.-]/g, ""));
    return Number.isFinite(num) ? num : NaN;
  }
  return NaN;
};

export function useSkillSort<
  T extends { category: string; since?: string | number; proficiency?: number | string }
>(rows: T[]) {
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const categoryCounts = useMemo(() => {
    const m = new Map<string, number>();
    for (const r of rows) m.set(r.category, (m.get(r.category) ?? 0) + 1);
    return m;
  }, [rows]);

  const cycleSort = (key: Exclude<SortKey, null>) => {
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
  };

  const sorted = useMemo(() => {
    if (!sortKey) return rows;
    const copy = [...rows];

    copy.sort((a, b) => {
      if (sortKey === "category") {
        const A = categoryCounts.get(a.category) ?? 0;
        const B = categoryCounts.get(b.category) ?? 0;
        if (A !== B) return B - A;
        const catCmp = a.category.localeCompare(b.category);
        if (catCmp !== 0) return catCmp;
        return String((a as any).name ?? "").localeCompare(String((b as any).name ?? ""));
      }

      if (sortKey === "since") {
        const A = toNum(a.since);
        const B = toNum(b.since);
        if (Number.isNaN(A) && Number.isNaN(B)) return 0;
        if (Number.isNaN(A)) return 1;
        if (Number.isNaN(B)) return -1;
        return B - A;
      }

      if (sortKey === "proficiency") {
        const A = toNum(a.proficiency);
        const B = toNum(b.proficiency);
        if (Number.isNaN(A) && Number.isNaN(B)) return 0;
        if (Number.isNaN(A)) return 1;
        if (Number.isNaN(B)) return -1;
        return B - A;
      }

      return 0;
    });

    if (sortDir === "asc") copy.reverse();
    return copy;
  }, [rows, sortKey, sortDir, categoryCounts]);

  return { sortKey, sortDir, cycleSort, sorted };
}
