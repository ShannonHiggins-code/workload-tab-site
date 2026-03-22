import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — WorkLoad Tab Chrome Extension",
  description:
    "Full feature list for WorkLoad Tab: Workspaces, Lanes, Memos, AI Search, custom themes, live tab panel, bookmarks popup, and more.",
};

const FEATURES = [
  {
    icon: "🗂️",
    title: "Workspaces",
    details: [
      "Each workspace saves its own set of Lanes, Memos, and background theme independently",
      "Switch workspaces instantly by clicking any workspace button in the top-left",
      "Create new blank workspaces, rename via right-click, delete via the ⋮ menu",
      "Triple-click a workspace to open all tabs saved in all of its Lanes",
      "Click 'Update Workspace' to save changes after editing Lanes",
    ],
  },
  {
    icon: "🚦",
    title: "Lanes & Tab Organization",
    details: [
      "Lanes are named containers for grouping related browser tabs",
      "Drag tabs from the Open Tabs panel on the left into any Lane to save them",
      "Move tabs between Lanes or reorder within a Lane via drag and drop",
      "Launch all tabs in a Lane at once with the 🚀 icon",
      "Color-code any Lane with the 🎨 palette icon",
      "Click a Lane title to rename it; delete via the ⋮ menu",
    ],
  },
  {
    icon: "📋",
    title: "Open Tabs Panel",
    details: [
      "Live panel on the far left showing all currently open Chrome tabs in real time",
      "Drag tabs directly from this panel into your Lanes to save them",
      "Manual refresh button (🔄) to update the list",
      "Color-code the panel itself with the 🎨 icon",
    ],
  },
  {
    icon: "📝",
    title: "Memo Panel",
    details: [
      "Rich-text note editor saved per workspace",
      "Supports bold, italic, lists, and clipboard image paste",
      "Multiple memos per workspace, reorderable via drag and drop",
      "Resizable panel: drag the vertical divider bar left or right",
      "New, Save, and Delete controls for each memo",
    ],
  },
  {
    icon: "✨",
    title: "Universal Search Bar",
    details: [
      "AI Mode (✨): searches via Perplexity AI for AI-powered answers",
      "Google Mode (🔍): standard Google Search",
      "Toggle between modes by clicking the icon on the left of the search bar",
    ],
  },
  {
    icon: "📅",
    title: "Date, Time & Calendar",
    details: [
      "Live-updating clock (hours and minutes) always visible in the header",
      "Click the clock to open a full calendar modal",
      "Monthly view with previous/next month navigation",
      "Current date highlighted automatically",
    ],
  },
  {
    icon: "🎨",
    title: "Themes & Customization",
    details: [
      "Background theme is saved per workspace — each workspace can look different",
      "Choose from pre-defined gradient backgrounds",
      "Upload a custom image as the workspace background",
      "Light/dark mode toggle in the footer",
    ],
  },
  {
    icon: "🔖",
    title: "Bookmarks Popup",
    details: [
      "Access your Chrome bookmarks from a popup without leaving the dashboard",
      "No separate bookmarks tab needed",
    ],
  },
  {
    icon: "🤖",
    title: "AI Tools Popup",
    details: [
      "Curated list of AI prompt engineering and research links",
      "Opens as a popup directly from the footer",
    ],
  },
  {
    icon: "⚙️",
    title: "Settings",
    details: [
      "Background theme selector (per workspace)",
      "Custom image upload",
      "Accessible from the gear icon in the header",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16">
        <Link href="/" style={{ color: "var(--accent)" }} className="text-sm mb-8 block">
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">WorkLoad Tab — Full Feature List</h1>
        <p className="text-lg mb-12" style={{ color: "var(--muted)" }}>
          Everything included in the free Chrome extension.
        </p>
        <div className="space-y-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{f.icon}</span>
                <h2 className="text-xl font-semibold">{f.title}</h2>
              </div>
              <ul className="space-y-2">
                {f.details.map((d) => (
                  <li key={d} className="flex gap-2" style={{ color: "var(--muted)" }}>
                    <span style={{ color: "var(--accent)" }}>•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://chromewebstore.google.com/detail/workload-tab/jcpjknpkfefnhjbkhlcfjbkolgdmonnh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold text-white"
            style={{ background: "var(--accent)" }}
          >
            Add to Chrome — Free →
          </a>
        </div>
      </main>
      <footer
        className="border-t py-8 text-center text-sm"
        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      >
        WorkLoad Tab &mdash; <Link href="/">Home</Link> &middot; <Link href="/faq">FAQ</Link>
      </footer>
    </>
  );
}
