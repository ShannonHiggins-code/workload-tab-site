import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — WorkLoad Tab Chrome Extension",
  description:
    "Answers to the most common questions about WorkLoad Tab: what it does, how Lanes and Workspaces work, sync, themes, and more.",
};

const FAQ_ITEMS = [
  {
    q: "What is WorkLoad Tab?",
    a: "WorkLoad Tab is a Chrome extension that replaces your new tab page with a productivity dashboard. It lets you organize your open browser tabs into named Workspaces and Lanes, take rich-text Memos, and search the web with AI (Perplexity) or Google — all without opening a new app.",
  },
  {
    q: "Is WorkLoad Tab free?",
    a: "Yes. WorkLoad Tab is completely free. No subscription, no account, no limits.",
  },
  {
    q: "How is WorkLoad Tab different from Arc browser?",
    a: "Arc requires you to switch to an entirely new browser. WorkLoad Tab works inside the Chrome browser you already use — it only replaces the new tab page, not Chrome itself.",
  },
  {
    q: "How is WorkLoad Tab different from Notion or Trello?",
    a: "Notion and Trello are document or project management tools. WorkLoad Tab is built around your open browser tabs — Lanes are tab containers, not databases or boards. It's designed for the way you actually work in Chrome.",
  },
  {
    q: "What are Workspaces?",
    a: "Workspaces are the highest level of organization. Each workspace saves its own Lanes, Memos, and background theme independently. You can switch between workspaces instantly without losing anything.",
  },
  {
    q: "What are Lanes?",
    a: "Lanes are named containers within a workspace for grouping related tabs. You drag tabs from the Open Tabs panel into a Lane to save them. You can launch all tabs in a Lane at once, reorder them, and color-code the Lane.",
  },
  {
    q: "Does WorkLoad Tab sync across devices?",
    a: "Not yet. Workspaces and memos are stored locally in your Chrome extension storage. Cross-device sync is on the roadmap.",
  },
  {
    q: "What happens to my open tabs when I switch workspaces?",
    a: "Nothing — your open tabs stay where they are. Switching workspaces only changes which saved Lanes and Memos are displayed in the dashboard. Triple-click any workspace button to open all tabs saved in that workspace's Lanes.",
  },
  {
    q: "Can I use a custom background image?",
    a: "Yes. Open Settings (⚙️ gear icon in the header), then choose 'Background Theme' to upload a custom image or pick a built-in gradient. Theme settings are saved per workspace.",
  },
  {
    q: "How does the AI search work?",
    a: "The universal search bar in the header has two modes: AI mode (✨) searches via Perplexity AI, and Google mode (🔍) searches via Google. Click the icon on the left of the search bar to toggle between them.",
  },
  {
    q: "Where is my data stored?",
    a: "All data — workspaces, lanes, memos, and settings — is stored locally in Chrome's extension storage on your device. Nothing is sent to any server.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <Link href="/" style={{ color: "var(--accent)" }} className="text-sm mb-8 block">
          ← Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg mb-12" style={{ color: "var(--muted)" }}>
          Everything you need to know about WorkLoad Tab.
        </p>
        <div className="space-y-4">
          {FAQ_ITEMS.map(({ q, a }) => (
            <div
              key={q}
              className="rounded-xl p-6"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h2 className="font-semibold mb-2">{q}</h2>
              <p style={{ color: "var(--muted)" }}>{a}</p>
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
        WorkLoad Tab &mdash; <Link href="/">Home</Link> &middot; <Link href="/features">Features</Link>
      </footer>
    </>
  );
}
