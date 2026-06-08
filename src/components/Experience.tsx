import { motion } from 'framer-motion';

const Spk = ({ size = 16 }: { size?: number }) => (
  <svg style={{ width: size, height: size, flex: '0 0 auto' }} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/>
  </svg>
);

const exps = [
  { per: 'Oct 2025 — Present', role: 'Social Media Coordinator', co: 'Abstract Cafe · Dalhousie Student Union', desc: "Running the full content pipeline for the cafe's Instagram — planning, scheduling, audience targeting, and performance review through Instagram Insights. Designing menus, pricing materials, and branded content that keeps the account growing without any paid promotion.", hi: '1K+ followers & 5K+ views, zero paid spend' },
  { per: 'Aug 2025 — Present', role: 'Campus Engagement Assistant', co: 'Student Affairs · Dalhousie University', desc: 'Running multi-channel campaigns across Student Experience, Operations, and Communications teams. Full ownership of Orientation Week and the Impact Awards, from promotional strategy and logistics to on-site execution. Tracking campaign data in real time to adjust and improve.', hi: '19,000+ students reached across campaigns' },
  { per: 'Oct 2024 — Present', role: 'Founder', co: 'Event Tree · Dalhousie University', desc: 'Spotted a gap in how Dalhousie students discover campus events and built a platform from nothing to fill it. Handled the concept, branding, UX, and promotion strategy independently, with student accessibility as the core priority.', hi: 'Built & launched a campus platform from scratch' },
  { per: 'Mar 2024 & Jan 2026', role: 'Research Assistant', co: "Atlantic Personnel Selection Lab · Saint Mary's University", desc: 'Contributing to study design and participant evaluations alongside senior researchers. Scored and analyzed data for 60+ assessments, managed large datasets, and completed a scoping review covering more than 1,000 academic papers.', hi: '1,000+ papers reviewed, 60+ evaluations scored' },
  { per: 'Sept 2023 — May 2024', role: 'Marketing & PR Director', co: 'Dalhousie Science Society', desc: "Led marketing campaigns for 4+ events per semester. Developed PR strategies that widened the society's campus reach and coordinated content creation, branding, and communications across a cross-functional team.", hi: '4+ events promoted per semester' },
];

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="dark on-ink">
      <div className="sec">
        <div className="kick"><Spk />Experience</div>
        <h2 className="htitle">Work history</h2>
        <div className="exp">
          <svg className="exp-spine" viewBox="0 0 20 600" preserveAspectRatio="none" fill="none">
            <path d="M10 4C4 60 16 90 10 150 4 210 16 250 10 310 4 370 16 410 10 470 4 530 14 560 10 596" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          </svg>
          {exps.map((e, i) => (
            <motion.div key={i} className="exp-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}>
              <svg className="exp-dot" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1C13 8 16 11 23 12C16 13 13 16 12 23C11 16 8 13 1 12C8 11 11 8 12 1Z"/></svg>
              <div className="exp-per">{e.per}</div>
              <div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-co">{e.co}</div>
                <p className="exp-desc">{e.desc}</p>
                <div className="exp-hi"><Spk size={14} />{e.hi}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
