import React from 'react';
import { X, Filter } from 'lucide-react';
import { FilterState } from '../types/index.ts';
import { categories } from '../data/animations.ts';

interface CanvasFilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  onClose: () => void;
  totalCount: number;
}

const CanvasFilterPanel: React.FC<CanvasFilterPanelProps> = ({
  filters,
  onFiltersChange,
  onClose,
  totalCount
}) => {

  const popularTags = [
    'hover', 'animation', 'interactive', 'button', 'text', 'loading',
    'scroll', 'gradient', '3d', 'cursor', 'glow', 'transition'
  ];

  const handleClearFilters = () => {
    onFiltersChange({
      category: 'all',
      searchTerm: '',
      tags: []
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.searchTerm !== '' ||
    filters.tags.length > 0;

  const toggleTag = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onFiltersChange({ tags: newTags });
  };

  return (
    <div className="absolute top-4 left-80 z-40 w-80">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="font-medium text-gray-900">Filters</h3>
            </div>
            <div className="flex items-center space-x-2">
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-6 max-h-96 overflow-y-auto">
          {/* Categories */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => onFiltersChange({ category: category.value as any })}
                  className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    filters.category === category.value
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  <div className="truncate">{category.label}</div>
                  <div className="text-xs text-gray-500">{category.count}</div>
                </button>
              ))}
            </div>
          </div>


          {/* Tags */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {tag}
                  {filters.tags.includes(tag) && (
                    <X className="w-3 h-3 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{totalCount}</div>
              <div className="text-sm text-gray-600">
                {totalCount === 1 ? 'Animation' : 'Animations'} found
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasFilterPanel;