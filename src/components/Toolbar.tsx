import { Chapter, FontSize } from '../types';

interface Props {
  dark: boolean;
  onToggleDark: () => void;
  fontSize: FontSize;
  onFontSize: (s: FontSize) => void;
  chapters: Chapter[];
  chapterIndex: number;
  onChapter: (i: number) => void;
}

const SIZES: { label: string; value: FontSize }[] = [
  { label: 'S', value: 'sm' },
  { label: 'M', value: 'md' },
  { label: 'L', value: 'lg' },
  { label: 'XL', value: 'xl' },
];

export default function Toolbar({
  dark,
  onToggleDark,
  fontSize,
  onFontSize,
  chapters,
  chapterIndex,
  onChapter,
}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 px-4 py-3 bg-amber-50 dark:bg-gray-900 border-b border-amber-200 dark:border-gray-700 shadow-sm">
      {/* Chapter selector */}
      <select
        value={chapterIndex}
        onChange={(e) => onChapter(Number(e.target.value))}
        className="flex-1 min-w-0 truncate rounded-md border border-amber-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        {chapters.map((ch, i) => (
          <option key={ch.number} value={i}>
            {ch.title}
          </option>
        ))}
      </select>

      {/* Font size buttons */}
      <div className="flex items-center gap-0.5 rounded-md overflow-hidden border border-amber-300 dark:border-gray-600">
        {SIZES.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => onFontSize(value)}
            title={`Font size ${label}`}
            className={`px-2 py-1.5 text-xs font-bold transition-colors ${
              fontSize === value
                ? 'bg-amber-400 dark:bg-amber-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Dark mode toggle */}
      <button
        onClick={onToggleDark}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="rounded-md p-1.5 border border-amber-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors"
      >
        {dark ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </header>
  );
}
