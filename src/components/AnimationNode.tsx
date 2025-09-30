import React, { memo, useState } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { AnimationEffect } from '../types/index.ts';
import { Play, ExternalLink, Tag } from 'lucide-react';

interface AnimationNodeData {
  effect: AnimationEffect;
  onSelect: (effect: AnimationEffect) => void;
}

const AnimationNode: React.FC<NodeProps<AnimationNodeData>> = ({ data }) => {
  const { effect, onSelect } = data;
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'micro-interactions': 'bg-blue-100 text-blue-800 border-blue-200',
      'text-animations': 'bg-purple-100 text-purple-800 border-purple-200',
      'hover-effects': 'bg-green-100 text-green-800 border-green-200',
      'loading-animations': 'bg-orange-100 text-orange-800 border-orange-200',
      'cursor-interactions': 'bg-pink-100 text-pink-800 border-pink-200',
      'background-effects': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'scroll-effects': 'bg-teal-100 text-teal-800 border-teal-200',
      'page-transitions': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'easter-eggs': 'bg-rose-100 text-rose-800 border-rose-200'
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const generatePreviewHTML = () => {
    const { html = '', css = '', javascript = '' } = effect.code;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${effect.title}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Ensure any element with background takes full width and height */
        [style*="background"], [class*="demo"], [class*="container"], [class*="bg"] {
            width: 100% !important;
            height: 100vh !important;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
            width: 100%;
        }
        ${css}
    </style>
</head>
<body>
    ${html}
    ${javascript ? `<script>${javascript}</script>` : ''}
</body>
</html>
    `;
  };

  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg border-2 transition-all duration-200 cursor-pointer group ${
        isHovered ? 'shadow-xl border-blue-300 transform scale-105' : 'border-gray-200 hover:border-gray-300'
      }`}
      style={{ width: 320, height: 340 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(effect)}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
            {effect.title}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            {effect.isInteractive && (
              <div className="w-2 h-2 bg-blue-500 rounded-full" title="Interactive" />
            )}
            <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {effect.description}
        </p>

        <div className="flex items-center justify-start">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(effect.category)}`}>
            {effect.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Preview */}
      <div className="h-40 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <iframe
          srcDoc={generatePreviewHTML()}
          className="w-full h-full border-none"
          title={effect.title}
          sandbox="allow-scripts"
        />
      </div>

      {/* Footer */}
      <div className="p-4 space-y-3">

        {/* Tags */}
        <div className="flex items-center justify-center space-x-1 flex-wrap">
          {effect.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600 mb-1"
            >
              <Tag className="w-2 h-2 mr-1" />
              {tag}
            </span>
          ))}
          {effect.tags.length > 3 && (
            <span className="text-xs text-gray-400 mb-1">
              +{effect.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-blue-50 bg-opacity-90 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-center">
            <Play className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-900">Click to explore</p>
            <p className="text-xs text-blue-700">View preview, prompt & code</p>
          </div>
        </div>
      )}

      {/* React Flow Handles (hidden) */}
      <Handle
        type="target"
        position={Position.Left}
        style={{ visibility: 'hidden' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};

export default memo(AnimationNode);