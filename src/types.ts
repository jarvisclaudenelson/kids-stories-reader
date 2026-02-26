export interface StoryPage {
  content: string;
  imageUrl: string | null;
  pageNumber: number;
}

export interface Chapter {
  title: string;
  number: number;
  pages: StoryPage[];
}

export type FontSize = 'sm' | 'md' | 'lg' | 'xl';

export const FONT_SIZE_CLASSES: Record<FontSize, string> = {
  sm: 'text-sm leading-6',
  md: 'text-base leading-7',
  lg: 'text-lg leading-8',
  xl: 'text-xl leading-9',
};
