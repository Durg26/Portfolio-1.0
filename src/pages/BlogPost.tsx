import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/index';
import { getPostComponent } from '../posts/index';

export default function BlogPost(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = posts.find((p) => p.slug === slug);
  const Content = slug ? getPostComponent(slug) : undefined;

  if (!post || !Content) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'var(--hand)' }}>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Post not found
        </p>
        <Link to="/#writing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px', marginTop: '20px', display: 'inline-block' }}>
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <nav className="bp-nav">
        <Link to="/#writing" className="bp-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back
        </Link>
        <span style={{ fontFamily: 'var(--display)', fontSize: 20 }}>A.D.</span>
      </nav>

      <article className="bp-article">
        <div className="bp-tag">{post.tag}</div>
        <h1 className="bp-title">{post.title}</h1>
        <div className="bp-meta">{post.date} &middot; {post.readingTime} min read</div>
        <hr className="bp-rule" />
        <div className="bp-body">
          <Content />
        </div>
        <div className="bp-footer">
          <Link to="/#writing" className="bp-footer-back">
            ← All writing
          </Link>
        </div>
      </article>
    </>
  );
}
