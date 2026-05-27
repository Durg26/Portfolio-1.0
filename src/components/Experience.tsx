import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/index';

const ICONS: Record<string, JSX.Element> = {
  social: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11.5" cy="2.5" r="1.5"/>
      <circle cx="2.5" cy="7" r="1.5"/>
      <circle cx="11.5" cy="11.5" r="1.5"/>
      <line x1="4" y1="6.2" x2="10" y2="3.5"/>
      <line x1="4" y1="7.8" x2="10" y2="10.5"/>
    </svg>
  ),
  events: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="1" y="3" width="12" height="10" rx="1.5"/>
      <line x1="4" y1="1" x2="4" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="1" y1="6.5" x2="13" y2="6.5"/>
    </svg>
  ),
  founder: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 1l1.5 3.2 3.5.5-2.5 2.45.59 3.46L7 8.9l-3.09 1.71.59-3.46L2 4.7l3.5-.5L7 1z"/>
    </svg>
  ),
  research: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="5.8" cy="5.8" r="4.3"/>
      <line x1="9.2" y1="9.2" x2="13" y2="13"/>
    </svg>
  ),
  marketing: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6h2.5v4H2V6z"/>
      <path d="M4.5 6L12 3.5v7L4.5 8V6z"/>
      <path d="M12 7c.9.2 1.5.6 1.5 1.2S12.9 9.5 12 9.7"/>
    </svg>
  ),
};

export default function Experience(): JSX.Element {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('drawn'); obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el.parentElement!);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="full-bg" id="experience" style={{ background: 'var(--dark)' }} data-bg="dark">
      <section className="sec">
        <span className="lbl lbl-dim">Experience</span>
        <h2 className="st lh">Work History</h2>
        <div className="exp-timeline">
          <div className="exp-tl-line" ref={lineRef} />
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              className="exp-entry"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
            >
              <div className="exp-dot-col">
                <div
                  className={`exp-dot${i === 0 ? ' exp-dot-live' : ''}`}
                  style={{ '--ea': e.color } as React.CSSProperties}
                />
              </div>
              <div
                className="exp-card"
                style={{ '--ea': e.color } as React.CSSProperties}
              >
                <div className="exp-badge">
                  <span className="exp-badge-icon">{ICONS[e.typeKey]}</span>
                  {e.type}
                </div>
                <h3 className="exp-title">{e.role}</h3>
                <div className="exp-co2">{e.co}</div>
                <div className="exp-per2">{e.per}</div>
                <div className="exp-hl">{e.highlight}</div>
                <p className="exp-body">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
