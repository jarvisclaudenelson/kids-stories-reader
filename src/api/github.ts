const OWNER = 'jarvisclaudenelson';
const REPO = 'kids-stories';
const BRANCH = 'main';
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

interface GitHubFile {
  name: string;
  path: string;
  download_url: string;
  type: 'file' | 'dir';
}

export async function fetchChapterList(): Promise<GitHubFile[]> {
  const res = await fetch(`${API_BASE}/stories`);
  if (!res.ok) throw new Error('Failed to fetch chapter list');
  const files: GitHubFile[] = await res.json();
  return files
    .filter((f) => f.name.endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function fetchChapterContent(downloadUrl: string): Promise<string> {
  const res = await fetch(downloadUrl);
  if (!res.ok) throw new Error('Failed to fetch chapter content');
  return res.text();
}

/** Returns a set of page numbers (1-based) that have an associated image. */
export async function fetchChapterImages(chapterNumber: number): Promise<Set<number>> {
  try {
    const res = await fetch(`${API_BASE}/images/chapter${chapterNumber}`);
    if (!res.ok) return new Set();
    const files: GitHubFile[] = await res.json();
    const pages = new Set<number>();
    for (const file of files) {
      // filenames like "1-4.png" → page 4
      const match = file.name.match(/^\d+-(\d+)\.png$/);
      if (match) pages.add(parseInt(match[1], 10));
    }
    return pages;
  } catch {
    return new Set();
  }
}

export function getImageUrl(chapterNumber: number, pageNumber: number): string {
  return `${RAW_BASE}/images/chapter${chapterNumber}/${chapterNumber}-${pageNumber}.png`;
}
