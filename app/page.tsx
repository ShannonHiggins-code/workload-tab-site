import Link from "next/link";

const FEATURES = [
  {
    icon: "🗂️",
    title: "Workspaces",
    desc: "Each workspace saves its own lanes, memos, and background theme. Switch instantly without losing context.",
  },
  {
    icon: "🚦",
    title: "Lanes",
    desc: "Group related tabs into named lanes. Launch all tabs in a lane with one click, or drag-reorder them anytime.",
  },
  {
    icon: "📝",
    title: "Memos",
    desc: "Rich-text notes saved per workspace. Supports bold, lists, and images pasted from clipboard.",
  },
  {
    icon: "✨",
    title: "AI Search",
    desc: "Toggle between Perplexity AI and Google Search directly from the tab bar — no extra tabs needed.",
  },
  {
    icon: "📅",
    title: "Date & Time",
    desc: "Live clock and calendar modal in the header. Click to see the current month at a glance.",
  },
  {
    icon: "🎨",
    title: "Custom Themes",
    desc: "Per-workspace background themes. Upload your own image or choose from built-in gradients.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is WorkLoad Tab?",
    a: "WorkLoad Tab replaces your Chrome new tab page with a productivity dashboard. It lets you organize browser tabs into named Workspaces and Lanes, take rich-text Memos, and search the web with AI or Google.",
  },
  {
    q: "Is WorkLoad Tab free?",
    a: "Yes. WorkLoad Tab is a free Chrome extension available on the Chrome Web Store.",
  },
  {
    q: "How is WorkLoad Tab different from Arc browser or Notion?",
    a: "WorkLoad Tab works inside your existing Chrome browser — no new browser to install. Unlike Notion, it is designed around your open tabs, not documents. Lanes are tab containers, not databases.",
  },
  {
    q: "Does WorkLoad Tab sync across devices?",
    a: "Workspaces and memos are stored locally in your Chrome extension storage. Cross-device sync is on the roadmap.",
  },
  {
    q: "What happens to my open tabs when I switch workspaces?",
    a: "Your currently open tabs stay open. Switching workspaces only changes the saved Lanes and Memos displayed in the dashboard. Triple-click any workspace to restore all its saved tabs.",
  },
  {
    q: "Can I use my own background image?",
    a: "Yes. Open Settings (gear icon) and upload a custom image. Theme settings are saved per workspace.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main className="flex-1">
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="text-5xl mb-6">🗂️</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Your browser tabs,{" "}
            <span style={{ color: "var(--accent)" }}>finally organized</span>
          </h1>
          <p className="text-xl mb-10" style={{ color: "var(--muted)" }}>
            WorkLoad Tab replaces your Chrome new tab with a workspace dashboard.
            Group tabs into Lanes, take Memos, and search with AI — all without
            leaving your browser.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://chromewebstore.google.com/detail/workload-tab/jcpjknpkfefnhjbkhlcfjbkolgdmonnh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-white"
              style={{ background: "var(--accent)" }}
            >
              Add to Chrome — Free
            </a>
            <Link
              href="/features"
              className="px-8 py-4 rounded-lg font-semibold"
              style={{ border: "1px solid var(--border)", color: "var(--text)" }}
            >
              See all features →
            </Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need, nothing you don&apos;t
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p style={{ color: "var(--muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-6"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <h3 className="font-semibold mb-2">{q}</h3>
                <p style={{ color: "var(--muted)" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-6 pb-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get organized?</h2>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            Free forever. No account required.
          </p>
          <a
            href="https://chromewebstore.google.com/detail/workload-tab/jcpjknpkfefnhjbkhlcfjbkolgdmonnh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold text-white"
            style={{ background: "var(--accent)" }}
          >
            Install WorkLoad Tab →
          </a>
        </section>
      </main>

      <footer
        className="border-t py-8 text-center text-sm"
        style={{ borderColor: "var(--border)", color: "var(--muted)" }}
      >
        WorkLoad Tab &mdash; Chrome Extension &middot; Free &middot;{" "}
        <Link href="/features">Features</Link> &middot;{" "}
        <Link href="/faq">FAQ</Link>
      </footer>
    </>
  );
}

