import { useState } from 'react';
import { videos, designs } from '../data/index';
import Placeholder from './Placeholder';
import Lightbox from './Lightbox';
import VideoModal from './VideoModal';

const PHOTO_COUNT = 6;

export default function Media(): JSX.Element {
  const [tab, setTab] = useState<'photo' | 'video' | 'design'>('photo');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [designLightboxIndex, setDesignLightboxIndex] = useState<number | null>(null);
  const [videoIndex, setVideoIndex] = useState<number | null>(null);

  return (
    <div className="full-bg" id="media" style={{ background: 'var(--dark)' }} data-bg="dark">
      <section className="sec">
        <span className="lbl lbl-dim">Visual Work</span>
        <h2 className="st lh">Photography, Videography &amp; Design</h2>
        <div className="m-tabs">
          <button className={`m-tab${tab === 'photo' ? ' active' : ''}`} onClick={() => setTab('photo')}>Photography</button>
          <button className={`m-tab${tab === 'video' ? ' active' : ''}`} onClick={() => setTab('video')}>Videography</button>
          <button className={`m-tab${tab === 'design' ? ' active' : ''}`} onClick={() => setTab('design')}>Design Work</button>
        </div>
        {tab === 'photo' && (
          <div className="photo-grid">
            {Array.from({ length: PHOTO_COUNT }, (_, i) => (
              <div key={i} className="pg-it" role="button" tabIndex={0} aria-label={`Open photo ${i + 1}`}
                onClick={() => setLightboxIndex(i)} onKeyDown={(e) => { if (e.key === 'Enter') setLightboxIndex(i); }}
                style={{ cursor: 'pointer' }}>
                <Placeholder dark />
                <div className="ph-tint" />
              </div>
            ))}
          </div>
        )}
        {tab === 'video' && (
          <div className="vid-grid">
            {videos.map((v, i) => (
              <div key={i} className="vc" role="button" tabIndex={0} aria-label={`Play ${v.label}`}
                onClick={() => setVideoIndex(i)} onKeyDown={(e) => { if (e.key === 'Enter') setVideoIndex(i); }}
                style={{ cursor: 'pointer' }}>
                <div className="play-c">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="white" style={{ marginLeft: 2 }}>
                    <path d="M0 0L13 7.5L0 15V0Z" />
                  </svg>
                </div>
                <div className="vid-l">{v.label}</div>
              </div>
            ))}
          </div>
        )}
        {tab === 'design' && (
          <div className="design-grid">
            {designs.map((d, i) => (
              <div key={i} className="dg-it" role="button" tabIndex={0} aria-label={`View ${d.label}`}
                onClick={() => setDesignLightboxIndex(i)}
                onKeyDown={(e) => { if (e.key === 'Enter') setDesignLightboxIndex(i); }}
                style={{ cursor: 'pointer' }}>
                <div className="dg-img">
                  <img src={d.src} alt={d.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                  <div className="ph-tint" />
                </div>
                <div className="dg-meta">
                  <span className="dg-label">{d.label}</span>
                  <span className="dg-client">{d.client}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {lightboxIndex !== null && (
        <Lightbox total={PHOTO_COUNT} index={lightboxIndex} onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((p) => (p !== null ? (p - 1 + PHOTO_COUNT) % PHOTO_COUNT : 0))}
          onNext={() => setLightboxIndex((p) => (p !== null ? (p + 1) % PHOTO_COUNT : 0))} />
      )}
      {designLightboxIndex !== null && (
        <Lightbox total={designs.length} index={designLightboxIndex}
          onClose={() => setDesignLightboxIndex(null)}
          onPrev={() => setDesignLightboxIndex((p) => (p !== null ? (p - 1 + designs.length) % designs.length : 0))}
          onNext={() => setDesignLightboxIndex((p) => (p !== null ? (p + 1) % designs.length : 0))}
          srcs={designs.map((d) => d.src)}
          alts={designs.map((d) => d.alt)} />
      )}
      {videoIndex !== null && (
        <VideoModal label={videos[videoIndex].label} youtubeId={videos[videoIndex].youtubeId || undefined}
          onClose={() => setVideoIndex(null)} />
      )}
    </div>
  );
}
