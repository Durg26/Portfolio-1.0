import { useEffect, useRef, useState } from 'react';

export default function LoadingScreen(): JSX.Element {
  const barRef = useRef<HTMLDivElement>(null);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    // Start filling the bar almost immediately
    const t1 = setTimeout(() => {
      if (barRef.current) {
        barRef.current.style.width = '100%';
      }
    }, 60);

    // Fade out just before the parent removes us
    const t2 = setTimeout(() => {
      setFadeOut(true);
    }, 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className={`loading-screen${fadeOut ? ' fade-out' : ''}`}>
      <div className="loading-name">Abhinav Durgavarjhula</div>
      <div className="loading-bar-wrap">
        <div className="loading-bar" ref={barRef} />
      </div>
    </div>
  );
}
