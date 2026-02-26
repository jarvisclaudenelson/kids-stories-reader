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
    <div className="flex flex-col items-center w-full h-full overflow-y-auto px-6 py-8 md:px-10">
      {page.imageUrl && !imgError && (
        <div className="w-full max-w-md mb-6 rounded-xl overflow-hidden shadow-lg">
          <img
            src={page.imageUrl}
            alt={`Illustration for page ${page.pageNumber}`}
            className="w-full h-auto object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        </div>
      )}

      <div
        className={`w-full max-w-prose font-story text-gray-800 dark:text-gray-100 ${FONT_SIZE_CLASSES[fontSize]} prose dark:prose-invert prose-headings:font-story prose-headings:text-amber-800 dark:prose-headings:text-amber-300 max-w-none`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{page.content}</ReactMarkdown>
      </div>
    </div>
  );
}
