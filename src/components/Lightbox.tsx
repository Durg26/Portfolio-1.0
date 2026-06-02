import { useEffect, useCallback } from 'react';
import Placeholder from './Placeholder';

interface LightboxProps {
  total: number;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  srcs?: string[];
  alts?: string[];
}

export default function Lightbox({ total, index, onClose, onPrev, onNext, srcs, alts }: LightboxProps): JSX.Element {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
        ×
      </button>
      {total > 1 && (
        <>
          <button
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </>
      )}
      <div
        className="lightbox-inner"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(720px, 92vw)', height: 'min(600px, 85vh)' }}
      >
        {srcs && srcs[index] ? (
          <img
            src={srcs[index]}
            alt={alts?.[index] || `Photo ${index + 1} of ${total}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
          />
        ) : (
          <Placeholder dark label={`Photo ${index + 1} of ${total}`} />
        )}
      </div>
    </div>
  );
}
