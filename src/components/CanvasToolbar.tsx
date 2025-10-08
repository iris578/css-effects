import React from 'react';
import { Search, Filter, Shuffle, Grid, Layers } from 'lucide-react';
import { FilterState } from '../types/index.ts';

interface CanvasToolbarProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
  onShuffle: () => void;
  onToggleFilters: () => void;
  showFilters: boolean;
  totalCount: number;
}

const CanvasToolbar: React.FC<CanvasToolbarProps> = ({
  filters,
  onFiltersChange,
  onShuffle,
  onToggleFilters,
  showFilters,
  totalCount
}) => {
  return (
    <div className="absolute top-4 left-4 z-40 hidden md:block">
      <div className="flex items-center space-x-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
        {/* Logo */}
        <div className="flex items-center space-x-2 px-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">PromptMotion</h1>
            <p className="text-xs text-gray-500">AI Animation Canvas</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-gray-200" />

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search animations..."
            value={filters.searchTerm}
            onChange={(e) => onFiltersChange({ searchTerm: e.target.value })}
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 text-sm"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={onToggleFilters}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
            showFilters
              ? 'bg-blue-50 text-blue-700 border border-blue-200'
              : 'text-gray-700 hover:bg-gray-50 border border-gray-300'
          }`}
          title="Toggle Filters"
        >
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {(filters.category !== 'all' || filters.difficulty !== 'all' || filters.tags.length > 0) && (
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
          )}
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200" />

        {/* Shuffle Button */}
        <button
          onClick={onShuffle}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-800 bg-[length:200%] animate-gradient-x text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
          title="Surprise Me"
        >
          <Shuffle className="w-4 h-4" />
          <span>Surprise Me</span>
        </button>

        {/* Results Count */}
        <div className="px-3 py-2 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-900">{totalCount}</div>
          <div className="text-xs text-gray-500">
            {totalCount === 1 ? 'animation' : 'animations'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasToolbar;