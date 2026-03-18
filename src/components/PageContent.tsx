import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { StoryPage, FontSize, FONT_SIZE_CLASSES } from '../types';

interface Props {
  page: StoryPage;
  fontSize: FontSize;
}

export default function PageContent({ page, fontSize }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col w-full h-full">
      {/* Sticky image — stays at top during scroll */}
      {page.imageUrl && !imgError && (
        <div className="flex-shrink-0 w-full bg-amber-50 dark:bg-gray-800 border-b border-amber-200 dark:border-gray-700 shadow-md">
          <img
            src={page.imageUrl}
            alt={`Illustration for page ${page.pageNumber}`}
            className="w-full max-h-52 object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </div>
      )}

      {/* Scrollable text below */}
      <div className="flex-1 overflow-y-auto px-4 py-6 md:px-8">
        <div
          className={`w-full max-w-prose mx-auto font-story text-gray-800 dark:text-gray-100 ${FONT_SIZE_CLASSES[fontSize]} prose dark:prose-invert prose-headings:font-story prose-headings:text-amber-800 dark:prose-headings:text-amber-300 max-w-none`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
