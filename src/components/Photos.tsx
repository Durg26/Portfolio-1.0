import { useRef, useState } from 'react';
import { photos } from '../data/index';
import Placeholder from './Placeholder';
import Lightbox from './Lightbox';

export default function Photos(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onDown = (e: React.MouseEvent | React.TouchEvent): void => {
    isDragging.current = true;
    setDragging(true);
    const px = 'touches' in e ? e.touches[0].pageX : e.pageX;
    startX.current = px - (scrollRef.current?.getBoundingClientRect().left ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent): void => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const px = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = px - (scrollRef.current.getBoundingClientRect().left ?? 0) - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk * 1.4;
  };

  const onUp = (): void => { isDragging.current = false; setDragging(false); };

  return (
    <div id="photos" style={{ background: 'var(--sand)' }}>
      <div className="sec" style={{ paddingBottom: 24 }}>
        <span className="lbl lbl-rust">Photos</span>
        <h2 className="st">Moments</h2>
      </div>
      <div className={`dso${dragging ? ' dg' : ''}`} ref={scrollRef}
        onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
        onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}>
        <div className="ds">
          {photos.map((photo, i) => (
            <div key={i} className="sp" style={{ width: photo.width }}
              onClick={() => setLightboxIndex(i)} role="button" tabIndex={0}
              aria-label={photo.alt || `Photo ${i + 1}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(i); }}>
              {photo.src ? (
                <img src={photo.src} alt={photo.alt || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', userSelect: 'none', pointerEvents: 'none' }} draggable={false} />
              ) : (
                <Placeholder dark={false} label="Add photo in data/index.ts" />
              )}
              <div className="ph-tint" />
            </div>
          ))}
        </div>
      </div>
      <p className="drag-hint" style={{ background: 'var(--sand)' }}>Drag to explore</p>
      {lightboxIndex !== null && (
        <Lightbox total={photos.length} index={lightboxIndex} onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => (p !== null ? (p - 1 + photos.length) % photos.length : 0))}
          onNext={() => setLightboxIndex((p) => (p !== null ? (p + 1) % photos.length : 0))} />
      )}
    </div>
  );
}
