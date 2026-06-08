import { useRef, useState } from 'react';
import Doodle from './Doodle';

const BASE = import.meta.env.BASE_URL;

const polaroids: { w: number; h: number; cap: string; scene: string; src?: string }[] = [
  { w: 230, h: 280, cap: 'on the job', scene: 'camera', src: `${BASE}photos/photo-1.jpg` },
  { w: 300, h: 230, cap: 'student mentorship', scene: 'sun', src: `${BASE}photos/photo-2.jpg` },
  { w: 240, h: 280, cap: 'team pic', scene: 'cat', src: `${BASE}photos/photo-3.jpg` },
  { w: 260, h: 230, cap: 'impact awards', scene: 'bloom', src: `${BASE}photos/photo-4.jpg` },
  { w: 230, h: 280, cap: 'the crew', scene: 'heart', src: `${BASE}photos/photo-5.jpg` },
  { w: 320, h: 230, cap: 'concert planning', scene: 'mountains' },
  { w: 230, h: 280, cap: 'show night', scene: 'star' },
];

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

export default function Photos(): JSX.Element {
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onDown = (e: React.PointerEvent) => {
    isDragging.current = true; setDragging(true);
    startX.current = e.clientX - (stripRef.current?.getBoundingClientRect().left ?? 0);
    scrollLeft.current = stripRef.current?.scrollLeft ?? 0;
    stripRef.current?.setPointerCapture(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !stripRef.current) return;
    const walk = e.clientX - (stripRef.current.getBoundingClientRect().left ?? 0) - startX.current;
    stripRef.current.scrollLeft = scrollLeft.current - walk * 1.4;
  };
  const onUp = () => { isDragging.current = false; setDragging(false); };

  return (
    <section id="photos">
      <div className="photos-head">
        <div className="kick"><Spk />Photos</div>
        <h2 className="htitle">Moments</h2>
      </div>
      <div className={`strip${dragging ? ' dragging' : ''}`} ref={stripRef}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}>
        <div className="strip-in">
          {polaroids.map((p, i) => (
            <div key={i} className="polaroid">
              <span className="tape"/>
              <div className="photo-placeholder" style={{ width: p.w, height: p.h }}>
                {p.src ? (
                  <img src={p.src} alt={p.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  <Doodle scene={p.scene} />
                )}
              </div>
              <span className="cap">{p.cap}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="drag-hint">
        <svg viewBox="0 0 40 14" fill="none">
          <path d="M2 7h32M28 2l8 5-8 5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Drag to explore
      </div>
    </section>
  );
}
