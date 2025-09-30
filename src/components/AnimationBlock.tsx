import React, { useState, useRef, useEffect } from 'react';
import { AnimationEffect } from '../types/index.ts';
import { Copy, Code, MessageSquare, Play, Pause, ExternalLink, Tag } from 'lucide-react';

interface AnimationBlockProps {
  effect: AnimationEffect;
  isGridView: boolean;
  isSelected: boolean;
  onClick: () => void;
  isDetailView?: boolean;
}

const AnimationBlock: React.FC<AnimationBlockProps> = ({
  effect,
  isGridView,
  isSelected,
  onClick,
  isDetailView = false
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'prompt' | 'code'>('preview');
  const [isPlaying, setIsPlaying] = useState(true);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'micro-interactions': 'bg-blue-100 text-blue-800',
      'text-animations': 'bg-purple-100 text-purple-800',
      'hover-effects': 'bg-green-100 text-green-800',
      'loading-animations': 'bg-orange-100 text-orange-800',
      'cursor-interactions': 'bg-pink-100 text-pink-800',
      'background-effects': 'bg-indigo-100 text-indigo-800',
      'scroll-effects': 'bg-teal-100 text-teal-800',
      'page-transitions': 'bg-cyan-100 text-cyan-800',
      'easter-eggs': 'bg-rose-100 text-rose-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
        html, body { height: 100%; overflow: hidden; }
        body {
            margin: 0;
            padding: ${isDetailView ? '20px' : '0'};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        button, .button, .btn, a, [role="button"] {
            cursor: pointer;
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

  const PreviewSection = () => (
    <div className="space-y-4">
      {effect.previewType === 'iframe' || effect.previewType === 'viewport' ? (
        <div className="relative">
          <iframe
            ref={iframeRef}
            srcDoc={generatePreviewHTML()}
            className={`w-full border border-gray-200 rounded-lg ${
              isDetailView ? 'h-96' : 'h-48'
            }`}
            title={effect.title}
            sandbox="allow-scripts"
          />
          {effect.isInteractive && (
            <div className="absolute top-2 right-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Interactive
              </span>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`border border-gray-200 rounded-lg p-4 bg-white ${
            isDetailView ? 'min-h-96' : 'min-h-48'
          }`}
          dangerouslySetInnerHTML={{ __html: generatePreviewHTML() }}
        />
      )}

      {isDetailView && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(effect.difficulty)}`}>
              {effect.difficulty}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(effect.category)}`}>
              {effect.category.replace('-', ' ')}
            </span>
            {effect.dependencies && (
              <span className="text-xs text-gray-500">
                Dependencies: {effect.dependencies.join(', ')}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      )}
    </div>
  );

  const PromptSection = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-gray-900">AI Prompt</h4>
          </div>
          <button
            onClick={() => handleCopy(effect.prompt, 'prompt')}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
              copiedItem === 'prompt'
                ? 'bg-green-100 text-green-700'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            <Copy className="w-4 h-4" />
            <span>{copiedItem === 'prompt' ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed">{effect.prompt}</p>
      </div>

      {isDetailView && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {effect.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const CodeSection = () => {
    const [activeCodeTab, setActiveCodeTab] = useState<'html' | 'css' | 'javascript'>('html');

    const getCodeContent = () => {
      switch (activeCodeTab) {
        case 'html': return effect.code.html || '// No HTML code available';
        case 'css': return effect.code.css || '/* No CSS code available */';
        case 'javascript': return effect.code.javascript || '// No JavaScript code available';
      }
    };

    const getLanguage = () => {
      switch (activeCodeTab) {
        case 'html': return 'html';
        case 'css': return 'css';
        case 'javascript': return 'javascript';
      }
    };

    return (
      <div className="space-y-4">
        {/* Code Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {(['html', 'css', 'javascript'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCodeTab(tab)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                activeCodeTab === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="relative">
          <div className="absolute top-3 right-3 z-10">
            <button
              onClick={() => handleCopy(getCodeContent(), `code-${activeCodeTab}`)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm transition-colors ${
                copiedItem === `code-${activeCodeTab}`
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Copy className="w-4 h-4" />
              <span>{copiedItem === `code-${activeCodeTab}` ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
            <code className={`language-${getLanguage()}`}>
              {getCodeContent()}
            </code>
          </pre>
        </div>

        {effect.code.framework && (
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Code className="w-4 h-4" />
            <span>Framework: {effect.code.framework}</span>
          </div>
        )}
      </div>
    );
  };

  if (!isDetailView && isGridView) {
    // Grid Card View
    return (
      <div
        onClick={onClick}
        className={`bg-white rounded-lg shadow-sm border transition-all cursor-pointer hover:shadow-md ${
          isSelected ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-medium text-gray-900 truncate">{effect.title}</h3>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(effect.difficulty)}`}>
              {effect.difficulty}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{effect.description}</p>

          <div className="space-y-3">
            <div className="h-32 border border-gray-200 rounded-md overflow-hidden">
              <iframe
                srcDoc={generatePreviewHTML()}
                className="w-full h-full"
                title={effect.title}
                sandbox="allow-scripts"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(effect.category)}`}>
                {effect.category.replace('-', ' ')}
              </span>
              <div className="flex items-center space-x-2">
                {effect.isInteractive && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full" title="Interactive" />
                )}
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Detail View or List View
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${!isDetailView ? 'hover:shadow-md transition-shadow' : ''}`}>
      {!isDetailView && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-gray-900">{effect.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{effect.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(effect.difficulty)}`}>
                {effect.difficulty}
              </span>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(effect.category)}`}>
                {effect.category.replace('-', ' ')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {(['preview', 'prompt', 'code'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab === 'preview' && <Play className="w-4 h-4 inline mr-2" />}
            {tab === 'prompt' && <MessageSquare className="w-4 h-4 inline mr-2" />}
            {tab === 'code' && <Code className="w-4 h-4 inline mr-2" />}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 'preview' && <PreviewSection />}
        {activeTab === 'prompt' && <PromptSection />}
        {activeTab === 'code' && <CodeSection />}
      </div>
    </div>
  );
};

export default AnimationBlock;