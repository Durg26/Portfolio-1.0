import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/index';
import { getEventComponent } from '../events/index';

export default function EventPost(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const event = eventsData.find((e) => e.slug === slug);
  const Content = slug ? getEventComponent(slug) : undefined;

  if (!event || !Content) {
    return (
      <div style={{ padding: '120px 40px', textAlign: 'center', fontFamily: 'var(--hand)' }}>
        <p style={{ color: 'var(--ink-soft)', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Event not found</p>
        <Link to="/#events" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '13px', marginTop: '20px', display: 'inline-block' }}>Back to portfolio</Link>
      </div>
    );
  }

  return (
    <>
      <nav className="bp-nav">
        <Link to="/#events" className="bp-back">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back
        </Link>
        <span style={{ fontFamily: 'var(--display)', fontSize: 20 }}>A.D.</span>
      </nav>
      <article className="bp-article">
        <div className="bp-tag">Event</div>
        <h1 className="bp-title">{event.name}</h1>
        <div className="bp-meta">{event.date}</div>
        <hr className="bp-rule" />
        <div className="bp-body">
          <Content />
        </div>
        <div className="bp-footer">
          <Link to="/#events" className="bp-footer-back">← All events</Link>
        </div>
      </article>
    </>
  );
}
