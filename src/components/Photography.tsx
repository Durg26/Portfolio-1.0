import { useState } from 'react';
import { motion } from 'framer-motion';
import Doodle from './Doodle';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

const base = import.meta.env.BASE_URL;

const MEDIA = [
  { big: false, src: `${base}photos/photo-1.jpg`, scene: 'mountains' },
  { big: false, src: `${base}photos/photo-2.jpg`, scene: 'camera' },
  { big: false, src: `${base}photos/photo-3.jpg`, scene: 'bloom' },
  { big: true,  src: `${base}photos/photo-4.jpg`, scene: 'sun' },
  { big: false, src: '', scene: 'heart' },
];

function PhotoImg({ src, scene }: { src: string; scene: string }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) return <Doodle scene={scene} dark />;
  return <img src={src} alt="" onError={() => setErrored(true)} />;
}

export default function Photography(): JSX.Element {
  return (
    <section id="media" className="dark on-ink">
      <div className="sec">
        <div className="kick"><Spk />Visual work</div>
        <h2 className="htitle">Photography</h2>
        <p className="lead-note">Shot around Halifax and beyond.</p>
        <motion.div className="pgrid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
          {MEDIA.map((m, i) => (
            <div key={i} className={`pgrid-item${m.big ? ' big' : ''}`}>
              <PhotoImg src={m.src} scene={m.scene} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
