import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jor-dev",
  description:
    "Portfolio of Ordi (znhacks) — Full-Stack Developer specializing in Flutter mobile apps, Next.js web applications, Supabase cloud backends, and Ren'Py / Roblox games.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-[#030c17] text-[#d4e4fa] antialiased selection:bg-[#6d28d9] selection:text-white">
        {children}
      </body>
    </html>
  );
}
