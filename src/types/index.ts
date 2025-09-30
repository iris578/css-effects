export type AnimationCategory =
  | 'micro-interactions'
  | 'text-animations'
  | 'image-effects'
  | 'cursor-interactions'
  | 'background-effects'
  | 'page-transitions'
  | 'scroll-effects'
  | 'loading-animations'
  | 'hover-effects'
  | 'easter-eggs';

export interface AnimationEffect {
  id: string;
  title: string;
  description: string;
  category: AnimationCategory;
  prompt: string;
  code: {
    html?: string;
    css?: string;
    javascript?: string;
    framework?: 'vanilla' | 'tailwind' | 'framer-motion' | 'gsap';
  };
  tags: string[];
  previewType: 'inline' | 'iframe' | 'viewport';
  isInteractive: boolean;
  dependencies?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface FilterState {
  category: AnimationCategory | 'all';
  searchTerm: string;
  tags: string[];
}

export interface PromptMotionState {
  effects: AnimationEffect[];
  filters: FilterState;
  selectedEffect: AnimationEffect | null;
  isGridView: boolean;
  showCodeOnly: boolean;
}