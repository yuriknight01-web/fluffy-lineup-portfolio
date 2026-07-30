import type { Metadata } from "next";
import { PortfolioPage } from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Fluffy Lineup — Game Design & Development by Xitao Liao",
  description:
    "A bilingual project case study for Fluffy Lineup, a cozy eight-player creature auto-battler designed and developed by Xitao Liao.",
};

export default function Home() {
  return <PortfolioPage />;
}
