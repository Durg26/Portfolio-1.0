import { useEffect, useCallback } from 'react';

interface VideoModalProps {
  label: string;
  onClose: () => void;
}

export default function VideoModal({ label, onClose }: VideoModalProps): JSX.Element {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
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
    <div
      className="video-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          ×
        </button>
        <p className="video-modal-text">
          {label}
          <br />
          <span style={{ fontSize: 11, opacity: 0.5 }}>
            Video placeholder — drop your file or YouTube URL here
          </span>
        </p>
      </div>
    </div>
  );
}
