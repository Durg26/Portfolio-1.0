import { useEffect, useRef } from 'react';

export default function ScrollProgress(): JSX.Element {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = (): void => {
      const el = barRef.current;
      if (!el) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = pct + '%';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress"
      style={{ width: '0%', height: '2px', position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'var(--rust)', pointerEvents: 'none' }}
    />
  );
}
