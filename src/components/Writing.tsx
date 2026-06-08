import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/index';

const Spk = () => <svg style={{ width: 16, height: 16 }} viewBox="0 0 100 100" fill="currentColor"><path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/></svg>;

export default function Writing(): JSX.Element {
  return (
    <section id="writing">
      <div className="sec">
        <div className="kick"><Spk />Writing</div>
        <h2 className="htitle">From the blog</h2>
        <div className="cards3">
          {posts.map((p, i) => (
            <motion.article key={i} className="post" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: i * 0.1 }}>
              <div className="post-pic-wrap sketch">
                <div className="post-pic">
                  <div className="post-pic-ph">Blog image</div>
                </div>
              </div>
              <div className="post-tag">{p.tag}</div>
              <Link to={`/blog/${p.slug}`} className="post-title">{p.title}</Link>
              <div className="post-date">{p.date}</div>
              <p className="post-exc">{p.exc}</p>
              <Link to={`/blog/${p.slug}`} className="post-read">
                Read more
                <svg viewBox="0 0 24 13" fill="none">
                  <path d="M1 6.5h20M16 1.5l6 5-6 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
