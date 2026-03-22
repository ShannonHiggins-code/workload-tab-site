import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkLoad Tab — Workspace-Based Tab Manager for Chrome",
  description:
    "Replace your new tab with a powerful workspace dashboard. Organize browser tabs into Lanes, take rich-text Memos, and search with AI — all in one Chrome extension.",
  keywords: [
    "Chrome tab manager",
    "workspace tab organizer",
    "new tab replacement",
    "browser productivity extension",
    "tab lanes Chrome",
  ],
  openGraph: {
    title: "WorkLoad Tab — Workspace-Based Tab Manager",
    description: "Organize Chrome tabs into workspaces and lanes. Free Chrome extension.",
    url: "https://workload-tab.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
          {children}
        </body>
    </html>
  );
}
