import { useState } from 'react';
import Placeholder from './Placeholder';
import Lightbox from './Lightbox';
import VideoModal from './VideoModal';

const PHOTO_COUNT = 6;
const VIDEO_LABELS = ['Film 01', 'Film 02', 'Film 03'];

export default function Media(): JSX.Element {
  const [tab, setTab] = useState<'photo' | 'video'>('photo');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoIndex, setVideoIndex] = useState<number | null>(null);

  return (
    <div className="full-bg" id="media" style={{ background: 'var(--dark)' }} data-bg="dark">
      <section className="sec">
        <span className="lbl lbl-dim">Visual Work</span>
        <h2 className="st lh">Photography and Videography</h2>
        <div className="m-tabs">
          <button
            className={`m-tab${tab === 'photo' ? ' active' : ''}`}
            onClick={() => setTab('photo')}
          >
            Photography
          </button>
          <button
            className={`m-tab${tab === 'video' ? ' active' : ''}`}
            onClick={() => setTab('video')}
          >
            Videography
          </button>
        </div>

        {tab === 'photo' ? (
          <div className="photo-grid">
            {Array.from({ length: PHOTO_COUNT }, (_, i) => (
              <div
                key={i}
                className="pg-it"
                role="button"
                tabIndex={0}
                aria-label={`Open photo ${i + 1}`}
                onClick={() => setLightboxIndex(i)}
                onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(i); }}
                style={{ cursor: 'pointer' }}
              >
                <Placeholder dark />
                <div className="ph-tint" />
              </div>
            ))}
          </div>
        ) : (
          <div className="vid-grid">
            {VIDEO_LABELS.map((lbl, i) => (
              <div
                key={i}
                className="vc"
                role="button"
                tabIndex={0}
                aria-label={`Play ${lbl}`}
                onClick={() => setVideoIndex(i)}
                onKeyDown={(e) => { if (e.key === 'Enter') setVideoIndex(i); }}
                style={{ cursor: 'pointer' }}
              >
                <div className="play-c">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="white" style={{ marginLeft: 2 }}>
                    <path d="M0 0L13 7.5L0 15V0Z" />
                  </svg>
                </div>
                <div className="vid-l">{lbl}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          total={PHOTO_COUNT}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + PHOTO_COUNT) % PHOTO_COUNT : 0))}
          onNext={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % PHOTO_COUNT : 0))}
        />
      )}

      {videoIndex !== null && (
        <VideoModal
          label={VIDEO_LABELS[videoIndex]}
          onClose={() => setVideoIndex(null)}
        />
      )}
    </div>
  );
}
