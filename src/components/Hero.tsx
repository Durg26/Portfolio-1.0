import { useRef, useEffect, useState } from 'react';
import { useParticles } from '../hooks/useParticles';

function HalifaxClock(): JSX.Element {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const tick = (): void => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-CA', {
        timeZone: 'America/Halifax',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatted + ' AST');
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <div className="hero-clock">{time}</div>;
}

export default function Hero(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  useParticles(canvasRef);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent): void => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 10;
      const ry = (e.clientY / window.innerHeight - 0.5) * 5;
      el.style.transform = `translate(${rx}px,${ry}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div id="hero" data-bg="dark">
      <canvas id="hc" ref={canvasRef} />
      <div className="hero-in">
        <div className="hero-ey">
          <span className="hero-d" />
          Halifax, NS · Open to opportunities
        </div>
        <h1 className="hero-name" ref={nameRef}>
          Abhinav
          <br />
          <span className="hero-sub">Durgavarjhula</span>
        </h1>
        <div className="hero-foot">
          <p className="hero-role">
            Psychology student at Dalhousie. Marketer, event builder, and founder
            — making things that genuinely connect with people.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0 }}>
            <div className="hero-scr">
              <div className="hero-scr-line" />
              Scroll to explore
            </div>
            <HalifaxClock />
          </div>
        </div>
      </div>
    </div>
  );
}
