import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/index';
import Placeholder from './Placeholder';

interface BlogCardProps {
  tag: string;
  title: string;
  date: string;
  exc: string;
  slug: string;
  index: number;
}

function BlogCard({ tag, title, date, exc, slug, index }: BlogCardProps): JSX.Element {
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
      <Link to={`/blog/${slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div
          className="bc"
          ref={cardRef}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ position: 'relative', transformStyle: 'preserve-3d' }}
        >
          <div className="tilt-highlight" />
          <div className="bi">
            <div className="bi-in">
              <Placeholder dark={false} />
            </div>
          </div>
          <span className="b-tag">{tag}</span>
          <h3 className="b-title">{title}</h3>
          <span className="b-date">{date}</span>
          <p className="b-exc">{exc}</p>
          <span className="b-read">Read more →</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Blog(): JSX.Element {
  return (
    <div className="full-bg" id="blog" style={{ background: 'var(--bg)' }}>
      <section className="sec">
        <span className="lbl lbl-rust">Writing</span>
        <h2 className="st">Blog</h2>
        <div className="blog-grid">
          {posts.map((p, i) => (
            <BlogCard
              key={i}
              tag={p.tag}
              title={p.title}
              date={p.date}
              exc={p.exc}
              slug={p.slug}
              index={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
