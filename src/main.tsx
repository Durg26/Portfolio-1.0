import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import App from './App';
import './index.css';

// Initialise Lenis smooth scroll
const lenis = new Lenis({
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
});

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      // SW registration failure is non-fatal
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio-1.0">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
