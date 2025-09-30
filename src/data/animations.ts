import { AnimationEffect } from '../types';

const baseEffects: AnimationEffect[] = [
  {
    id: 'glow-button',
    title: 'Glowing Button Hover',
    description: 'A button that glows with a pulsing animation on hover, perfect for CTAs',
    category: 'hover-effects',
    prompt: 'Create a button with a glowing effect that pulses when hovered. The glow should be a blue color that expands outward and then fades. Use CSS transitions for smooth animation.',
    code: {
      html: `<button class="glow-button">Click Me</button>`,
      css: `.glow-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
}

.glow-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.glow-button::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #3b82f6, #1d4ed8, #3b82f6);
  border-radius: 10px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
  animation: glow-pulse 2s infinite;
}

.glow-button:hover::before {
  opacity: 1;
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}`,
      framework: 'vanilla'
    },
    tags: ['button', 'hover', 'glow', 'pulse', 'cta'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'squishy-button',
    title: 'Squishy Button',
    description: 'A button with exaggerated depth that squishes down when pressed',
    category: 'hover-effects',
    prompt: 'Create a button with extra depth and a squishy animation that compresses when clicked or pressed down.',
    code: {
      html: `<button class="squishy-btn">Press Me!</button>`,
      css: `.squishy-btn {
  background: linear-gradient(145deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  padding: 20px 40px;
  cursor: pointer;
  position: relative;
  transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: translateY(0);
  box-shadow:
    0 8px 0 #4c1d95,
    0 12px 20px rgba(76, 29, 149, 0.3),
    0 2px 4px rgba(0, 0, 0, 0.1);
}

.squishy-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 0 #4c1d95,
    0 16px 25px rgba(76, 29, 149, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.15);
}

.squishy-btn:active {
  transform: translateY(6px);
  box-shadow:
    0 2px 0 #4c1d95,
    0 4px 8px rgba(76, 29, 149, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.1);
}

.squishy-btn:active:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  opacity: 1;
}`,
      framework: 'vanilla'
    },
    tags: ['button', 'squishy', 'depth', 'press', 'hover', '3d'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T10:45:00Z',
    updatedAt: '2024-01-16T10:45:00Z'
  },
  {
    id: 'bg-flowing-lines',
    title: 'Flowing Lines',
    description: 'Smooth curved-like lines flowing across the background like waves',
    category: 'background-effects',
    prompt: 'Animate smooth curved lines flowing across the background like waves.',
    code: {
      html: `<div class="flowing-lines-bg"><div class="content"><h2 class="bg-title">Flowing Lines</h2></div></div>`,
      css: `.flowing-lines-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #0b1220;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flowing-lines-bg::before, .flowing-lines-bg::after {
  content: '';
  position: absolute;
  inset: -50% -20%;
  background:
    radial-gradient(120px 40px at 0% 50%, rgba(59,130,246,0.15) 40%, transparent 42%) repeat-x,
    radial-gradient(120px 40px at 0% 50%, rgba(147,197,253,0.12) 40%, transparent 42%) repeat-x,
    radial-gradient(120px 40px at 0% 50%, rgba(99,102,241,0.12) 40%, transparent 42%) repeat-x;
  background-size: 280px 140px, 320px 160px, 360px 180px;
  background-position: 0 30%, 0 60%, 0 80%;
  filter: blur(6px);
  animation: flow-lines 18s linear infinite;
}
.flowing-lines-bg::after {
  opacity: 0.7;
  animation-duration: 26s;
  animation-direction: reverse;
}
.flowing-lines-bg .content {
  position: relative;
  z-index: 1;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
@keyframes flow-lines {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      framework: 'vanilla'
    },
    tags: ['background', 'lines', 'waves', 'flowing'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'bg-noise-texture',
    title: 'Noise Texture',
    description: 'Subtle animated grain/noise overlay for a cinematic look',
    category: 'background-effects',
    prompt: 'Add a subtle animated grain/noise effect to the background for a cinematic look.',
    code: {
      html: `<div class="noise-bg"><div class="content"><h2 class="bg-title">Noise Texture</h2></div></div>`,
      css: `.noise-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  background: #0f172a;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
.noise-bg::after {
  content: '';
  position: absolute;
  inset: -20%;
  pointer-events: none;
  opacity: 0.15;
  mix-blend-mode: hard-light;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  background-size: 180px 180px;
  animation: noise-shift 1s steps(2) infinite;
}
@keyframes noise-shift {
  0% { background-position: 0 0; }
  25% { background-position: 60px -45px; }
  50% { background-position: -30px 30px; }
  75% { background-position: 45px 10px; }
  100% { background-position: 0 0; }
}`,
      framework: 'vanilla'
    },
    tags: ['background', 'noise', 'grain', 'cinematic'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:02:00Z',
    updatedAt: '2024-01-16T10:02:00Z'
  },
  {
    id: 'bg-floating-blobs',
    title: 'Floating Blobs',
    description: 'Softly colored blobs slowly drifting and morphing in the background',
    category: 'background-effects',
    prompt: 'Create softly colored blobs that slowly drift and morph in the background.',
    code: {
      html: `<div class="blobs-bg"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="content"><h2 class="bg-title">Floating Blobs</h2></div></div>`,
      css: `.blobs-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #0b1020;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blobs-bg .content {
  position: relative;
  z-index: 2;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.blob {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
  animation: float-blob 24s ease-in-out infinite;
}

.blob.b1 {
  background: #3b82f6;
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.blob.b2 {
  background: #a78bfa;
  bottom: -15%;
  right: -8%;
  animation-delay: 4s;
}

.blob.b3 {
  background: #22d3ee;
  top: 40%;
  left: 50%;
  animation-delay: 8s;
}

@keyframes float-blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(18%, -8%) scale(1.12);
  }
  50% {
    transform: translate(-12%, 10%) scale(0.94);
  }
  75% {
    transform: translate(6%, -4%) scale(1.05);
  }
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      framework: 'vanilla'
    },
    tags: ['background', 'blobs', 'drift', 'morph'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:04:00Z',
    updatedAt: '2024-01-16T10:04:00Z'
  },
  {
    id: 'bg-matrix-rain',
    title: 'Matrix Rain',
    description: 'Falling green characters like the Matrix digital rain',
    category: 'background-effects',
    prompt: 'Make a background with falling green characters like the Matrix digital rain.',
    code: {
      html: `<div class="matrix-container">
  <canvas class="matrix-canvas"></canvas>
  <div class="content">
    <h2 class="bg-title">Matrix Rain</h2>
  </div>
</div>`,
      css: `.matrix-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000814;
}

.matrix-canvas {
  display: block;
  width: 100%;
  height: 100%;
  background: #000814;
}

.matrix-container .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      javascript: `const canvas = document.querySelector('.matrix-canvas');
const ctx = canvas.getContext('2d');

const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789';
const fontSize = 16;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const columns = Math.floor(canvas.width / fontSize);
const drops = new Array(columns).fill(1);

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0aff0a';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  requestAnimationFrame(animate);
}

animate();`
      ,
      framework: 'vanilla'
    },
    tags: ['background', 'matrix', 'rain', 'canvas'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:06:00Z',
    updatedAt: '2024-01-16T10:06:00Z'
  },
  {
    id: 'bg-particle-swarm',
    title: 'Particle Swarm',
    description: 'Swarm of small dots move randomly and gently avoid each other',
    category: 'background-effects',
    prompt: 'Animate a swarm of small dots that move randomly but gently avoid each other.',
    code: {
      html: `<div class="swarm-container">
  <canvas class="swarm-canvas"></canvas>
  <div class="content">
    <h2 class="bg-title">Particle Swarm</h2>
  </div>
</div>`,
      css: `.swarm-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #0b1220;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swarm-canvas {
  display: block;
  width: 100%;
  height: 100%;
  background: #0b1220;
}

.swarm-container .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      javascript: `const canvas = document.querySelector('.swarm-canvas');
const ctx = canvas.getContext('2d');
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; }
resize(); addEventListener('resize', resize);
const N = 100; const particles = [];
for (let i=0;i<N;i++){ particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*0.6, vy: (Math.random()-0.5)*0.6 }); }
function step(){
  for (let i=0;i<N;i++){
    let p = particles[i];
    let ax = 0, ay = 0;
    for (let j=0;j<N;j++) if (i!==j){
      const q = particles[j];
      const dx = p.x - q.x, dy = p.y - q.y; const d2 = dx*dx+dy*dy; if (d2<900 && d2>0){ ax += dx/d2; ay += dy/d2; }
    }
    p.vx += ax*20; p.vy += ay*20; p.vx *= 0.96; p.vy *= 0.96; p.x += p.vx; p.y += p.vy;
    if (p.x<0) p.x=canvas.width; if (p.x>canvas.width) p.x=0; if (p.y<0) p.y=canvas.height; if (p.y>canvas.height) p.y=0;
  }
}
function render(){
  ctx.fillStyle = 'rgba(11,18,32,0.4)'; ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  for (const p of particles){ ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI*2); ctx.fill(); }
}
function loop(){ step(); render(); requestAnimationFrame(loop); }
loop();`
      ,
      framework: 'vanilla'
    },
    tags: ['background', 'particles', 'swarm', 'canvas'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:08:00Z',
    updatedAt: '2024-01-16T10:08:00Z'
  },
  {
    id: 'bg-water-ripple',
    title: 'Water Ripple',
    description: 'Looping water ripple distortion effect over the background',
    category: 'background-effects',
    prompt: 'Add a looping water ripple distortion effect to the background.',
    code: {
      html: `<div class="ripple-bg"><div class="content"><h2 class="bg-title">Water Ripple</h2></div></div>`,
      css: `.ripple-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  background: radial-gradient(circle at 50% 40%, #1f2937, #0b1220 60%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ripple-bg .content {
  position: relative;
  z-index: 2;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.ripple-bg::after {
  content: '';
  position: absolute;
  inset: -50% -50%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 10%, transparent 11%) 0 0/20px 20px;
  animation: ripple 6s linear infinite;
  mix-blend-mode: overlay;
  opacity: 0.4;
  filter: blur(4px);
}

@keyframes ripple {
  0% { transform: translate(0,0) scale(1); }
  50% { transform: translate(2%,1%) scale(1.03); }
  100% { transform: translate(0,0) scale(1); }
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      framework: 'vanilla'
    },
    tags: ['background', 'ripple', 'water', 'distortion'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:10:00Z',
    updatedAt: '2024-01-16T10:10:00Z'
  },
  {
    id: 'bg-cloud-drift',
    title: 'Cloud Drift',
    description: 'Soft clouds slowly drifting across the background',
    category: 'background-effects',
    prompt: 'Animate soft clouds slowly drifting across the background.',
    code: {
      html: `<div class="cloud-bg"><div class="content"><h2>Cloud Drift</h2></div></div>`,
      css: `.cloud-bg{height:100vh;width:100%;position:relative;overflow:hidden;background:linear-gradient(#0ea5e9,#1e3a8a);} 
.cloud-bg::before, .cloud-bg::after{
  content:''; position:absolute; inset:-30% -10%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><g fill="white" opacity="0.5"><ellipse cx="80" cy="120" rx="70" ry="30"/><ellipse cx="160" cy="110" rx="90" ry="40"/><ellipse cx="260" cy="120" rx="70" ry="30"/></g></svg>') repeat;
  filter: blur(8px);
  animation: clouds 60s linear infinite;
}
.cloud-bg::after{ opacity:0.7; animation-duration: 90s; }
.cloud-bg .content{position:relative;z-index:1;height:100%;display:flex;align-items:center;justify-content:center;color:#e5e7eb;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;}
@keyframes clouds{ 0%{ transform: translateX(0);} 100%{ transform: translateX(-50%);} }
`,
      framework: 'vanilla'
    },
    tags: ['background', 'clouds', 'drift', 'svg'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:12:00Z',
    updatedAt: '2024-01-16T10:12:00Z'
  },
  {
    id: 'bg-hexagon-grid-glow',
    title: 'Hexagon Grid Glow',
    description: 'Glowing hexagon grid where random cells pulse faintly',
    category: 'background-effects',
    prompt: 'Create a glowing hexagon grid where random cells pulse faintly.',
    code: {
      html: `<div class="hex-grid-bg"><div class="content"><h2>Hexagon Grid Glow</h2></div></div>`,
      css: `.hex-grid-bg{height:100vh;width:100%;position:relative;background:#0b1220;overflow:hidden;color:#e5e7eb;}
.hex-grid-bg::before{
  content:''; position:absolute; inset:-10%;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='104' viewBox='0 0 120 104'><defs><polygon id='h' points='30,0 90,0 120,52 90,104 30,104 0,52' fill='none' stroke='%233983f6' stroke-opacity='0.25' stroke-width='1.5'/></defs><use href='%23h'/><use href='%23h' x='-60' y='-52'/><use href='%23h' x='60' y='-52'/><use href='%23h' x='-60' y='52'/><use href='%23h' x='60' y='52'/></svg>");
  background-size: 140px 122px; opacity:0.6; filter: drop-shadow(0 0 6px rgba(59,130,246,0.35));
  animation: grid-shift 30s linear infinite;
}
.hex-grid-bg .content{position:relative;z-index:1;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;}
@keyframes grid-shift{0%{transform:translate(0,0)}100%{transform:translate(-70px,-61px)}}
`,
      framework: 'vanilla'
    },
    tags: ['background', 'hexagon', 'grid', 'glow'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:14:00Z',
    updatedAt: '2024-01-16T10:14:00Z'
  },
  {
    id: 'bg-fireflies',
    title: 'Fireflies',
    description: 'Small glowing fireflies blinking and moving slowly across the background',
    category: 'background-effects',
    prompt: 'Animate small glowing fireflies blinking and moving slowly across the background.',
    code: {
      html: `<div class="fireflies-bg"><div class="content"><h2 class="bg-title">Fireflies</h2></div></div>`,
      css: `.fireflies-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  background: #0b1020;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fireflies-bg .content {
  position: relative;
  z-index: 2;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.firefly {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #facc15;
  box-shadow: 0 0 10px #facc15aa, 0 0 20px #facc15aa;
  opacity: 0.8;
  animation: blink 2.5s ease-in-out infinite alternate, drift 18s linear infinite;
}

@keyframes blink {
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

@keyframes drift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, -30px); }
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      javascript: `const container = document.querySelector('.fireflies-bg');
const COUNT = 30;
for (let i=0;i<COUNT;i++){
  const f = document.createElement('div');
  f.className = 'firefly';
  f.style.left = Math.random()*100 + 'vw';
  f.style.top = Math.random()*100 + 'vh';
  f.style.animationDelay = (Math.random()*3)+'s, '+(Math.random()*20)+'s';
  f.style.animationDuration = '2.5s, ' + (16 + Math.random()*12) + 's';
  container.appendChild(f);
}
`,
      framework: 'vanilla'
    },
    tags: ['background', 'fireflies', 'glow', 'ambient'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:16:00Z',
    updatedAt: '2024-01-16T10:16:00Z'
  },
  {
    id: 'bg-pixelated-waves',
    title: 'Pixelated Waves',
    description: 'Pixelated wave patterns moving across the screen like retro CRT',
    category: 'background-effects',
    prompt: 'Create pixelated wave patterns moving across the screen like retro CRT effects.',
    code: {
      html: `<div class="px-waves-container"><canvas class="px-waves"></canvas><div class="content"><h2 class="bg-title">Pixelated Waves</h2></div></div>`,
      css: `.px-waves-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.px-waves {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100vw;
  height: 100vh;
  background: #0a0f1f;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

.px-waves-container .content {
  position: relative;
  z-index: 2;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      javascript: `const canvas = document.querySelector('.px-waves-container .px-waves');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth / 4;
  canvas.height = window.innerHeight / 4;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let time = 0;

function animate() {
  time += 0.02;

  // Clear canvas
  ctx.fillStyle = '#0a0f1f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw pixelated waves
  for (let y = 0; y < canvas.height; y += 2) {
    for (let x = 0; x < canvas.width; x += 2) {
      const wave1 = Math.sin((x * 0.1) + time * 2);
      const wave2 = Math.cos((y * 0.1) - time * 1.5);
      const wave3 = Math.sin(((x + y) * 0.05) + time);

      const value = (wave1 + wave2 + wave3) / 3;
      const intensity = (value * 0.5 + 0.5);

      const red = Math.floor(intensity * 100);
      const green = Math.floor(intensity * 150);
      const blue = Math.floor(intensity * 255);

      ctx.fillStyle = \`rgb(\${red}, \${green}, \${blue})\`;
      ctx.fillRect(x, y, 2, 2);
    }
  }

  requestAnimationFrame(animate);
}

animate();`
      ,
      framework: 'vanilla'
    },
    tags: ['background', 'pixelated', 'waves', 'crt'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:18:00Z',
    updatedAt: '2024-01-16T10:18:00Z'
  },
  {
    id: 'bg-geometric-patterns',
    title: 'Geometric Patterns',
    description: 'Geometric shapes slowly rotating and moving in the background',
    category: 'background-effects',
    prompt: 'Animate geometric shapes slowly rotating and moving in the background.',
    code: {
      html: `<div class="geo-bg"><span class="shape s1"></span><span class="shape s2"></span><span class="shape s3"></span><div class="content"><h2 class="bg-title">Geometric Patterns</h2></div></div>`,
      css: `.geo-bg {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #0b1220;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.geo-bg .content {
  position: relative;
  z-index: 1;
  color: #e5e7eb;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.shape {
  position: absolute;
  border: 2px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(0.5px);
}

.s1 {
  width: 220px;
  height: 220px;
  top: 10%;
  left: 15%;
  border-radius: 12px;
  animation: spin 50s linear infinite;
}

.s2 {
  width: 160px;
  height: 160px;
  bottom: 12%;
  right: 18%;
  border-radius: 50%;
  animation: spin 70s linear infinite reverse;
}

.s3 {
  width: 260px;
  height: 140px;
  top: 40%;
  right: 45%;
  transform: rotate(15deg);
  animation: float 30s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(15deg); }
  50% { transform: translateY(-20px) rotate(15deg); }
}

.bg-title {
  font-size: 2rem !important;
  margin: 0 !important;
  font-weight: normal !important;
  color: #e5e7eb !important;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  text-align: center !important;
}`,
      framework: 'vanilla'
    },
    tags: ['background', 'geometric', 'patterns', 'shapes'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:20:00Z',
    updatedAt: '2024-01-16T10:20:00Z'
  },
  {
    id: 'typewriter-text',
    title: 'Typewriter Text Effect',
    description: 'Classic typewriter animation that types out text character by character with a blinking cursor',
    category: 'text-animations',
    prompt: 'Create a typewriter effect that types out text character by character. Include a blinking cursor at the end. The typing should have a realistic pace with slight variations in timing.',
    code: {
      html: `<div class="typewriter-container">
  <h1 class="typewriter">Building amazing websites with AI...</h1>
</div>`,
      css: `.typewriter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.typewriter {
  font-size: 2rem;
  border-right: 2px solid #3b82f6;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(30, end), blink-cursor 0.5s step-end infinite;
  max-width: 0;
  animation-fill-mode: forwards;
}

@keyframes typing {
  from { max-width: 0; }
  to { max-width: 100%; }
}

@keyframes blink-cursor {
  from, to { border-color: transparent; }
  50% { border-color: #3b82f6; }
}`,
      framework: 'vanilla'
    },
    tags: ['typewriter', 'text', 'cursor', 'animation'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'magnetic-cursor',
    title: 'Magnetic Cursor Effect',
    description: 'Elements that attract and follow the cursor when hovered',
    category: 'hover-effects',
    prompt: 'Create a magnetic cursor effect where elements are attracted to the cursor when it gets close. The elements should smoothly move toward the cursor and return to their original position when the cursor moves away.',
    code: {
      html: `<div class="magnetic-container">
  <button class="magnetic-btn">Hover Me</button>
  <button class="magnetic-btn">I'm Magnetic</button>
  <button class="magnetic-btn">Try This One</button>
</div>`,
      css: `.magnetic-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: 2rem;
  padding: 2rem;
}

.magnetic-btn {
  background: #1f2937;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  transform-origin: center;
}

.magnetic-btn:hover {
  background: #374151;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}`,
      javascript: `document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.3;
    const moveY = y * 0.3;

    btn.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0px, 0px)';
  });
});`,
      framework: 'vanilla'
    },
    tags: ['cursor', 'magnetic', 'interactive', 'hover', 'follow'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T11:30:00Z',
    updatedAt: '2024-01-15T11:30:00Z'
  },
  {
    id: 'animated-gradient',
    title: 'Animated Gradient Background',
    description: 'Smooth flowing gradient background that continuously animates',
    category: 'background-effects',
    prompt: 'Create an animated gradient background that flows smoothly between different colors. The gradient should move continuously and create a mesmerizing effect perfect for modern websites.',
    code: {
      html: `<div class="animated-gradient-bg">
  <div class="content">
    <h2 class="bg-title">Animated Gradient Background</h2>
  </div>
</div>`,
      css: `.animated-gradient-bg {
  height: 100vh;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5,rgb(86, 87, 88));
  background-size: 400% 400%;
  animation: gradient-flow 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.content {
  text-align: center;
  color: white;
  z-index: 2;
}

.content h2 {
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.content p {
  font-size: 1.5rem;
  margin: 1rem 0;
  opacity: 0.9;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['gradient', 'background', 'animation', 'flowing', 'colorful'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z'
  },
  {
    id: 'loading-dots',
    title: 'Bouncing Dots Loader',
    description: 'Three dots that bounce in sequence for loading states',
    category: 'loading-animations',
    prompt: 'Create a loading animation with three dots that bounce up and down in sequence. Each dot should bounce at slightly different times to create a wave effect.',
    code: {
      html: `<div class="loading-container">
  <div class="loading-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <p>Loading...</p>
</div>`,
      css: `.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
}

.loading-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  background: #3b82f6;
  border-radius: 50%;
  animation: bounce-loading 1.4s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

.dot:nth-child(3) {
  animation-delay: 0s;
}

@keyframes bounce-loading {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.loading-container p {
  color: #6b7280;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'dots', 'bounce', 'animation', 'loader'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:30:00Z',
    updatedAt: '2024-01-15T12:30:00Z'
  },
  {
    id: 'loading-spinner',
    title: 'Spinning Ring Loader',
    description: 'Classic spinning ring loader with smooth rotation',
    category: 'loading-animations',
    prompt: 'Create a classic spinning ring loader with a smooth rotation animation.',
    code: {
      html: `<div class="spinner-container">
  <div class="spinner"></div>
  <p>Loading...</p>
</div>`,
      css: `.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner-container p {
  color: #6b7280;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'spinner', 'ring', 'rotation'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:35:00Z',
    updatedAt: '2024-01-15T12:35:00Z'
  },
  {
    id: 'loading-progress-bar',
    title: 'Animated Progress Bar',
    description: 'Progress bar that fills up with a smooth animation',
    category: 'loading-animations',
    prompt: 'Create a progress bar that fills up smoothly to indicate loading progress.',
    code: {
      html: `<div class="progress-container">
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  <p>Loading...</p>
</div>`,
      css: `.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
  padding: 2rem;
}

.progress-bar {
  width: 200px;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8);
  border-radius: 4px;
  width: 0%;
  animation: fill-progress 3s ease-in-out infinite;
}

@keyframes fill-progress {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}

.progress-container p {
  color: #6b7280;
  font-size: 1.1rem;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'progress', 'bar', 'fill'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:40:00Z',
    updatedAt: '2024-01-15T12:40:00Z'
  },
  {
    id: 'loading-morphing-shapes',
    title: 'Morphing Shapes Loader',
    description: 'Geometric shapes that morph and transform while loading',
    category: 'loading-animations',
    prompt: 'Create a loading animation with geometric shapes that morph and transform into different forms.',
    code: {
      html: `<div class="morphing-container">
  <div class="morphing-shape"></div>
</div>`,
      css: `.morphing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
}

.morphing-shape {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 400% 400%;
  animation: morph-shape 2s ease-in-out infinite, gradient-shift 4s ease infinite;
  border-radius: 50%;
}

@keyframes morph-shape {
  0% {
    border-radius: 50%;
    transform: rotate(0deg) scale(1);
  }
  25% {
    border-radius: 0% 50% 50% 50%;
    transform: rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 0%;
    transform: rotate(180deg) scale(0.9);
  }
  75% {
    border-radius: 50% 0% 50% 50%;
    transform: rotate(270deg) scale(1.1);
  }
  100% {
    border-radius: 50%;
    transform: rotate(360deg) scale(1);
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'morphing', 'shapes', 'geometric', 'crazy'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:45:00Z',
    updatedAt: '2024-01-15T12:45:00Z'
  },
  {
    id: 'loading-rainbow-pulse',
    title: 'Rainbow Pulse Loader',
    description: 'Pulsing circles with rainbow colors creating a hypnotic effect',
    category: 'loading-animations',
    prompt: 'Create a loading animation with multiple pulsing circles in rainbow colors that create a hypnotic effect.',
    code: {
      html: `<div class="rainbow-container">
  <div class="pulse-circle pulse-1"></div>
  <div class="pulse-circle pulse-2"></div>
  <div class="pulse-circle pulse-3"></div>
  <div class="pulse-circle pulse-4"></div>
  <div class="pulse-circle pulse-5"></div>
</div>`,
      css: `.rainbow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;
  position: relative;
}

.pulse-circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: rainbow-pulse 2s ease-in-out infinite;
}

.pulse-1 {
  background: #ff0080;
  animation-delay: 0s;
}

.pulse-2 {
  background: #ff8000;
  animation-delay: 0.2s;
}

.pulse-3 {
  background: #ffff00;
  animation-delay: 0.4s;
}

.pulse-4 {
  background: #00ff80;
  animation-delay: 0.6s;
}

.pulse-5 {
  background: #0080ff;
  animation-delay: 0.8s;
}

@keyframes rainbow-pulse {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.5);
    opacity: 1;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'rainbow', 'pulse', 'colorful', 'crazy'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:50:00Z',
    updatedAt: '2024-01-15T12:50:00Z'
  },
  {
    id: 'loading-glitch-matrix',
    title: 'Glitch Matrix Loader',
    description: 'Matrix-style loading with glitchy text and random characters',
    category: 'loading-animations',
    prompt: 'Create a Matrix-style loading animation with glitchy text effects and random changing characters.',
    code: {
      html: `<div class="glitch-matrix-container">
  <div class="matrix-text" data-text="LOADING">LOADING</div>
  <div class="glitch-bars">
    <div class="glitch-bar"></div>
    <div class="glitch-bar"></div>
    <div class="glitch-bar"></div>
  </div>
</div>`,
      css: `.glitch-matrix-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 2rem;
  background: #000;
  color: #00ff41;
  font-family: 'Courier New', monospace;
  padding: 2rem;
  border-radius: 8px;
}

.matrix-text {
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  animation: matrix-glitch 1.5s infinite;
}

.matrix-text::before,
.matrix-text::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.matrix-text::before {
  animation: glitch-1 0.5s infinite;
  color: #ff0040;
  z-index: -1;
}

.matrix-text::after {
  animation: glitch-2 0.3s infinite;
  color: #00ffff;
  z-index: -2;
}

.glitch-bars {
  display: flex;
  gap: 4px;
}

.glitch-bar {
  width: 4px;
  height: 40px;
  background: #00ff41;
  animation: glitch-bar 0.8s infinite;
}

.glitch-bar:nth-child(2) {
  animation-delay: 0.2s;
}

.glitch-bar:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes matrix-glitch {
  0%, 100% {
    text-shadow: 0 0 5px #00ff41;
  }
  25% {
    text-shadow: -2px 0 #ff0040, 2px 0 #00ffff;
  }
  50% {
    text-shadow: 2px 0 #ff0040, -2px 0 #00ffff;
  }
  75% {
    text-shadow: 0 0 5px #00ff41;
  }
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(2px, 2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(-2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-bar {
  0%, 100% {
    height: 40px;
    opacity: 1;
  }
  25% {
    height: 60px;
    opacity: 0.7;
  }
  50% {
    height: 20px;
    opacity: 0.4;
  }
  75% {
    height: 80px;
    opacity: 0.8;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['loading', 'glitch', 'matrix', 'cyberpunk', 'crazy'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T12:55:00Z',
    updatedAt: '2024-01-15T12:55:00Z'
  },
  {
    id: 'card-3d-flip',
    title: '3D Card Flip',
    description: 'Card that flips in 3D space revealing content on the back',
    category: 'hover-effects',
    prompt: 'Create a card that flips in 3D space when hovered, revealing different content on the back side. Use CSS transforms to create a realistic 3D flip effect.',
    code: {
      html: `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Hover to Flip</h2>
    </div>
    <div class="flip-card-back">
      <h3>Surprise!</h3>
      <p>Back side revealed</p>
    </div>
  </div>
</div>`,
      css: `.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
  margin: 2rem auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.flip-card-front {
}

.flip-card-back {
 background: #3b8caa;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-front h3, .flip-card-back h3 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.flip-card-front p, .flip-card-back p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}`,
      framework: 'vanilla'
    },
    tags: ['3d', 'flip', 'card', 'hover', 'transform'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T13:00:00Z',
    updatedAt: '2024-01-15T13:00:00Z'
  },
  {
    id: 'glitch-text',
    title: 'Glitch Text Effect',
    description: 'Text that glitches with a digital distortion effect',
    category: 'text-animations',
    prompt: 'Create a glitch text effect that makes text appear to have digital distortions and color separation. The effect should trigger on hover and create a cyberpunk aesthetic.',
    code: {
      html: `<div class="glitch-container">
  <h1 class="glitch" data-text="GLITCH TEXT">GLITCH TEXT</h1>
</div>`,
      css: `.glitch-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #0a0a0a;
}

.glitch {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  position: relative;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-2 3s infinite linear alternate-reverse;
  color: #ff0040;
  z-index: -1;
}

.glitch::after {
  animation: glitch-3 2s infinite linear alternate-reverse;
  color: #00ffff;
  z-index: -2;
}

@keyframes glitch-1 {
  0% { transform: none; }
  7% { transform: skew(-0.5deg, -0.9deg); }
  10% { transform: none; }
  27% { transform: none; }
  30% { transform: skew(0.8deg, -0.1deg); }
  35% { transform: none; }
  52% { transform: none; }
  55% { transform: skew(-1deg, 0.2deg); }
  50% { transform: none; }
  72% { transform: none; }
  75% { transform: skew(0.4deg, 1deg); }
  80% { transform: none; }
  100% { transform: none; }
}

@keyframes glitch-2 {
  0% { transform: none; }
  7% { transform: translate(-2px, -3px); }
  10% { transform: none; }
  27% { transform: none; }
  30% { transform: translate(-5px, -2px); }
  35% { transform: none; }
  52% { transform: none; }
  55% { transform: translate(-1px, -1px); }
  50% { transform: none; }
  72% { transform: none; }
  75% { transform: translate(-2px, -6px); }
  80% { transform: none; }
  100% { transform: none; }
}

@keyframes glitch-3 {
  0% { transform: none; }
  7% { transform: translate(2px, 3px); }
  10% { transform: none; }
  27% { transform: none; }
  30% { transform: translate(5px, 2px); }
  35% { transform: none; }
  52% { transform: none; }
  55% { transform: translate(1px, 1px); }
  50% { transform: none; }
  72% { transform: none; }
  75% { transform: translate(2px, 6px); }
  80% { transform: none; }
  100% { transform: none; }
}`,
      framework: 'vanilla'
    },
    tags: ['glitch', 'text', 'cyberpunk', 'distortion', 'effects'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T13:30:00Z',
    updatedAt: '2024-01-15T13:30:00Z'
  },
  {
    id: '3d-circular-rotating-text',
    title: '3D Circular Rotating Text',
    description: 'Text arranged in a 3D circular pattern that rotates continuously in pink font',
    category: 'text-animations',
    prompt: 'Create text that forms a circular 3D pattern and rotates continuously. The text should be in pink color and have a 3D perspective effect.',
    code: {
      html: `<div class="circular-text-container">
  <div class="circular-text">
    <span>ROTATING</span>
    <span>•</span>
    <span>CIRCULAR</span>
    <span>•</span>
    <span>TEXT</span>
    <span>•</span>
    <span>EFFECT</span>
    <span>•</span>
  </div>
</div>`,
      css: `.circular-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  perspective: 800px;
  margin: 50px auto;
}

.circular-text {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: rotate3d 8s linear infinite;
}

.circular-text span {
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ec4899;
  text-shadow:
    0 0 10px rgba(236, 72, 153, 0.5),
    0 0 20px rgba(236, 72, 153, 0.3),
    0 0 30px rgba(236, 72, 153, 0.2);
  transform-origin: 0 100px;
  white-space: nowrap;
}

.circular-text span:nth-child(1) { transform: rotateY(0deg) translateZ(100px); }
.circular-text span:nth-child(2) { transform: rotateY(45deg) translateZ(100px); }
.circular-text span:nth-child(3) { transform: rotateY(90deg) translateZ(100px); }
.circular-text span:nth-child(4) { transform: rotateY(135deg) translateZ(100px); }
.circular-text span:nth-child(5) { transform: rotateY(180deg) translateZ(100px); }
.circular-text span:nth-child(6) { transform: rotateY(225deg) translateZ(100px); }
.circular-text span:nth-child(7) { transform: rotateY(270deg) translateZ(100px); }
.circular-text span:nth-child(8) { transform: rotateY(315deg) translateZ(100px); }

@keyframes rotate3d {
  0% { transform: rotateY(0deg) rotateX(10deg); }
  100% { transform: rotateY(360deg) rotateX(10deg); }
}`,
      framework: 'vanilla'
    },
    tags: ['3d', 'circular', 'rotating', 'text', 'pink', 'perspective'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:30:00Z',
    updatedAt: '2024-01-16T10:30:00Z'
  },
  {
    id: 'text-orbiting-square',
    title: 'Text Orbiting Square',
    description: 'Animated text that moves around the perimeter of a square image',
    category: 'text-animations',
    prompt: 'Create animated text that continuously moves around the edges of a square image placeholder.',
    code: {
      html: `<div class="snake-text-container">
  <div class="center-square"></div>
  <div class="snake-text">SNAKE TEXT</div>
</div>`,
      css: `.snake-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  margin: 50px auto;
  position: relative;
}

.center-square {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.center-square::before {
  content: '📷';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  opacity: 0.7;
}

.snake-text {
  position: absolute;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #374151;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  animation: snake-path 8s ease-in-out infinite;
}

@keyframes snake-path {
  0% {
    top: 115px;
    left: 125px;
    transform: rotate(0deg);
  }
  25% {
    top: 115px;
    left: 275px;
    transform: rotate(90deg);
  }
  50% {
    top: 285px;
    left: 275px;
    transform: rotate(180deg);
  }
  75% {
    top: 285px;
    left: 125px;
    transform: rotate(270deg);
  }
  100% {
    top: 115px;
    left: 125px;
    transform: rotate(360deg);
  }
}`,
      framework: 'vanilla'
    },
    tags: ['text', 'orbit', 'animation', 'square', 'moving', 'rotate'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:35:00Z',
    updatedAt: '2024-01-16T10:35:00Z'
  },
  {
    id: 'fairy-dust-cursor',
    title: 'Fairy Dust',
    description: 'Magical sparkling particles that follow the cursor movement',
    category: 'cursor-interactions',
    prompt: 'Create a fairy dust cursor effect where small sparkling particles trail behind the cursor. The particles should fade out over time and have a magical, ethereal appearance.',
    code: {
      html: `<div class="fairy-dust-demo">
  <h2>Fairy dust cursor ✨</h2>
</div>`,
      css: `.fairy-dust-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.fairy-dust-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.fairy-dust-demo p {
  font-size: 1.2rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.fairy-particle {
  position: fixed;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  opacity: 1;
  animation: fairy-fade 1s ease-out forwards;
}

@keyframes fairy-fade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
}`,
      javascript: `let particles = [];

function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'fairy-particle';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.background = \`hsl(\${Math.random() * 60 + 300}, 100%, 80%)\`;

  document.body.appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 1000);
}

let lastTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastTime > 50) {
    createParticle(e.clientX - 2, e.clientY - 2);
    lastTime = now;
  }
});`,
      framework: 'vanilla'
    },
    tags: ['fairy-dust', 'cursor', 'particles', 'magical', 'sparkles'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T14:00:00Z',
    updatedAt: '2024-01-15T14:00:00Z'
  },
  {
    id: 'bubble-cursor',
    title: 'Bubble Cursor Trail',
    description: 'Floating bubbles that appear behind cursor movement',
    category: 'cursor-interactions',
    prompt: 'Create bubbles that spawn behind the cursor as it moves. The bubbles should float upward and fade out, creating a dreamy underwater effect.',
    code: {
      html: `<div class="bubble-demo">
  <h2>Bubble effect! 🫧</h2>
</div>`,
      css: `.bubble-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.bubble-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bubble-demo p {
  font-size: 1.2rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.bubble {
  position: fixed;
  border-radius: 50%;
  background: rgba(173, 216, 230, 0.7);
  border: 1px solid rgba(135, 206, 235, 0.8);
  pointer-events: none;
  z-index: 9999;
  animation: bubble-float 3s ease-out forwards;
}

@keyframes bubble-float {
  0% {
    opacity: 0.8;
    transform: translateY(0) scale(0);
  }
  20% {
    opacity: 0.8;
    transform: translateY(-20px) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(1.2);
  }
}`,
      javascript: `function createBubble(x, y) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const size = Math.random() * 20 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = (x - size/2) + 'px';
  bubble.style.top = (y - size/2) + 'px';

  document.body.appendChild(bubble);

  setTimeout(() => {
    if (bubble.parentNode) {
      bubble.parentNode.removeChild(bubble);
    }
  }, 3000);
}

let lastBubbleTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastBubbleTime > 100) {
    createBubble(e.clientX, e.clientY);
    lastBubbleTime = now;
  }
});`,
      framework: 'vanilla'
    },
    tags: ['bubbles', 'cursor', 'floating', 'underwater', 'dreamy'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T14:15:00Z',
    updatedAt: '2024-01-15T14:15:00Z'
  },
  {
    id: 'emoji-rain-cursor',
    title: 'Emoji Rain Cursor',
    description: 'Colorful emojis that rain down from cursor position',
    category: 'cursor-interactions',
    prompt: 'Create an emoji rain effect where random emojis fall from the cursor position. Each emoji should have different falling speeds and rotation for a playful effect.',
    code: {
      html: `<div class="emoji-rain-demo">
  <h2>Emoji Rain 🌈</h2>
</div>`,
      css: `.emoji-rain-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.emoji-rain-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.emoji-rain-demo p {
  font-size: 1.2rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.emoji-particle {
  position: fixed;
  font-size: 20px;
  pointer-events: none;
  z-index: 9999;
  animation: emoji-fall 2s ease-in forwards;
}

@keyframes emoji-fall {
  0% {
    opacity: 1;
    transform: translateY(-20px) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(100vh) rotate(360deg);
  }
}`,
      javascript: `const emojis = ['🎉', '🌟', '💫', '✨', '🎈', '🎊', '🦄', '🌈', '💖', '🔥', '⚡', '🍀'];

function createEmojiParticle(x, y) {
  const emoji = document.createElement('div');
  emoji.className = 'emoji-particle';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = (x + Math.random() * 40 - 20) + 'px';
  emoji.style.top = y + 'px';
  emoji.style.fontSize = (Math.random() * 10 + 15) + 'px';

  const duration = Math.random() * 1000 + 1500;
  emoji.style.animationDuration = duration + 'ms';

  document.body.appendChild(emoji);

  setTimeout(() => {
    if (emoji.parentNode) {
      emoji.parentNode.removeChild(emoji);
    }
  }, duration);
}

document.addEventListener('click', (e) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createEmojiParticle(e.clientX, e.clientY);
    }, i * 100);
  }
});

let lastEmojiTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastEmojiTime > 200) {
    createEmojiParticle(e.clientX, e.clientY);
    lastEmojiTime = now;
  }
});`,
      framework: 'vanilla'
    },
    tags: ['emoji', 'rain', 'cursor', 'playful', 'colorful'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T14:30:00Z',
    updatedAt: '2024-01-15T14:30:00Z'
  },
  {
    id: 'elastic-emoji-cursor',
    title: 'Elastic Emoji Cursor',
    description: 'Emoji that follows cursor with elastic spring animation',
    category: 'cursor-interactions',
    prompt: 'Create an emoji that follows the cursor with a springy, elastic animation. The emoji should lag behind the cursor and bounce slightly when the cursor stops moving.',
    code: {
      html: `<div class="elastic-demo">
  <div class="emoji-follower">🚀</div>
  <h2>Follow the rocket 🎯</h2>
  <p>Move your cursor around to see the elastic effect</p>
</div>`,
      css: `.elastic-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.elastic-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.elastic-demo p {
  font-size: 1.2rem;
  opacity: 0.8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.emoji-follower {
  position: fixed;
  font-size: 30px;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}`,
      javascript: `let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;
const follower = document.querySelector('.emoji-follower');

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateFollower() {
  const deltaX = mouseX - followerX;
  const deltaY = mouseY - followerY;

  followerX += deltaX * 0.1;
  followerY += deltaY * 0.1;

  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const scale = Math.min(1 + distance * 0.001, 1.3);

  follower.style.transform = \`translate(\${followerX - 15}px, \${followerY - 15}px) scale(\${scale})\`;

  requestAnimationFrame(animateFollower);
}

animateFollower();`,
      framework: 'vanilla'
    },
    tags: ['elastic', 'emoji', 'follower', 'spring', 'animation'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T14:45:00Z',
    updatedAt: '2024-01-15T14:45:00Z'
  },
  {
    id: 'rainbow-comet-cursor',
    title: 'Rainbow Comet',
    description: 'A smooth rainbow-colored gradient line follows the cursor like a comet tail',
    category: 'cursor-interactions',
    prompt: 'Make a cursor trail effect where a smooth rainbow-colored gradient line follows the cursor, tapering like a comet tail.',
    code: {
      html: `<div class="rainbow-comet-demo">
  <h2>Rainbow trail 🌈</h2>
</div>`,
      css: `.rainbow-comet-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
}

.rainbow-comet-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.comet-trail {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transition: opacity 0.5s ease-out;
}`,
      javascript: `let trails = [];
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  createTrail(mouseX, mouseY);
});

function createTrail(x, y) {
  const trail = document.createElement('div');
  trail.className = 'comet-trail';
  trail.style.left = x + 'px';
  trail.style.top = y + 'px';

  document.body.appendChild(trail);
  trails.push(trail);

  // Limit number of trail elements
  if (trails.length > 15) {
    const oldTrail = trails.shift();
    if (oldTrail.parentNode) {
      oldTrail.parentNode.removeChild(oldTrail);
    }
  }

  // Fade out trail
  setTimeout(() => {
    trail.style.opacity = '0';
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
    }, 500);
  }, 100);
}

function animateTrails() {
  trails.forEach((trail, index) => {
    const scale = 1 - (index / trails.length) * 0.8;
    const opacity = 1 - (index / trails.length) * 0.9;
    trail.style.transform = \`scale(\${scale})\`;
    trail.style.opacity = opacity;
  });

  requestAnimationFrame(animateTrails);
}

animateTrails();`,
      framework: 'vanilla'
    },
    tags: ['rainbow', 'comet', 'cursor', 'trail', 'colorful'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T15:30:00Z',
    updatedAt: '2024-01-15T15:30:00Z'
  },
  {
    id: 'sparkle-trail-cursor',
    title: 'Sparkle Trail',
    description: 'Cursor leaves behind sparkling star particles that fade out within 0.5s',
    category: 'cursor-interactions',
    prompt: 'Create a JavaScript effect where the cursor leaves behind sparkling star particles that fade out within 0.5s. The sparkles should be random sizes and colors.',
    code: {
      html: `<div class="sparkle-demo">
  <h2>Sparkle trail ✨</h2>
</div>`,
      css: `.sparkle-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
}

.sparkle-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.sparkle {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: sparkle-fade 0.5s ease-out forwards;
}

@keyframes sparkle-fade {
  0% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.3) rotate(180deg);
  }
}`,
      javascript: `const sparkleSymbols = ['✨', '⭐', '🌟', '💫', '⚡'];
const sparkleColors = ['#FFD700', '#FF69B4', '#00BFFF', '#98FB98', '#DDA0DD', '#F0E68C'];

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.textContent = sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

  const size = Math.random() * 15 + 10;
  sparkle.style.fontSize = size + 'px';
  sparkle.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
  sparkle.style.left = (x + Math.random() * 30 - 15) + 'px';
  sparkle.style.top = (y + Math.random() * 30 - 15) + 'px';
  sparkle.style.textShadow = '0 0 6px currentColor';

  document.body.appendChild(sparkle);

  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.parentNode.removeChild(sparkle);
    }
  }, 500);
}

let lastSparkleTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastSparkleTime > 80) {
    createSparkle(e.clientX, e.clientY);
    lastSparkleTime = now;
  }
});`,
      framework: 'vanilla'
    },
    tags: ['sparkle', 'cursor', 'stars', 'glitter', 'magical'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T15:45:00Z',
    updatedAt: '2024-01-15T15:45:00Z'
  },
  {
    id: 'cursor-spotlight',
    title: 'Cursor Spotlight',
    description: 'Circular spotlight around cursor reveals background while rest of screen is darkened',
    category: 'cursor-interactions',
    prompt: 'Add a circular spotlight around the cursor that reveals the background image while the rest of the screen is darkened.',
    code: {
      html: `<div class="spotlight-demo">
  <div class="spotlight-overlay"></div>
  <div class="content">
    <h2>Cursor spotlight 🔦</h2>
    <div class="hidden-text">
      <p>✨ Secret message revealed! ✨</p>
      <p>This text is hidden in the darkness</p>

    </div>
  </div>
</div>`,
      css: `.spotlight-demo {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: black);
}

.spotlight-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle 100px at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.9) 100%);
  pointer-events: none;
  z-index: 10;
  transition: background 0.1s ease;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  position: relative;
  z-index: 5;
}

.content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.hidden-text {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:black;
}

.hidden-text p {
  font-size: 1.1rem;
  margin: 0.5rem 0;
}`,
      javascript: `const overlay = document.querySelector('.spotlight-overlay');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  overlay.style.background = \`radial-gradient(circle 120px at \${x}% \${y}%, transparent 0%, rgba(0, 0, 0, 0.9) 100%)\`;
});`,
      framework: 'vanilla'
    },
    tags: ['spotlight', 'cursor', 'reveal', 'darkness', 'interactive'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T16:00:00Z',
    updatedAt: '2024-01-15T16:00:00Z'
  },
  {
    id: 'pixelated-cursor',
    title: 'Pixelated Cursor',
    description: 'Small pixel squares flicker around the cursor like a glitch effect',
    category: 'cursor-interactions',
    prompt: 'Build a cursor effect where small pixel squares flicker around the cursor, like a glitch effect.',
    code: {
      html: `<div class="pixel-demo">
  <h2>Pixelated glitch cursor 📱</h2>
</div>`,
      css: `.pixel-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
}

.pixel-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.pixel {
  position: fixed;
  width: 8px;
  height: 8px;
  pointer-events: none;
  z-index: 9999;
  animation: pixel-glitch 0.3s ease-out forwards;
}

@keyframes pixel-glitch {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}`,
      javascript: `const pixelColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080'];

function createPixel(x, y) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.style.backgroundColor = pixelColors[Math.floor(Math.random() * pixelColors.length)];

  const offsetX = Math.random() * 40 - 20;
  const offsetY = Math.random() * 40 - 20;
  pixel.style.left = (x + offsetX) + 'px';
  pixel.style.top = (y + offsetY) + 'px';

  // Random flicker effect
  if (Math.random() > 0.5) {
    pixel.style.animationDelay = Math.random() * 0.1 + 's';
  }

  document.body.appendChild(pixel);

  setTimeout(() => {
    if (pixel.parentNode) {
      pixel.parentNode.removeChild(pixel);
    }
  }, 300);
}

let lastPixelTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastPixelTime > 50) {
    // Create multiple pixels for glitch effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createPixel(e.clientX, e.clientY);
      }, i * 20);
    }
    lastPixelTime = now;
  }
});`,
      framework: 'vanilla'
    },
    tags: ['pixel', 'glitch', 'cursor', 'retro', '8bit'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T16:15:00Z',
    updatedAt: '2024-01-15T16:15:00Z'
  },
  {
    id: 'cursor-paintbrush',
    title: 'Cursor Paintbrush',
    description: 'Cursor becomes a paintbrush leaving colorful brush strokes that fade after 2s',
    category: 'cursor-interactions',
    prompt: 'Turn the cursor into a paintbrush that leaves colorful brush strokes as it moves, fading after 2s.',
    code: {
      html: `<div class="paintbrush-demo">
  <h2>Cursor paintbrush 🎨</h2>
</div>`,
      css: `.paintbrush-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
  cursor: crosshair;
}

.paintbrush-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.brush-stroke {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  animation: brush-fade 2s ease-out forwards;
}

@keyframes brush-fade {
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.5);
  }
}`,
      javascript: `const brushColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
let isDrawing = false;
let lastX = 0;
let lastY = 0;

document.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDrawing = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;

  const currentX = e.clientX;
  const currentY = e.clientY;

  // Create brush strokes between last and current position
  const distance = Math.sqrt(Math.pow(currentX - lastX, 2) + Math.pow(currentY - lastY, 2));
  const steps = Math.max(1, Math.floor(distance / 5));

  for (let i = 0; i <= steps; i++) {
    const x = lastX + (currentX - lastX) * (i / steps);
    const y = lastY + (currentY - lastY) * (i / steps);

    createBrushStroke(x, y);
  }

  lastX = currentX;
  lastY = currentY;
});

function createBrushStroke(x, y) {
  const stroke = document.createElement('div');
  stroke.className = 'brush-stroke';

  const size = Math.random() * 15 + 10;
  stroke.style.width = size + 'px';
  stroke.style.height = size + 'px';
  stroke.style.backgroundColor = brushColors[Math.floor(Math.random() * brushColors.length)];
  stroke.style.left = (x - size/2) + 'px';
  stroke.style.top = (y - size/2) + 'px';

  document.body.appendChild(stroke);

  setTimeout(() => {
    if (stroke.parentNode) {
      stroke.parentNode.removeChild(stroke);
    }
  }, 2000);
}`,
      framework: 'vanilla'
    },
    tags: ['paintbrush', 'cursor', 'painting', 'colorful', 'creative'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T16:30:00Z',
    updatedAt: '2024-01-15T16:30:00Z'
  },
  {
    id: 'cursor-confetti',
    title: 'Cursor Confetti',
    description: 'Confetti explosion animation triggers at cursor position when clicking',
    category: 'cursor-interactions',
    prompt: 'Trigger a confetti explosion animation at the cursor position when clicking.',
    code: {
      html: `<div class="confetti-demo">
  <h2>Click for confetti! 🎉</h2>
</div>`,
      css: `.confetti-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
  cursor: pointer;
}

.confetti-demo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}


.confetti {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  animation: confetti-fall 1.5s ease-out forwards;
}

@keyframes confetti-fall {
  0% {
    opacity: 1;
    transform: translateY(0) rotateZ(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(200px) rotateZ(720deg);
  }
}`,
      javascript: `const confettiShapes = ['🎉', '🎊', '🎈', '✨', '🌟', '💫', '🎆', '🎇'];
const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];

function createConfetti(x, y) {
  const confettiCount = 15;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    // Random confetti type
    if (Math.random() > 0.5) {
      confetti.textContent = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
      confetti.style.fontSize = (Math.random() * 15 + 15) + 'px';
    } else {
      confetti.style.width = '8px';
      confetti.style.height = '8px';
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    }

    // Random position around click
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 50;
    confetti.style.left = (x + offsetX) + 'px';
    confetti.style.top = (y + offsetY) + 'px';

    // Random animation duration and delay
    const duration = Math.random() * 0.5 + 1;
    const delay = Math.random() * 0.2;
    confetti.style.animationDuration = duration + 's';
    confetti.style.animationDelay = delay + 's';

    document.body.appendChild(confetti);

    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, (duration + delay) * 1000);
  }
}

document.addEventListener('click', (e) => {
  createConfetti(e.clientX, e.clientY);
});`,
      framework: 'vanilla'
    },
    tags: ['confetti', 'cursor', 'celebration', 'click', 'explosion'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T16:45:00Z',
    updatedAt: '2024-01-15T16:45:00Z'
  },
  {
    id: 'wave-text',
    title: 'Wave Text',
    description: 'Wave effect where each character moves up and down in sequence like a sine wave',
    category: 'text-animations',
    prompt: 'Create a wave effect where each character moves up and down in sequence like a sine wave.',
    code: {
      html: `<div class="wave-text-demo">
  <h2 class="wave-text">Wave Text</h2>
</div>`,
      css: `.wave-text-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
}

.wave-text {
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  display: inline-block;
}

.wave-text span {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 40%, 100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}`,
      javascript: `const waveText = document.querySelector('.wave-text');
const text = waveText.textContent;
waveText.innerHTML = '';

text.split('').forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.animationDelay = (index * 0.1) + 's';
  waveText.appendChild(span);
});`,
      framework: 'vanilla'
    },
    tags: ['wave', 'text', 'sine', 'movement', 'characters'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T17:00:00Z',
    updatedAt: '2024-01-15T17:00:00Z'
  },
  {
    id: 'neon-glow-text',
    title: 'Neon Glow',
    description: 'Text flickers on like a neon sign, glowing with a pulsing effect',
    category: 'text-animations',
    prompt: 'Make text flicker on like a neon sign, glowing with a pulsing effect.',
    code: {
      html: `<div class="neon-glow-demo">
  <h2 class="neon-text">Neon Glow ⚡</h2>
</div>`,
      css: `.neon-glow-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0a0a0a;
}

.neon-text {
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #fff;
  text-shadow:
    0 0 5px #ff00ff,
    0 0 10px #ff00ff,
    0 0 15px #ff00ff,
    0 0 20px #ff00ff,
    0 0 35px #ff00ff,
    0 0 40px #ff00ff;
  animation: neon-flicker 3s ease-in-out infinite;
}

@keyframes neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 15px #ff00ff,
      0 0 20px #ff00ff,
      0 0 35px #ff00ff,
      0 0 40px #ff00ff;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['neon', 'glow', 'flicker', 'sign', 'electric'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T17:15:00Z',
    updatedAt: '2024-01-15T17:15:00Z'
  },
  {
    id: 'shuffle-letters-text',
    title: 'Shuffle Letters',
    description: 'Letters rapidly shuffle through random characters in bright colors before landing on the final word in black text',
    category: 'text-animations',
    prompt: 'Animate text so letters rapidly shuffle through random characters in bright colors before landing on the final word in black text.',
    code: {
      html: `<div class="shuffle-demo">
  <h2 class="shuffle-text">Shuffle Letters</h2>
</div>`,
      css: `.shuffle-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
}

.shuffle-text {
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  color: #000;
}

.shuffle-text.shuffling {
  color: transparent;
}

.shuffle-text .letter {
  display: inline-block;
}

.shuffle-text .letter.shuffling {
  color: var(--random-color);
}`,
      javascript: `const shuffleText = document.querySelector('.shuffle-text');
const originalText = shuffleText.textContent;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
const brightColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#FD79A8', '#FDCB6E', '#6C5CE7', '#A29BFE', '#FF7675', '#74B9FF', '#00B894'];

function shuffle() {
  let iteration = 0;
  shuffleText.innerHTML = '';

  // Create spans for each character
  originalText.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char;
    shuffleText.appendChild(span);
  });

  const letters = shuffleText.querySelectorAll('.letter');

  const interval = setInterval(() => {
    letters.forEach((letter, index) => {
      if (index < iteration) {
        letter.textContent = originalText[index];
        letter.className = 'letter';
        letter.style.color = '#000';
      } else {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
        letter.textContent = randomChar;
        letter.className = 'letter shuffling';
        letter.style.setProperty('--random-color', randomColor);
        letter.style.color = randomColor;
      }
    });

    if (iteration >= originalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
}

shuffleText.addEventListener('mouseenter', shuffle);

// Auto-trigger on load
setTimeout(shuffle, 1000);`,
      framework: 'vanilla'
    },
    tags: ['shuffle', 'letters', 'random', 'decode', 'matrix'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-15T17:30:00Z',
    updatedAt: '2024-01-15T17:30:00Z'
  },

  {
    id: 'rainbow-cycle-text',
    title: 'Rainbow Cycle',
    description: 'Text color cycles through the rainbow continuously',
    category: 'text-animations',
    prompt: 'Animate text so its color cycles through the rainbow continuously.',
    code: {
      html: `<div class="rainbow-cycle-demo">
  <h2 class="rainbow-text">Rainbow Cycle 🌈</h2>
</div>`,
      css: `.rainbow-cycle-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
}

.rainbow-text {
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow-cycle 3s ease-in-out infinite;
}

@keyframes rainbow-cycle {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['rainbow', 'cycle', 'color', 'spectrum', 'continuous'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T18:15:00Z',
    updatedAt: '2024-01-15T18:15:00Z'
  },
  {
    id: 'split-text-fly-in',
    title: 'Split Text Fly-In',
    description: 'Each letter flies in from random directions before aligning',
    category: 'text-animations',
    prompt: 'Create a text animation where each letter flies in from random directions before aligning.',
    code: {
      html: `<div class="split-fly-demo">
  <h2 class="split-text">Split Text Fly-In ✈️</h2>
</div>`,
      css: `.split-fly-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.split-text {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: black;
}

.split-text .letter {
  display: inline-block;
  opacity: 0;
  animation: fly-in 1s ease-out forwards;
}

@keyframes fly-in {
  0% {
    opacity: 0;
    transform: translate(var(--random-x), var(--random-y)) rotate(var(--random-rotate));
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
}`,
      javascript: `function splitText() {
  const textElement = document.querySelector('.split-text');
  const text = textElement.textContent;
  textElement.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\\u00A0' : char;
    span.className = 'letter';

    const randomX = (Math.random() - 0.5) * 800;
    const randomY = (Math.random() - 0.5) * 600;
    const randomRotate = (Math.random() - 0.5) * 720;

    span.style.setProperty('--random-x', randomX + 'px');
    span.style.setProperty('--random-y', randomY + 'px');
    span.style.setProperty('--random-rotate', randomRotate + 'deg');
    span.style.animationDelay = (index * 0.1) + 's';

    textElement.appendChild(span);
  });
}

splitText();

setInterval(() => {
  splitText();
}, 3000);`,
      framework: 'vanilla'
    },
    tags: ['split', 'fly-in', 'letters', 'random', 'directions'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T18:20:00Z',
    updatedAt: '2024-01-15T18:20:00Z'
  },
  {
    id: 'explosion-reveal',
    title: 'Explosion Reveal',
    description: 'Text appears as if it bursts out from particles converging at center',
    category: 'text-animations',
    prompt: 'Make text appear as if it bursts out from particles converging at the center.',
    code: {
      html: `<div class="explosion-demo">
  <h2 class="explosion-text">Explosion Reveal</h2>
</div>`,
      css: `.explosion-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #ff6b6b, #ee5a52, #ff4757);
  overflow: hidden;
}

.explosion-text {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: white;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.explosion-text .letter {
  display: inline-block;
  opacity: 0;
  animation: explode-in 1.5s ease-out forwards;
}

@keyframes explode-in {
  0% {
    opacity: 0;
    transform: scale(0) translateX(var(--center-x)) translateY(var(--center-y));
  }
  50% {
    opacity: 1;
    transform: scale(1.3) translateX(0) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateX(0) translateY(0);
  }
}`,
      javascript: `function explodeText() {
  const textElement = document.querySelector('.explosion-text');
  const text = textElement.textContent;
  const rect = textElement.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  textElement.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\\u00A0' : char;
    span.className = 'letter';

    const letterWidth = 20;
    const letterX = index * letterWidth - (text.length * letterWidth) / 2;

    span.style.setProperty('--center-x', (centerX - letterX) + 'px');
    span.style.setProperty('--center-y', centerY + 'px');
    span.style.animationDelay = (index * 0.05) + 's';

    textElement.appendChild(span);
  });
}

explodeText();

setInterval(() => {
  explodeText();
}, 4000);`,
      framework: 'vanilla'
    },
    tags: ['explosion', 'burst', 'particles', 'center', 'reveal'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T18:25:00Z',
    updatedAt: '2024-01-15T18:25:00Z'
  },
  {
    id: 'underline-sweep',
    title: 'Underline Sweep',
    description: 'A line sweeps under the text as it appears',
    category: 'text-animations',
    prompt: 'Create an animation where a line sweeps under the text as it appears.',
    code: {
      html: `<div class="underline-demo">
  <h2 class="sweep-text">Underline Sweep ✏️</h2>
</div>`,
      css: `.underline-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sweep-text {
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: black;
  position: relative;
  overflow: hidden;
  animation: text-appear 1s ease-out;
}

.sweep-text::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ffdd59, #ff6b9d, #c44cf1);
  transform: translateX(-100%);
  animation: sweep 2s ease-in-out infinite;
}

@keyframes text-appear {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes sweep {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}`,
      framework: 'vanilla'
    },
    tags: ['underline', 'sweep', 'line', 'gradient', 'continuous'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T18:30:00Z',
    updatedAt: '2024-01-15T18:30:00Z'
  },
  {
    id: 'liquid-fill',
    title: 'Liquid Fill',
    description: 'Text fills up with a liquid wave effect inside the letters',
    category: 'text-animations',
    prompt: 'Animate text filling up with a liquid wave effect inside the letters.',
    code: {
      html: `<div class="liquid-demo">
  <h2 class="liquid-text">Liquid Fill 🌊</h2>
</div>`,
      css: `.liquid-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.liquid-text {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: transparent;
  background: linear-gradient(0deg, #00d4ff 0%, #00d4ff 50%, transparent 50%, transparent 100%);
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 100% 200%;
  animation: liquid-fill 3s ease-in-out infinite;
  position: relative;
}

.liquid-text::before {
  content: 'Liquid Fill 🌊';
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.2);
  z-index: -1;
}

@keyframes liquid-fill {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}`,
      framework: 'vanilla'
    },
    tags: ['liquid', 'fill', 'wave', 'water', 'gradient'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-15T18:35:00Z',
    updatedAt: '2024-01-15T18:35:00Z'
  }
  ,
  {
    id: 'underline-slide',
    title: 'Underline Slide',
    description: 'Animate an underline that slides in from left to right when hovering over text.',
    category: 'hover-effects',
    prompt: 'Animate an underline that slides in from left to right when hovering over text.',
    code: {
      html: `<a href="#" class="underline-slide">Hover me</a>`,
      css: `.underline-slide {
  position: relative;
  color: #111827;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.underline-slide::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  height: 2px;
  width: 100%;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 250ms ease;
}

.underline-slide:hover::after {
  transform: scaleX(1);
}`,
      framework: 'vanilla'
    },
    tags: ['underline', 'hover', 'text', 'slide'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:00:00Z',
    updatedAt: '2024-01-16T09:00:00Z'
  },
  {
    id: 'glow-outline-hover',
    title: 'Glow Outline',
    description: 'Card gets a pulsing glowing outline on hover.',
    category: 'hover-effects',
    prompt: 'Create a hover effect where the card element gets a glowing outline that pulses.',
    code: {
      html: `<div class="glow-outline-card">Hover me</div>`,
      css: `.glow-outline-card {
  width: 260px;
  height: 140px;
  border-radius: 14px;
  background: #111827;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: box-shadow 250ms ease;
}

.glow-outline-card:hover {
  box-shadow: 0 0 0 3px rgba(59,130,246,0.5), 0 0 25px rgba(59,130,246,0.6);
  animation: glow-pulse-outline 1.6s ease-in-out infinite;
}

@keyframes glow-pulse-outline {
  0%, 100% { box-shadow: 0 0 0 3px rgba(59,130,246,0.4), 0 0 15px rgba(59,130,246,0.5); }
  50% { box-shadow: 0 0 0 6px rgba(59,130,246,0.3), 0 0 35px rgba(59,130,246,0.7); }
}`,
      framework: 'vanilla'
    },
    tags: ['glow', 'outline', 'hover', 'pulse'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:10:00Z',
    updatedAt: '2024-01-16T09:10:00Z'
  },
  {
    id: 'border-morph-hover',
    title: 'Border Morph',
    description: 'Button border radius morphs from square to rounded on hover.',
    category: 'hover-effects',
    prompt: 'Make a button whose border radius morphs from square to rounded on hover.',
    code: {
      html: `<button class="border-morph-btn">Hover Button</button>`,
      css: `.border-morph-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  transition: border-radius 300ms ease, transform 200ms ease;
}

.border-morph-btn:hover {
  border-radius: 28px;
  transform: translateY(-2px);
}`,
      framework: 'vanilla'
    },
    tags: ['border', 'morph', 'button', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:12:00Z',
    updatedAt: '2024-01-16T09:12:00Z'
  },
  {
    id: 'ripple-hover',
    title: 'Ripple Hover',
    description: 'Ripple expands from cursor position when hovering.',
    category: 'cursor-interactions',
    prompt: 'Add a ripple animation that expands from the cursor position when hovering.',
    code: {
      html: `<button class="ripple-btn">Hover ripple</button>`,
      css: `.ripple-btn {
  position: relative;
  overflow: hidden;
  background: #111827;
  color: #fff;
  border: 0;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
}

.ripple-btn::after {
  content: '';
  position: absolute;
  left: var(--rx, 50%);
  top: var(--ry, 50%);
  width: 0;
  height: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.2) 40%, transparent 70%);
  transition: width 400ms ease, height 400ms ease, opacity 600ms ease;
  opacity: 0;
}

.ripple-btn:hover::after {
  width: 240px;
  height: 240px;
  opacity: 1;
}`,
      javascript: `document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--rx', (e.clientX - rect.left) + 'px');
    btn.style.setProperty('--ry', (e.clientY - rect.top) + 'px');
  });
});`,
      framework: 'vanilla'
    },
    tags: ['ripple', 'hover', 'cursor', 'button'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:15:00Z',
    updatedAt: '2024-01-16T09:15:00Z'
  },
  {
    id: 'floating-lift-hover',
    title: 'Floating Lift',
    description: 'Card lifts upward with a soft shadow when hovered.',
    category: 'hover-effects',
    prompt: 'Animate a card so it lifts upward with a shadow when hovered.',
    code: {
      html: `<div class="lift-card">Hover me</div>`,
      css: `.lift-card {
  width: 240px;
  height: 140px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.lift-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0,0,0,0.15);
}`,
      framework: 'vanilla'
    },
    tags: ['lift', 'shadow', 'card', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:18:00Z',
    updatedAt: '2024-01-16T09:18:00Z'
  },
  {
    id: 'text-glow-hover',
    title: 'Text Glow',
    description: 'Text glows with a neon-like effect on hover.',
    category: 'hover-effects',
    prompt: 'Make text glow with a neon effect when hovered.',
    code: {
      html: `<span class="text-glow">Hover text</span>`,
      css: `.text-glow {
  font-weight: 700;
  color: #e5e7eb;
  transition: text-shadow 250ms ease, color 250ms ease;
}

.text-glow:hover {
  color: #ffffff;
  text-shadow: 0 0 6px #60a5fa, 0 0 14px #3b82f6, 0 0 30px #2563eb;
}`,
      framework: 'vanilla'
    },
    tags: ['text', 'glow', 'neon', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:25:00Z',
    updatedAt: '2024-01-16T09:25:00Z'
  },
  {
    id: 'icon-spin-hover',
    title: 'Icon Spin',
    description: 'Icon spins 360° on hover.',
    category: 'hover-effects',
    prompt: 'Animate an icon spinning 360° when hovered.',
    code: {
      html: `<div class="icon-spin" aria-hidden="true">↻</div>`,
      css: `.icon-spin {
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #111827;
  color: #fff;
  transition: transform 500ms ease;
}

.icon-spin:hover {
  transform: rotate(360deg);
}`,
      framework: 'vanilla'
    },
    tags: ['icon', 'spin', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:28:00Z',
    updatedAt: '2024-01-16T09:28:00Z'
  },
  {
    id: 'blur-to-sharp-hover',
    title: 'Blur to Sharp',
    description: 'Text is blurred by default and becomes sharp on hover.',
    category: 'hover-effects',
    prompt: 'Create a hover effect where text is blurred by default and becomes sharp on hover.',
    code: {
      html: `<span class="blur-sharp">Hover to focus</span>`,
      css: `.blur-sharp {
  filter: blur(2px);
  transition: filter 250ms ease;
}

.blur-sharp:hover {
  filter: blur(0px);
}`,
      framework: 'vanilla'
    },
    tags: ['blur', 'sharp', 'text', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:30:00Z',
    updatedAt: '2024-01-16T09:30:00Z'
  },
  {
    id: 'border-expand-hover',
    title: 'Border Expand',
    description: 'Borders animate outward from center of a button on hover.',
    category: 'hover-effects',
    prompt: 'Make a hover effect where borders animate outward from the center of a button.',
    code: {
      html: `<button class="border-expand-btn">Hover Border</button>`,
      css: `.border-expand-btn {
  position: relative;
  background: transparent;
  color: #111827;
  border: 0;
  padding: 12px 24px;
  font-weight: 600;
}

.border-expand-btn::before,
.border-expand-btn::after {
  content: '';
  position: absolute;
  inset: 50% 50%;
  border: 2px solid #111827;
  border-radius: 10px;
  transition: inset 300ms ease;
}

.border-expand-btn:hover::before,
.border-expand-btn:hover::after {
  inset: 0;
}`,
      framework: 'vanilla'
    },
    tags: ['border', 'expand', 'button', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:33:00Z',
    updatedAt: '2024-01-16T09:33:00Z'
  },
  {
    id: 'shimmer-hover',
    title: 'Shimmer Effect',
    description: 'Shiny shimmer sweeps across a button on hover.',
    category: 'hover-effects',
    prompt: 'Animate a shiny shimmer sweeping across a button when hovered.',
    code: {
      html: `<button class="shimmer-btn">Shimmer</button>`,
      css: `.shimmer-btn {
  position: relative;
  overflow: hidden;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
}

.shimmer-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
  transform: skewX(-20deg);
  transition: left 700ms ease;
}

.shimmer-btn:hover::after {
  left: 200%;
}`,
      framework: 'vanilla'
    },
    tags: ['shimmer', 'button', 'hover', 'shine'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:36:00Z',
    updatedAt: '2024-01-16T09:36:00Z'
  },
  {
    id: 'background-fade-hover',
    title: 'Background Fade',
    description: 'Background image darkens and text appears over it on hover.',
    category: 'hover-effects',
    prompt: 'Make a hover effect where the background image darkens and text appears over it.',
    code: {
      html: `<div class="bg-fade-card">
  <div class="bg-fade-content">Revealed text</div>
</div>`,
      css: `.bg-fade-card {
  width: 280px;
  height: 160px;
  border-radius: 12px;
  background-image: url('https://picsum.photos/400/300');
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.bg-fade-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.0);
  transition: background 250ms ease;
}

.bg-fade-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  opacity: 0;
  transition: opacity 250ms ease;
}

.bg-fade-card:hover::before { background: rgba(0,0,0,0.45); }
.bg-fade-card:hover .bg-fade-content { opacity: 1; }`,
      framework: 'vanilla'
    },
    tags: ['background', 'fade', 'overlay', 'hover'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:40:00Z',
    updatedAt: '2024-01-16T09:40:00Z'
  },
  {
    id: 'hover-shake',
    title: 'Hover Shake',
    description: 'Element shakes gently side to side once on hover.',
    category: 'hover-effects',
    prompt: 'Make a hover effect where the element shakes gently side to side once.',
    code: {
      html: `<button class="hover-shake-btn">Hover Shake</button>`,
      css: `.hover-shake-btn {
  background: #111827;
  color: #fff;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
}
.hover-shake-btn:hover {
  animation: shake 400ms ease;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-4px); }
  40% { transform: translateX(4px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(3px); }
}`,
      framework: 'vanilla'
    },
    tags: ['shake', 'hover', 'button', 'motion'],
    previewType: 'inline',
    isInteractive: true,
    createdAt: '2024-01-16T09:48:00Z',
    updatedAt: '2024-01-16T09:48:00Z'
  }
  ,
  {
    id: 'aurora-text-fill',
    title: 'Aurora Text Fill',
    description: 'Subtle blue-to-light-blue gradient infill that shimmers like an aurora',
    category: 'text-animations',
    prompt: 'Create a subtle text infill animation using blue to light blue gradients that shimmer like an aurora.',
    code: {
      html: `<div class="aurora-demo"><h2 class="aurora-text">Aurora Text</h2></div>`,
      css: `.aurora-demo {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.aurora-text {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: radial-gradient(60% 60% at 50% 50%, #93c5fd 0%, rgba(147,197,253,0.6) 25%, rgba(59,130,246,0.5) 50%, rgba(30,58,138,0.7) 75%, #1e3a8a 100%),
              conic-gradient(from 0deg at 50% 50%, #1e3a8a, #3b82f6, #60a5fa, #93c5fd, #1e3a8a);
  background-size: 220% 220%, 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(59,130,246,0.25));
  animation: aurora-shift 9s ease-in-out infinite;
}

@keyframes aurora-shift {
  0%   { background-position: 20% 30%, 0% 50%;    filter: drop-shadow(0 2px 8px rgba(59,130,246,0.25)); }
  25%  { background-position: 80% 20%, 40% 70%;  filter: drop-shadow(0 3px 10px rgba(99,102,241,0.30)); }
  50%  { background-position: 60% 80%, 100% 40%; filter: drop-shadow(0 4px 14px rgba(99,102,241,0.35)); }
  75%  { background-position: 15% 70%, 60% 10%;  filter: drop-shadow(0 3px 10px rgba(59,130,246,0.28)); }
  100% { background-position: 20% 30%, 0% 50%;   filter: drop-shadow(0 2px 8px rgba(59,130,246,0.25)); }
}`,
      framework: 'vanilla'
    },
    tags: ['text', 'aurora', 'gradient', 'blue'],
    previewType: 'inline',
    isInteractive: false,
    createdAt: '2024-01-16T10:25:00Z',
    updatedAt: '2024-01-16T10:25:00Z'
  }
];

export const animationEffects: AnimationEffect[] = baseEffects;

export const categories: { value: string; label: string; count: number }[] = [
  { value: 'all', label: 'All Animations', count: animationEffects.length },
  { value: 'micro-interactions', label: 'Micro Interactions', count: animationEffects.filter(e => e.category === 'micro-interactions').length },
  { value: 'text-animations', label: 'Text Animations', count: animationEffects.filter(e => e.category === 'text-animations').length },
  { value: 'hover-effects', label: 'Hover Effects', count: animationEffects.filter(e => e.category === 'hover-effects').length },
  { value: 'loading-animations', label: 'Loading Animations', count: animationEffects.filter(e => e.category === 'loading-animations').length },
  { value: 'cursor-interactions', label: 'Cursor Interactions', count: animationEffects.filter(e => e.category === 'cursor-interactions').length },
  { value: 'background-effects', label: 'Background Effects', count: animationEffects.filter(e => e.category === 'background-effects').length },
  { value: 'scroll-effects', label: 'Scroll Effects', count: animationEffects.filter(e => e.category === 'scroll-effects').length },
  { value: 'page-transitions', label: 'Page Transitions', count: animationEffects.filter(e => e.category === 'page-transitions').length },
  { value: 'easter-eggs', label: 'Easter Eggs', count: animationEffects.filter(e => e.category === 'easter-eggs').length }
];