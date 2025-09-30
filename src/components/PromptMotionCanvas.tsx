import React, { useState, useMemo } from 'react';
import { AnimationEffect, FilterState } from '../types/index.ts';
import { animationEffects, categories } from '../data/animations.ts';
import AnimationBlock from './AnimationBlock.tsx';
import FilterPanel from './FilterPanel.tsx';
import { Search, Grid, List, Shuffle } from 'lucide-react';

const PromptMotionCanvas: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    difficulty: 'all',
    searchTerm: '',
    tags: []
  });
  const [isGridView, setIsGridView] = useState(true);
  const [selectedEffect, setSelectedEffect] = useState<AnimationEffect | null>(null);

  const filteredEffects = useMemo(() => {
    return animationEffects.filter(effect => {
      // Category filter
      if (filters.category !== 'all' && effect.category !== filters.category) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty !== 'all' && effect.difficulty !== filters.difficulty) {
        return false;
      }

      // Search term filter
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesTitle = effect.title.toLowerCase().includes(searchLower);
        const matchesDescription = effect.description.toLowerCase().includes(searchLower);
        const matchesTags = effect.tags.some(tag => tag.toLowerCase().includes(searchLower));

        if (!matchesTitle && !matchesDescription && !matchesTags) {
          return false;
        }
      }

      // Tags filter
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(filterTag =>
          effect.tags.some(effectTag => effectTag.toLowerCase().includes(filterTag.toLowerCase()))
        );
        if (!hasMatchingTag) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  const handleShuffle = () => {
    const randomEffect = filteredEffects[Math.floor(Math.random() * filteredEffects.length)];
    setSelectedEffect(randomEffect);
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                PromptMotion
              </h1>
              <span className="text-sm text-gray-500">
                AI Animation Demo Canvas
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search animations..."
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange({ searchTerm: e.target.value })}
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setIsGridView(true)}
                  className={`p-2 ${isGridView ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsGridView(false)}
                  className={`p-2 ${!isGridView ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Shuffle Button */}
              <button
                onClick={handleShuffle}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Shuffle className="w-4 h-4" />
                <span>Surprise Me</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <FilterPanel
              filters={filters}
              onFiltersChange={handleFilterChange}
              categories={categories}
              totalCount={filteredEffects.length}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {filteredEffects.length} Animation{filteredEffects.length !== 1 ? 's' : ''}
                </h2>
                {filters.category !== 'all' && (
                  <p className="text-sm text-gray-600">
                    in {categories.find(c => c.value === filters.category)?.label}
                  </p>
                )}
              </div>

              {filters.searchTerm && (
                <button
                  onClick={() => handleFilterChange({ searchTerm: '' })}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Animation Grid/List */}
            {filteredEffects.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🎭</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No animations found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              <div className={
                isGridView
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {filteredEffects.map((effect) => (
                  <AnimationBlock
                    key={effect.id}
                    effect={effect}
                    isGridView={isGridView}
                    isSelected={selectedEffect?.id === effect.id}
                    onClick={() => setSelectedEffect(effect)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Selected Effect Modal/Detail View */}
      {selectedEffect && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedEffect.title}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {selectedEffect.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEffect(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <AnimationBlock
                effect={selectedEffect}
                isGridView={false}
                isSelected={false}
                onClick={() => {}}
                isDetailView={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptMotionCanvas;