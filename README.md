# PromptMotion

**AI Animation Demo Canvas for Website Builders**

PromptMotion is a showcase platform for AI-generated website animations, providing developers and designers with ready-to-use animation effects complete with prompts and code snippets.

## Features

- 🎨 **Interactive Animation Gallery** - Browse and preview animations in real-time
- 🤖 **AI Prompts Included** - Copy the exact prompts used to generate each animation
- 💻 **Code Snippets** - Get HTML, CSS, and JavaScript code for each effect
- 🏷️ **Smart Filtering** - Filter by category, difficulty, and tags
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔍 **Search Functionality** - Find animations by keywords
- 🎲 **Surprise Me** - Discover random animations

## Categories

- **Micro Interactions** - Button hovers, input focus effects
- **Text Animations** - Typewriter effects, text reveals
- **Hover Effects** - 3D transforms, magnetic cursors
- **Loading Animations** - Spinners, progress indicators
- **Background Effects** - Animated gradients, parallax
- **Scroll Effects** - Scroll-triggered animations
- **Cursor Interactions** - Custom cursor behaviors
- **Easter Eggs** - Fun hidden animations

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd promptmotion-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Usage

1. **Browse Animations** - Use the grid or list view to explore available animations
2. **Filter & Search** - Use the sidebar to filter by category, difficulty, or search terms
3. **Preview Effects** - Click on any animation to see it in action
4. **Copy Prompts** - Switch to the "Prompt" tab to copy AI prompts
5. **Get Code** - Switch to the "Code" tab to copy HTML, CSS, or JavaScript
6. **Surprise Me** - Click the shuffle button for random discoveries

## Animation Structure

Each animation includes:

- **Live Preview** - Interactive demonstration
- **AI Prompt** - The exact prompt used to generate the animation
- **Code Snippets** - HTML, CSS, and JavaScript (when applicable)
- **Metadata** - Category, difficulty, tags, and dependencies

## Contributing

We welcome contributions! To add new animations:

1. Create a new animation object in `src/data/animations.ts`
2. Include all required fields (title, description, category, prompt, code, etc.)
3. Test the animation in multiple browsers
4. Submit a pull request

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - see LICENSE file for details

## Roadmap

- [ ] User-submitted animations
- [ ] Live AI integration
- [ ] Code playground
- [ ] Export to CodeSandbox
- [ ] Animation combinations
- [ ] Performance metrics

---

**Built with ❤️ for the web development community**