import Sidebar from "@/components/Sidebar";

import { MobilePlayerProvider } from "@/components/Mobile/MobilePlayerProvider";
import { UiProvider } from "@/components/UiProvider";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Jeshadify - Portfolio",
  description: "A Spotify themed portfolio that lets you explore my work, resume, tech stack, and contact details.",
  verification: {
    google: "xwAF9BiJ20IIsZ8AjF1I1fFkTbXBY5122ZF4NW_9b3U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        <MobilePlayerProvider>
          <UiProvider>
            <Sidebar>{children}</Sidebar>
          </UiProvider>
        </MobilePlayerProvider>
      </body>
    </html>
  );
}
