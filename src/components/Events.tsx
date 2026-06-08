import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Doodle from './Doodle';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

const events = [
  { meta: '01 · August 2025', name: 'Dalhousie Orientation Week', desc: "Full ownership of promotional strategy, logistics, and on-site execution for Dalhousie's flagship Orientation Week, reaching thousands of incoming students.", slug: 'dalhousie-orientation-week', scene: 'party' },
  { meta: '02 · 2025', name: 'Impact Awards', desc: 'Planned and delivered the Impact Awards ceremony for Dalhousie Student Affairs, managing end-to-end production, communication, and on-the-day operations.', slug: 'impact-awards-2025', scene: 'mic' },
  { meta: '03 · 2023 – 2024', name: 'Science Society Events', desc: 'Led marketing and PR for 4+ Science Society events per semester, driving student engagement through social media strategy, campus partnerships, and cohesive visual branding.', slug: 'science-society-events', scene: 'glass' },
  { meta: '04 · October 2024', name: 'Event Tree Platform Launch', desc: 'Founded and launched Event Tree, a campus event discovery platform for Dalhousie students. Handled concept, UX design, promotion strategy, and rollout from the ground up.', slug: 'event-tree-launch', scene: 'bulb' },
];

export default function Events(): JSX.Element {
  return (
    <section id="events">
      <div className="sec">
        <div className="kick"><Spk />Events</div>
        <h2 className="htitle">Events I've managed</h2>
        <p className="lead-note">A curation of events I managed or was a part of.</p>
        <div className="cards2">
          {events.map((ev, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <Link to={`/event/${ev.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="ev sketch">
                  <div className="pic">
                    <Doodle scene={ev.scene} />
                  </div>
                  <div className="ev-body">
                    <div className="ev-meta">{ev.meta}</div>
                    <div className="ev-name">{ev.name}</div>
                    <p className="ev-desc">{ev.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
