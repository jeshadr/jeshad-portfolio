"use client";

import { createContext, useContext, useState } from "react";

type UiContextType = {
  showArtistBar: boolean;
  toggleArtistBar: () => void;
  setArtistBar: (v: boolean) => void;
};

const UiContext = createContext<UiContextType | null>(null);

export function UiProvider({ children }: { children: React.ReactNode }) {
  const [showArtistBar, setShowArtistBar] = useState(true); // default: visible
  const toggleArtistBar = () => setShowArtistBar(v => !v);

  return (
    <UiContext.Provider
      value={{ showArtistBar, toggleArtistBar, setArtistBar: setShowArtistBar }}
    >
      {children}
    </UiContext.Provider>
  );
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}
