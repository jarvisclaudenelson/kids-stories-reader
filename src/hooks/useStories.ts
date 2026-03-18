import { useState, useEffect } from 'react';
import {
  fetchChapterList,
  fetchChapterContent,
  fetchChapterImages,
  getImageUrl,
} from '../api/github';
import { Chapter } from '../types';
import { parsePages, getChapterNumber, extractTitle } from '../utils/parseStory';

export function useStories() {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const files = await fetchChapterList();

        const loaded = await Promise.all(
          files.map(async (file) => {
            const chapterNum = getChapterNumber(file.name);
            const [content, imagePages] = await Promise.all([
              fetchChapterContent(file.download_url),
              fetchChapterImages(chapterNum),
            ]);

            const rawPages = parsePages(content);
            const pages = rawPages.map((text, i) => ({
              content: text,
              imageUrl: imagePages.has(i + 1) ? getImageUrl(chapterNum, i + 1) : null,
              pageNumber: i + 1,
            }));

            return {
              title: extractTitle(content, `Chapter ${chapterNum}`),
              number: chapterNum,
              pages,
            } satisfies Chapter;
          }),
        );

        if (!cancelled) {
          setChapters(loaded.sort((a, b) => a.number - b.number));
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load stories');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { chapters, loading, error };
}
