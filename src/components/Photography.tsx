import { motion } from 'framer-motion';
import Doodle from './Doodle';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

const MEDIA = [
  { big: false, scene: 'mountains' },
  { big: false, scene: 'camera' },
  { big: false, scene: 'bloom' },
  { big: true, scene: 'sun' },
  { big: false, scene: 'heart' },
];

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
              <Doodle scene={m.scene} dark />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
