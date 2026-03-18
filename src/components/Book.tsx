import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { Chapter, FontSize } from '../types';
import PageContent from './PageContent';

interface Props {
  chapters: Chapter[];
  fontSize: FontSize;
  chapterIndex: number;
  onChapterChange: (i: number) => void;
}

const DRAG_THRESHOLD = 60; // px to trigger page turn

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
  }),
};

const transition = {
  type: 'spring' as const,
  stiffness: 380,
  damping: 38,
  mass: 0.8,
};

export default function Book({ chapters, fontSize, chapterIndex, onChapterChange }: Props) {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  // Track whether a chapter change was initiated internally (goNext/goPrev)
  // so we don't double-reset the page index.
  const internalChapterChange = useRef(false);

  // When chapter changes from external source (toolbar), reset to page 1.
  useEffect(() => {
    if (internalChapterChange.current) {
      internalChapterChange.current = false;
      return;
    }
    setPageIndex(0);
    setDirection(0);
  }, [chapterIndex]);

  const chapter = chapters[chapterIndex];
  const totalPages = chapter?.pages.length ?? 0;
  const page = chapter?.pages[pageIndex];

  const canGoNext =
    pageIndex < totalPages - 1 || chapterIndex < chapters.length - 1;
  const canGoPrev = pageIndex > 0 || chapterIndex > 0;

  const goNext = useCallback(() => {
    if (pageIndex < totalPages - 1) {
      setDirection(1);
      setPageIndex((p) => p + 1);
    } else if (chapterIndex < chapters.length - 1) {
      setDirection(1);
      internalChapterChange.current = true;
      onChapterChange(chapterIndex + 1);
      setPageIndex(0);
    }
  }, [pageIndex, totalPages, chapterIndex, chapters.length, onChapterChange]);

  const goPrev = useCallback(() => {
    if (pageIndex > 0) {
      setDirection(-1);
      setPageIndex((p) => p - 1);
    } else if (chapterIndex > 0) {
      setDirection(-1);
      const prevChapter = chapters[chapterIndex - 1];
      internalChapterChange.current = true;
      onChapterChange(chapterIndex - 1);
      setPageIndex(prevChapter.pages.length - 1);
    }
  }, [pageIndex, chapterIndex, chapters, onChapterChange]);

  const handleDragEnd =(_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -DRAG_THRESHOLD && canGoNext) {
      goNext();
    } else if (info.offset.x > DRAG_THRESHOLD && canGoPrev) {
      goPrev();
    }
  };

  if (!chapter || !page) return null;

  const pageKey = `${chapterIndex}-${pageIndex}`;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Book area */}
      <div className="relative flex flex-1 min-h-0 overflow-hidden bg-amber-50/60 dark:bg-gray-800/60">
        {/* Left drag handle */}
        <button
          onClick={goPrev}
          disabled={!canGoPrev}
          aria-label="Previous page"
          className={`absolute left-0 top-0 h-full z-10 flex items-center justify-center w-10 md:w-14 group transition-opacity ${
            canGoPrev ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default pointer-events-none'
          }`}
        >
          <span className="flex items-center justify-center w-8 h-14 md:w-10 md:h-16 rounded-r-full bg-amber-100/80 dark:bg-gray-700/80 shadow-md group-hover:bg-amber-200 dark:group-hover:bg-gray-600 group-active:scale-95 transition-all border border-l-0 border-amber-300 dark:border-gray-600 text-amber-700 dark:text-amber-300 text-2xl font-light select-none">
            ‹
          </span>
        </button>

        {/* Page content with animation */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={pageKey}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'pan-y' }}
          >
            <PageContent page={page} fontSize={fontSize} />
          </motion.div>
        </AnimatePresence>

        {/* Right drag handle */}
        <button
          onClick={goNext}
          disabled={!canGoNext}
          aria-label="Next page"
          className={`absolute right-0 top-0 h-full z-10 flex items-center justify-center w-10 md:w-14 group transition-opacity ${
            canGoNext ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default pointer-events-none'
          }`}
        >
          <span className="flex items-center justify-center w-8 h-14 md:w-10 md:h-16 rounded-l-full bg-amber-100/80 dark:bg-gray-700/80 shadow-md group-hover:bg-amber-200 dark:group-hover:bg-gray-600 group-active:scale-95 transition-all border border-r-0 border-amber-300 dark:border-gray-600 text-amber-700 dark:text-amber-300 text-2xl font-light select-none">
            ›
          </span>
        </button>
      </div>

      {/* Page indicator footer */}
      <div className="flex items-center justify-center gap-4 px-4 py-2 bg-amber-50 dark:bg-gray-900 border-t border-amber-200 dark:border-gray-700 text-sm text-amber-700 dark:text-amber-400 font-medium select-none">
        <span>
          Page {pageIndex + 1} <span className="opacity-50">of</span> {totalPages}
        </span>
        {/* Dot indicators for small chapters */}
        {totalPages <= 20 && (
          <div className="flex gap-1 flex-wrap justify-center max-w-xs">
            {chapter.pages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > pageIndex ? 1 : -1);
                  setPageIndex(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === pageIndex
                    ? 'bg-amber-500 dark:bg-amber-400 scale-125'
                    : 'bg-amber-200 dark:bg-gray-600 hover:bg-amber-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
