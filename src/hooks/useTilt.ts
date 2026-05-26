import { useRef, useCallback } from 'react';

export interface TiltHandlers<T extends HTMLElement = HTMLDivElement> {
  ref: React.MutableRefObject<T | null>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
}

export function useTilt<T extends HTMLElement = HTMLDivElement>(maxDeg = 8): TiltHandlers<T> {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = ((e.clientY - cy) / (rect.height / 2)) * -maxDeg;
      const ry = ((e.clientX - cx) / (rect.width / 2)) * maxDeg;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
      el.style.boxShadow = `0 24px 52px rgba(28,25,23,.09)`;

      const highlight = el.querySelector<HTMLDivElement>('.tilt-highlight');
      if (highlight) {
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;
        highlight.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
        highlight.style.opacity = '1';
      }
    },
    [maxDeg]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    const highlight = el.querySelector<HTMLDivElement>('.tilt-highlight');
    if (highlight) highlight.style.opacity = '0';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
