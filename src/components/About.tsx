import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/index';

const FACTS: [string, string][] = [
  ['Education', "BSc Psychology, Dalhousie University '26"],
  ['Based in', 'Halifax, Nova Scotia'],
  ['Focus', 'Event Management · Community · Marketing'],
  ['Languages', 'English · Hindi · Telugu'],
  ['Status', 'Open to new opportunities'],
];

export default function About(): JSX.Element {
  const skillsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;
    const tags = el.querySelectorAll<HTMLSpanElement>('.sk');
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        tags.forEach((t, i) => setTimeout(() => t.classList.add('vis'), i * 52));
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="full-bg" id="about" style={{ background: 'var(--bg)' }}>
      <section className="sec">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="lbl lbl-rust">About</span>
          <div className="about-grid">
            <div>
              <p className="about-lead">
                Curious about people.
                <br />
                Serious about craft.
              </p>
              <p className="about-body">
                A recent BSc Psychology graduate from Dalhousie University, based in Halifax, Nova
                Scotia. My background in human behaviour shapes how I approach every project, whether
                that is designing an event experience, writing campaign copy, or building community
                programming that actually lands.
              </p>
              <br />
              <p className="about-body">
                I am drawn to work at the intersection of people and strategy. The best events,
                campaigns, and communities share a common thread: they make people feel like they
                belong somewhere.
              </p>
              <div className="skills-wrap" ref={skillsRef}>
                {skills.map((s, i) => (
                  <span key={i} className="sk">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="fact-list">
              {FACTS.map(([l, v], i) => (
                <div key={i} className="fact">
                  <div className="fact-l">{l}</div>
                  <div className="fact-v">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
