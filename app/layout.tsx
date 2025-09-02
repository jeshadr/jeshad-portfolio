import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({
  //variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Jeshadify - Portfolio",
  description: "A Spotify themed portfolio that lets you explore my work, resume, tech stack, and contack details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className} >
          <Sidebar>
          {children}
          </Sidebar>
      </body>
    </html>
  );
}
