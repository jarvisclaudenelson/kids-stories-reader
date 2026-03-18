import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useStories } from './hooks/useStories';
import Toolbar from './components/Toolbar';
import Book from './components/Book';
import { FontSize } from './types';

export default function App() {
  const { dark, toggle: toggleDark } = useTheme();
  const { chapters, loading, error } = useStories();
  const [fontSize, setFontSize] = useState<FontSize>('md');
  const [chapterIndex, setChapterIndex] = useState(0);

  const handleChapterChange = (i: number) => {
    setChapterIndex(i);
  };

  return (
    <div className="flex flex-col h-dvh bg-amber-50 dark:bg-gray-900 transition-colors duration-200">
      {loading && (
        <div className="flex flex-col items-center justify-center flex-1 gap-4 text-amber-700 dark:text-amber-400">
          <svg className="w-10 h-10 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <p className="text-sm font-medium">Loading stories…</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center flex-1 gap-3 px-6 text-center">
          <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
          <p className="text-red-500 dark:text-red-400 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-white font-medium text-sm transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && chapters.length > 0 && (
        <>
          <Toolbar
            dark={dark}
            onToggleDark={toggleDark}
            fontSize={fontSize}
            onFontSize={setFontSize}
            chapters={chapters}
            chapterIndex={chapterIndex}
            onChapter={handleChapterChange}
          />
          <Book
            chapters={chapters}
            fontSize={fontSize}
            chapterIndex={chapterIndex}
            onChapterChange={handleChapterChange}
          />
        </>
      )}

      {!loading && !error && chapters.length === 0 && (
        <div className="flex items-center justify-center flex-1 text-amber-600 dark:text-amber-400 text-sm">
          No stories found.
        </div>
      )}
    </div>
  );
}
