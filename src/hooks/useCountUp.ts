import { useEffect, useRef } from 'react';

export function useCountUp(to: number, suffix = ''): React.MutableRefObject<HTMLSpanElement | null> {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const end = to;
        let cur = 0;
        const step = Math.max(1, Math.ceil(end / 70));
        const t = setInterval(() => {
          cur = Math.min(cur + step, end);
          if (el) el.textContent = cur + suffix;
          if (cur >= end) clearInterval(t);
        }, 18);
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, suffix]);

  return ref;
}
