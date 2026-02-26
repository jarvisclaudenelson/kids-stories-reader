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

  const hasImage = Boolean(page.imageUrl && !imgError);

  return (
    <div className="w-full h-full overflow-y-auto px-4 py-8 md:px-8">
      <div className={`flex gap-6 md:gap-8 ${hasImage ? 'flex-col md:flex-row md:items-start' : 'flex-col items-center'}`}>
        {/* Image — above text on mobile, beside text on desktop (right side) */}
        {page.imageUrl && !imgError && (
          <div className="w-full md:w-72 lg:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg self-start md:order-2">
            <img
              src={page.imageUrl}
              alt={`Illustration for page ${page.pageNumber}`}
              className="w-full h-auto object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          </div>
        )}

        {/* Text */}
        <div
          className={`font-story text-gray-800 dark:text-gray-100 ${FONT_SIZE_CLASSES[fontSize]} prose dark:prose-invert prose-headings:font-story prose-headings:text-amber-800 dark:prose-headings:text-amber-300 max-w-none ${hasImage ? 'flex-1 min-w-0 md:order-1' : 'w-full max-w-prose'}`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
