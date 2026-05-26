import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/index';

export default function Experience(): JSX.Element {
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('drawn');
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(parent);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="full-bg" id="experience" style={{ background: 'var(--dark)' }} data-bg="dark">
      <section className="sec">
        <span className="lbl lbl-dim">Experience</span>
        <h2 className="st lh">Work History</h2>
        <div className="exp-wrap">
          <div className="exp-line" ref={lineRef} />
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              className="exp-item"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
            >
              <div className="exp-per">{e.per}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-co">{e.co}</div>
                <p className="exp-desc">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
