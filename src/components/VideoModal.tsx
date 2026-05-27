import { useEffect, useCallback } from 'react';

interface VideoModalProps {
  label: string;
  youtubeId?: string;
  onClose: () => void;
}

export default function VideoModal({ label, youtubeId, onClose }: VideoModalProps): JSX.Element {
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); },
    [onClose]
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
    <div className="video-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Video player">
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">×</button>
        {youtubeId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={label}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{ border: 'none' }}
          />
        ) : (
          <p className="video-modal-text">
            {label}
            <br />
            <span style={{ fontSize: 11, opacity: 0.5 }}>
              Add a YouTube video ID in src/data/index.ts → videos array
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
