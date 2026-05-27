import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/index';
import { getPostComponent } from '../posts/index';

export default function BlogPost(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio_theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = posts.find((p) => p.slug === slug);
  const Content = slug ? getPostComponent(slug) : undefined;

  if (!post || !Content) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
        <p style={{ color: 'var(--muted)', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Post not found
        </p>
        <Link to="/#blog" style={{ color: 'var(--rust)', textDecoration: 'none', fontSize: '13px', marginTop: '20px', display: 'inline-block' }}>
          Back to portfolio
        </Link>
      </div>
    );
  }

  const toggleTheme = (): void => setTheme((p) => (p === 'light' ? 'dark' : 'light'));

  return (
    <>
      <nav className="bp-nav">
        <div className="bp-nav-inner">
          <Link to="/#blog" className="bp-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11L5 7l4-4" />
            </svg>
            Back
          </Link>
          <button
            onClick={toggleTheme}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'flex', alignItems: 'center', padding: '4px' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <article className="bp-article">
        <span className="bp-tag">{post.tag}</span>
        <h1 className="bp-title">{post.title}</h1>
        <div className="bp-meta">{post.date} &middot; {post.readingTime} min read</div>
        <hr className="bp-rule" />
        <div className="bp-body">
          <Content />
        </div>
        <div className="bp-footer">
          <Link to="/#blog" className="bp-footer-back">
            &larr; All writing
          </Link>
        </div>
      </article>
    </>
  );
}
