import { motion } from 'framer-motion';
import { designs } from '../data/index';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

export default function Design(): JSX.Element {
  return (
    <section id="design">
      <div className="sec">
        <div className="kick"><Spk />Design</div>
        <h2 className="htitle">Design &amp; Canva</h2>
        <p className="lead-note">Posters, social graphics &amp; brand bits.</p>
        <div className="design-grid">
          {designs.map((d, i) => (
            <motion.div key={i} className="design-card sketch" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}>
              <div className="design-img">
                {d.src ? (
                  <img src={d.src} alt={d.alt} />
                ) : (
                  <div className="design-ph">Add design</div>
                )}
              </div>
              <div className="design-meta">
                <span className="design-label">{d.label}</span>
                <span className="design-client">{d.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
