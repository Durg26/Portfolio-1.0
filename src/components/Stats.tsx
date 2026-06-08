import { motion } from 'framer-motion';

const CircleSvg = () => (
  <svg className="circ" viewBox="0 0 200 110" preserveAspectRatio="none" fill="none">
    <path d="M100 8C158 6 194 28 194 56c0 30-48 48-94 48C44 104 6 82 6 54 6 28 52 9 104 8" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
  </svg>
);

const stats = [
  { n: '19K+', label: 'Students reached', decoration: 'circle' },
  { n: '5', label: 'Roles held', decoration: 'bar' },
  { n: '1K+', label: 'Instagram followers', decoration: 'circle' },
  { n: '4', label: 'Certifications', decoration: 'bar' },
];

export default function Stats(): JSX.Element {
  return (
    <div className="stats" id="stats">
      {stats.map((s, i) => (
        <motion.div key={i} className="stat" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
          <div className="nwrap">
            <span className="n">{s.n}</span>
            {s.decoration === 'circle' ? <CircleSvg /> : <span className="bar"/>}
          </div>
          <div className="l">{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
