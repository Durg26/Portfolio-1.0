import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/index';

const FACTS: [string, string][] = [
  ['Education', 'BA Psychology, Minor in Management, Dalhousie University (Apr 2026)'],
  ['Also', 'Study Abroad, National University of Singapore (2024 to 2025)'],
  ['Based in', 'Halifax, Nova Scotia'],
  ['Focus', 'Marketing · Events · Community Engagement'],
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
                BA Psychology student at Dalhousie, graduating April 2026. Minoring in Management
                with a Certificate in Innovation and Entrepreneurship, and spent a year studying at
                the National University of Singapore, which changed how I think about people,
                culture, and what makes ideas actually travel.
              </p>
              <br />
              <p className="about-body">
                My work sits at the corner of marketing, community, and curiosity. Running campaigns
                for 19,000+ students, growing a brand's Instagram to 1K+ with no paid budget, or
                building a platform from nothing. What ties it together is a background in
                psychology and a habit of asking why before how.
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
