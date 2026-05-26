import { motion } from 'framer-motion';
import { certs } from '../data/index';

export default function Certifications(): JSX.Element {
  return (
    <div
      className="full-bg"
      id="certifications"
      style={{ background: 'var(--forest)' }}
    >
      <section className="sec">
        <span className="lbl lbl-forest">Credentials</span>
        <h2 className="st fh">Certifications</h2>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              className="cert-cell"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.07 }}
            >
              <div className="cert-n">{String(i + 1).padStart(2, '0')}</div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-iss">{c.iss}</div>
              <div className="cert-date">{c.date}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
