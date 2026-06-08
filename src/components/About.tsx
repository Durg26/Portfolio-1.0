import { motion } from 'framer-motion';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

const chips = ['Social Media Strategy','Event Management','Content Creation','Marketing & PR','Community Engagement','Canva & Figma','Adobe Suite','HubSpot','Data Analysis','Research','Branding','Psychology'];

const facts = [
  { l: 'Education', v: 'BSc Psychology, Minor in Management — Dalhousie University (Apr 2026)' },
  { l: 'Also', v: 'Study Abroad, National University of Singapore (2024–2025)' },
  { l: 'Based in', v: 'Halifax, Nova Scotia' },
  { l: 'Focus', v: 'Marketing · Events · Community Engagement' },
  { l: 'Languages', v: 'English · Hindi · Telugu' },
  { l: 'Status', v: 'Open to new opportunities' },
];

export default function About(): JSX.Element {
  return (
    <section id="about">
      <div className="sec">
        <div className="kick"><Spk />About me</div>
        <div className="about-grid">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <h2 className="about-lead">Curious about <span className="hl">people.</span><br/>Serious about craft.</h2>
            <p className="about-body">BSc Psychology student at Dalhousie, graduating April 2026. Minoring in Management with a Certificate in Innovation and Entrepreneurship, and I spent a year studying at the National University of Singapore — which changed how I think about people, culture, and what makes ideas actually travel.</p>
            <p className="about-body">My work sits at the corner of marketing, community, and curiosity — running campaigns for 19,000+ students, growing a brand's Instagram to 1K+ with no paid budget, or building a platform from nothing. What ties it together is a background in psychology and a habit of asking why before how.</p>
            <div className="chips">
              {chips.map((c, i) => <span key={i} className="chip sketch">{c}</span>)}
            </div>
          </motion.div>
          <motion.div className="facts" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}>
            {facts.map((f, i) => (
              <div key={i} className="fact">
                <div className="fact-l">{f.l}</div>
                <div className="fact-v">{f.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
