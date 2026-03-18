/** Split markdown content into pages using --- as the page separator. */
export function parsePages(markdown: string): string[] {
  return markdown
    .split(/\n---\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

/** Extract chapter number from filename like "chapter-001.md" → 1 */
export function getChapterNumber(filename: string): number {
  const match = filename.match(/chapter-0*(\d+)\.md$/i);
  return match ? parseInt(match[1], 10) : 0;
}

/** Pull the first H1 or H2 from the markdown as the chapter title. */
export function extractTitle(markdown: string, fallback: string): string {
  const match = markdown.match(/^#{1,2}\s+(.+)/m);
  return match ? match[1].trim() : fallback;
}
