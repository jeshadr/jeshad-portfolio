"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type MobileTrack = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  href?: string;
};

type Ctx = {
  queue: MobileTrack[];
  index: number;
  isOpen: boolean;
  isPlaying: boolean;
  openQueue: (tracks: MobileTrack[], startAt?: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  togglePlay: () => void;
};

const MobilePlayerCtx = createContext<Ctx | null>(null);

export function MobilePlayerProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<MobileTrack[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [isPlaying, setPlaying] = useState(true);

  const openQueue = (tracks: MobileTrack[], startAt = 0) => {
    setQueue(tracks);
    setIndex(Math.max(0, Math.min(startAt, tracks.length - 1)));
    setOpen(true);
    setPlaying(true);
  };

  const close = () => setOpen(false);
  const next = () => setIndex((i) => (i + 1) % (queue.length || 1));
  const prev = () => setIndex((i) => (i - 1 + (queue.length || 1)) % (queue.length || 1));
  const togglePlay = () => setPlaying((p) => !p);

  const value = useMemo(
    () => ({ queue, index, isOpen, isPlaying, openQueue, close, next, prev, togglePlay }),
    [queue, index, isOpen, isPlaying]
  );

  return <MobilePlayerCtx.Provider value={value}>{children}</MobilePlayerCtx.Provider>;
}

export function useMobilePlayer() {
  const ctx = useContext(MobilePlayerCtx);
  if (!ctx) throw new Error("useMobilePlayer must be used within MobilePlayerProvider");
  return ctx;
}
