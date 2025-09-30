import React, { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  ConnectionMode,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { AnimationEffect, FilterState } from '../types/index.ts';
import { animationEffects } from '../data/animations.ts';
import AnimationNode from './AnimationNode.tsx';
import CanvasToolbar from './CanvasToolbar.tsx';
import CanvasFilterPanel from './CanvasFilterPanel.tsx';

const nodeTypes = {
  animationNode: AnimationNode,
};

// Generate spatial layout grouped by category
// - 4 cards per row within each category
// - Each new category starts on a new row block (stacked vertically)
const generateNodeLayout = (effects: AnimationEffect[]): Node[] => {
  const cardsPerRow = 4;
  const nodeWidth = 320;
  const nodeHeight = 340;
  const columnGap = 100; // horizontal gap between nodes
  const rowGap = 100;    // vertical gap between nodes
  const categoryGap = 140;

  const categoryOrder = Array.from(new Set(effects.map((e) => e.category)));

  const nodes: Node[] = [];
  let currentRowY = 0;

  for (const category of categoryOrder) {
    const categoryEffects = effects.filter((e) => e.category === category);

    categoryEffects.forEach((effect, indexWithinCategory) => {
      const col = indexWithinCategory % cardsPerRow;
      const rowInCategory = Math.floor(indexWithinCategory / cardsPerRow);

      const x = col * (nodeWidth + columnGap);
      const y = currentRowY + rowInCategory * (nodeHeight + rowGap);

      nodes.push({
        id: effect.id,
        type: 'animationNode',
        position: { x, y },
        data: { effect, onSelect: () => {} },
        draggable: true,
      });
    });

    // compute used rows for this category to offset the next category block
    const rowsForCategory = Math.ceil(categoryEffects.length / cardsPerRow);
    currentRowY += rowsForCategory * (nodeHeight + rowGap) + categoryGap;
  }

  return nodes;
};

const InfiniteCanvas: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    difficulty: 'all',
    searchTerm: '',
    tags: []
  });
  const [selectedEffect, setSelectedEffect] = useState<AnimationEffect | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter animations based on current filters
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

  // Generate nodes for filtered animations
  const initialNodes = useMemo(() => {
    return generateNodeLayout(filteredEffects).map(node => ({
      ...node,
      data: {
        ...node.data,
        onSelect: (effect: AnimationEffect) => setSelectedEffect(effect),
      },
    }));
  }, [filteredEffects]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleFilterChange = useCallback((newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const handleShuffle = useCallback(() => {
    const randomEffect = filteredEffects[Math.floor(Math.random() * filteredEffects.length)];
    setSelectedEffect(randomEffect);
  }, [filteredEffects]);

  const handleFocusAnimation = useCallback((effectId: string) => {
    const node = nodes.find(n => n.id === effectId);
    if (node) {
      // You can implement focus/pan to node logic here
      setSelectedEffect(animationEffects.find(e => e.id === effectId) || null);
    }
  }, [nodes]);

  // Update nodes when filtered effects change
  React.useEffect(() => {
    const newNodes = generateNodeLayout(filteredEffects).map(node => ({
      ...node,
      data: {
        ...node.data,
        onSelect: (effect: AnimationEffect) => setSelectedEffect(effect),
      },
    }));
    setNodes(newNodes);
  }, [filteredEffects, setNodes]);

  return (
    <div className="h-screen w-full relative">
      {/* Canvas Toolbar */}
      <CanvasToolbar
        filters={filters}
        onFiltersChange={handleFilterChange}
        onShuffle={handleShuffle}
        onToggleFilters={() => setShowFilters(!showFilters)}
        showFilters={showFilters}
        totalCount={filteredEffects.length}
      />

      {/* Filter Panel */}
      {showFilters && (
        <CanvasFilterPanel
          filters={filters}
          onFiltersChange={handleFilterChange}
          onClose={() => setShowFilters(false)}
          totalCount={filteredEffects.length}
        />
      )}

      {/* React Flow Canvas */}
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          connectionMode={ConnectionMode.Loose}
          fitView
          fitViewOptions={{
            padding: 0.1,
            includeHiddenNodes: false,
          }}
          minZoom={0.1}
          maxZoom={2}
          defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
          className="bg-gray-50"
        >
          <Background
            variant="dots"
            gap={20}
            size={1}
            color="#e5e7eb"
          />
          <Controls
            showZoom
            showFitView
            showInteractive
            position="bottom-right"
          />
          <MiniMap
            nodeColor={(node) => {
              const effect = animationEffects.find(e => e.id === node.id);
              if (!effect) return '#6b7280';

              const categoryColors: Record<string, string> = {
                'micro-interactions': '#3b82f6',
                'text-animations': '#8b5cf6',
                'hover-effects': '#10b981',
                'loading-animations': '#f59e0b',
                'cursor-interactions': '#ec4899',
                'background-effects': '#6366f1',
                'scroll-effects': '#14b8a6',
                'page-transitions': '#06b6d4',
                'easter-eggs': '#f43f5e'
              };

              return categoryColors[effect.category] || '#6b7280';
            }}
            position="bottom-left"
            className="!bg-white !border !border-gray-200 !rounded-lg"
          />
        </ReactFlow>
      </ReactFlowProvider>

      {/* Selected Effect Detail Modal */}
      {selectedEffect && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEffect(null)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
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
              <div className="space-y-6">
                {/* Animation Preview */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Preview</h3>
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      srcDoc={`
<!DOCTYPE html>
<html>
<head>
    <style>
        html, body { height: 100%; overflow: hidden; }
        body { margin: 0; padding: 20px; font-family: system-ui; background: #f8fafc; display: flex; align-items: center; justify-content: center; }
        button, .button, .btn, a, [role="button"] { cursor: pointer; }
        ${selectedEffect.code.css || ''}
    </style>
</head>
<body>
    ${selectedEffect.code.html || ''}
    ${selectedEffect.code.javascript ? `<script>${selectedEffect.code.javascript}</script>` : ''}
</body>
</html>
                      `}
                      className="w-full h-64"
                      title={selectedEffect.title}
                      sandbox="allow-scripts"
                    />
                  </div>
                </div>

                {/* AI Prompt */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">AI Prompt</h3>
                    <button
                      onClick={() => navigator.clipboard.writeText(selectedEffect.prompt)}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200"
                    >
                      Copy Prompt
                    </button>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-gray-700">{selectedEffect.prompt}</p>
                  </div>
                </div>

                {/* Code */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Code</h3>
                  <div className="space-y-4">
                    {selectedEffect.code.html && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-gray-700">HTML</label>
                          <button
                            onClick={() => navigator.clipboard.writeText(selectedEffect.code.html || '')}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                          <code>{selectedEffect.code.html}</code>
                        </pre>
                      </div>
                    )}

                    {selectedEffect.code.css && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-gray-700">CSS</label>
                          <button
                            onClick={() => navigator.clipboard.writeText(selectedEffect.code.css || '')}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                          <code>{selectedEffect.code.css}</code>
                        </pre>
                      </div>
                    )}

                    {selectedEffect.code.javascript && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-gray-700">JavaScript</label>
                          <button
                            onClick={() => navigator.clipboard.writeText(selectedEffect.code.javascript || '')}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                          <code>{selectedEffect.code.javascript}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteCanvas;