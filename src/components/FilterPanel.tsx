import React from 'react';
import { FilterState } from '../types/index.ts';
import { Filter, X } from 'lucide-react';

interface FilterPanelProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  categories: { value: string; label: string; count: number }[];
  totalCount: number;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onFiltersChange,
  categories,
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <h3 className="font-medium text-gray-900">Filters</h3>
          </div>
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => onFiltersChange({ category: category.value as any })}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                  filters.category === category.value
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                }`}
              >
                <span className="truncate">{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  filters.category === category.value
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
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

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Active Filters</h4>
            <div className="space-y-2">
              {filters.category !== 'all' && (
                <div className="flex items-center justify-between px-3 py-2 bg-blue-50 rounded-md">
                  <span className="text-sm text-blue-700">
                    Category: {categories.find(c => c.value === filters.category)?.label}
                  </span>
                  <button
                    onClick={() => onFiltersChange({ category: 'all' })}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}


              {filters.searchTerm && (
                <div className="flex items-center justify-between px-3 py-2 bg-blue-50 rounded-md">
                  <span className="text-sm text-blue-700 truncate">
                    Search: "{filters.searchTerm}"
                  </span>
                  <button
                    onClick={() => onFiltersChange({ searchTerm: '' })}
                    className="text-blue-600 hover:text-blue-700 flex-shrink-0"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {filters.tags.map((tag) => (
                <div key={tag} className="flex items-center justify-between px-3 py-2 bg-blue-50 rounded-md">
                  <span className="text-sm text-blue-700">Tag: {tag}</span>
                  <button
                    onClick={() => toggleTag(tag)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
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
  );
};

export default FilterPanel;