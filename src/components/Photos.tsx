import { useRef, useState } from 'react';
import Placeholder from './Placeholder';
import Lightbox from './Lightbox';

const WIDTHS = [240, 340, 280, 260, 320, 240, 300, 340];

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

  const onUp = (): void => {
    isDragging.current = false;
    setDragging(false);
  };

  const onItemClick = (i: number): void => {
    setLightboxIndex(i);
  };

  return (
    <div id="photos" style={{ background: 'var(--sand)' }}>
      <div className="sec" style={{ paddingBottom: 24 }}>
        <span className="lbl lbl-rust">Photos</span>
        <h2 className="st">Moments</h2>
      </div>
      <div
        className={`dso${dragging ? ' dg' : ''}`}
        ref={scrollRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        <div className="ds">
          {WIDTHS.map((w, i) => (
            <div
              key={i}
              className="sp"
              style={{ width: w }}
              onClick={() => onItemClick(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo ${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onItemClick(i);
              }}
            >
              <Placeholder dark={false} label="Drop photo here" />
              <div className="ph-tint" />
            </div>
          ))}
        </div>
      </div>
      <p className="drag-hint" style={{ background: 'var(--sand)' }}>
        Drag to explore
      </p>
      {lightboxIndex !== null && (
        <Lightbox
          total={WIDTHS.length}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + WIDTHS.length) % WIDTHS.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % WIDTHS.length : 0
            )
          }
        />
      )}
    </div>
  );
}
