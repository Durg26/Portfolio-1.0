import { useRef, useCallback } from 'react';

export interface MagneticHandlers<T extends HTMLElement = HTMLElement> {
  ref: React.MutableRefObject<T | null>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
}

export function useMagnetic<T extends HTMLElement = HTMLElement>(maxShift = 12): MagneticHandlers<T> {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / (rect.width / 2)) * maxShift;
      const dy = ((e.clientY - cy) / (rect.height / 2)) * maxShift;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      el.style.transition = 'transform 0.1s ease-out';
    },
    [maxShift]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
