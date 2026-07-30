import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fluffy-lineup.openai.site"),
  title: {
    default: "Fluffy Lineup — Xitao Liao",
    template: "%s | Fluffy Lineup",
  },
  description:
    "A cozy creature auto-battler about shopping smart, arranging your lineup, and evolving a team with personality.",
  authors: [{ name: "Xitao Liao" }],
  creator: "Xitao Liao",
  keywords: [
    "Fluffy Lineup",
    "绒星排排乐",
    "indie game",
    "auto battler",
    "game design",
    "Godot",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Fluffy Lineup — Xitao Liao",
    description:
      "Cute creatures. Smart lineups. A bilingual game design and development case study.",
    type: "website",
    images: [{ url: "/og.png", width: 1708, height: 909 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluffy Lineup — Xitao Liao",
    description:
      "Cute creatures. Smart lineups. A bilingual game design and development case study.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
