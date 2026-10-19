import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Champion Hall | Sabitplay Studio",
  description:
    "Exclusive gallery of award-winning game jam championships by Sabitplay Studio: Lembur, Bocah Fishing, Still Her?, and Keepie Uppie.",
};

export default function ChampionHallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
