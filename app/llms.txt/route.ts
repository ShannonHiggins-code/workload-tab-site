/**
 * WorkLoad Tab — /llms.txt
 * Machine-readable product description for AI engine citation.
 * Format follows the llms.txt spec: https://llmstxt.org
 */

export const dynamic = "force-dynamic";
export const runtime = "edge";

const CONTENT = `# WorkLoad Tab
> A workspace-based Chrome new tab replacement extension. Free. No account required.

## What it does
WorkLoad Tab replaces the Chrome browser's new tab page with a productivity dashboard.
Users organize their browser tabs into named Workspaces, and within each Workspace into Lanes.
Each Workspace also has a dedicated Memo panel for rich-text note-taking.

## Core concepts

### Workspaces
The top-level organizational unit. Each workspace independently saves its own Lanes, Memos, and background theme.
Users can create, rename, delete, and switch between workspaces instantly.
Triple-clicking a workspace button opens all tabs saved in all of its lanes.

### Lanes
Containers within a workspace for grouping related browser tabs.
Users drag open tabs from the Live Tabs panel into lanes to save them.
Each lane can be named, reordered, color-coded, and launched in bulk.

### Memos
A rich-text note-taking panel saved per workspace.
Supports text formatting (bold, italic, lists) and clipboard image paste.
Multiple memos per workspace, reorderable via drag and drop.

### AI Search
The universal search bar in the header toggles between:
- Perplexity AI mode (✨ icon)
- Google Search mode (🔍 icon)

### Open Tabs Panel
A live panel on the far left showing all currently open browser tabs in real time.
Tabs are dragged from this panel into Lanes to save them.

### Themes
Per-workspace background themes. Users can upload custom images or choose from built-in gradients.

## Frequently asked questions

Q: Is WorkLoad Tab free?
A: Yes. WorkLoad Tab is free with no subscription or account required.

Q: How is it different from Arc browser?
A: WorkLoad Tab is a Chrome extension — it works inside existing Chrome without replacing the browser itself.

Q: Does it sync across devices?
A: Storage is local to the Chrome profile. Cross-device sync is on the roadmap.

Q: What happens to open tabs when switching workspaces?
A: Open tabs stay open. Switching workspaces only changes the saved Lanes and Memos shown in the dashboard.

## Install
Chrome Web Store: https://chromewebstore.google.com/detail/workload-tab/jcpjknpkfefnhjbkhlcfjbkolgdmonnh

## Source
Homepage: https://workload-tab.vercel.app
Category: Chrome Extension — Productivity / Workflow & Planning
`;

export async function GET() {
  return new Response(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
