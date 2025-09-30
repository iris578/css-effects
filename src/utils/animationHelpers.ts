import { AnimationEffect, FilterState } from '../types';

export const filterAnimations = (
  animations: AnimationEffect[],
  filters: FilterState
): AnimationEffect[] => {
  return animations.filter(animation => {
    // Category filter
    if (filters.category !== 'all' && animation.category !== filters.category) {
      return false;
    }

    // Difficulty filter
    if (filters.difficulty !== 'all' && animation.difficulty !== filters.difficulty) {
      return false;
    }

    // Search term filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesTitle = animation.title.toLowerCase().includes(searchLower);
      const matchesDescription = animation.description.toLowerCase().includes(searchLower);
      const matchesTags = animation.tags.some(tag => tag.toLowerCase().includes(searchLower));
      const matchesCategory = animation.category.toLowerCase().includes(searchLower);

      if (!matchesTitle && !matchesDescription && !matchesTags && !matchesCategory) {
        return false;
      }
    }

    // Tags filter
    if (filters.tags.length > 0) {
      const hasMatchingTag = filters.tags.some(filterTag =>
        animation.tags.some(animationTag =>
          animationTag.toLowerCase().includes(filterTag.toLowerCase())
        )
      );
      if (!hasMatchingTag) {
        return false;
      }
    }

    return true;
  });
};

export const getAnimationById = (
  animations: AnimationEffect[],
  id: string
): AnimationEffect | undefined => {
  return animations.find(animation => animation.id === id);
};

export const getAnimationsByCategory = (
  animations: AnimationEffect[],
  category: string
): AnimationEffect[] => {
  if (category === 'all') return animations;
  return animations.filter(animation => animation.category === category);
};

export const getAnimationsByDifficulty = (
  animations: AnimationEffect[],
  difficulty: string
): AnimationEffect[] => {
  if (difficulty === 'all') return animations;
  return animations.filter(animation => animation.difficulty === difficulty);
};

export const getAllTags = (animations: AnimationEffect[]): string[] => {
  const tagSet = new Set<string>();
  animations.forEach(animation => {
    animation.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getRandomAnimation = (animations: AnimationEffect[]): AnimationEffect => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

export const generateAnimationPreviewHTML = (animation: AnimationEffect): string => {
  const { html = '', css = '', javascript = '' } = animation.code;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${animation.title}</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 300px;
            overflow: hidden;
        }
        ${css}
    </style>
</head>
<body>
    ${html}
    ${javascript ? `<script>${javascript}</script>` : ''}
</body>
</html>
  `.trim();
};

export const formatCategoryName = (category: string): string => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getDifficultyLevel = (difficulty: string): number => {
  switch (difficulty) {
    case 'beginner': return 1;
    case 'intermediate': return 2;
    case 'advanced': return 3;
    default: return 1;
  }
};

export const sortAnimationsByDifficulty = (animations: AnimationEffect[]): AnimationEffect[] => {
  return [...animations].sort((a, b) =>
    getDifficultyLevel(a.difficulty) - getDifficultyLevel(b.difficulty)
  );
};

export const sortAnimationsByDate = (animations: AnimationEffect[], ascending = false): AnimationEffect[] => {
  return [...animations].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

export const validateAnimationEffect = (animation: Partial<AnimationEffect>): string[] => {
  const errors: string[] = [];

  if (!animation.id) errors.push('ID is required');
  if (!animation.title) errors.push('Title is required');
  if (!animation.description) errors.push('Description is required');
  if (!animation.category) errors.push('Category is required');
  if (!animation.prompt) errors.push('Prompt is required');
  if (!animation.code || (!animation.code.html && !animation.code.css && !animation.code.javascript)) {
    errors.push('At least one code section (HTML, CSS, or JavaScript) is required');
  }
  if (!animation.tags || animation.tags.length === 0) errors.push('At least one tag is required');
  if (!animation.difficulty) errors.push('Difficulty is required');

  return errors;
};