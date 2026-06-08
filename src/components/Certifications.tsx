import { motion } from 'framer-motion';

const certs = [
  { name: 'Google Analytics 4', iss: 'Google', date: '2025' },
  { name: 'Google Ads Search', iss: 'Google', date: '2025' },
  { name: 'HubSpot Reporting', iss: 'HubSpot Academy', date: '2025' },
  { name: 'HubSpot Digital Advertising', iss: 'HubSpot Academy', date: '2025' },
];

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

export default function Certifications(): JSX.Element {
  return (
    <section id="certs" className="accentbg on-ink">
      <div className="sec">
        <div className="kick"><Spk />Credentials</div>
        <h2 className="htitle">Certifications</h2>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <motion.div key={i} className="cert sketch" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <svg className="cert-star" viewBox="0 0 40 40" fill="currentColor">
                <path d="M20 2l5 12 13 1-10 8 3 13-11-7-11 7 3-13-10-8 13-1Z"/>
              </svg>
              <div className="cert-name">{c.name}</div>
              <div className="cert-iss">{c.iss}</div>
              <div className="cert-date">{c.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
