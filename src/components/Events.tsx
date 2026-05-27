import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventsData } from '../data/index';
import Placeholder from './Placeholder';

interface EventCardProps {
  name: string;
  date: string;
  desc: string;
  slug: string;
  index: number;
}

function EventCard({ name, date, desc, slug, index }: EventCardProps): JSX.Element {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -8;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 8;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
    el.style.boxShadow = '0 24px 52px rgba(28,25,23,.09)';
    const highlight = el.querySelector<HTMLDivElement>('.tilt-highlight');
    if (highlight) {
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      highlight.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
      highlight.style.opacity = '1';
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.boxShadow = '';
    const highlight = el.querySelector<HTMLDivElement>('.tilt-highlight');
    if (highlight) highlight.style.opacity = '0';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
    >
      <Link to={`/event/${slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div
          className="ev-card"
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="tilt-highlight" />
          <div className="ev-img">
            <Placeholder dark={false} label="Drop photo here" />
          </div>
          <div className="ev-body">
            <div className="ev-num">
              {String(index + 1).padStart(2, '0')} / {date}
            </div>
            <div className="ev-name">{name}</div>
            <p className="ev-desc">{desc}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Events(): JSX.Element {
  return (
    <div className="full-bg" id="events" style={{ background: 'var(--cream)' }}>
      <section className="sec">
        <span className="lbl lbl-rust">Events</span>
        <h2 className="st">Events I&apos;ve Managed</h2>
        <div className="ev-grid">
          {eventsData.map((e, i) => (
            <EventCard key={i} name={e.name} date={e.date} desc={e.desc} slug={e.slug} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
