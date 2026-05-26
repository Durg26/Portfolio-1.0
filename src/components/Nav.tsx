import { useMagnetic } from '../hooks/useMagnetic';

interface NavProps {
  active: string;
  scrolled: boolean;
  onDark: boolean;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_LINKS: [string, string][] = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['events', 'Events'],
  ['photos', 'Photos'],
  ['certifications', 'Certs'],
  ['media', 'Media'],
  ['blog', 'Blog'],
  ['contact', 'Contact'],
];

function MoonIcon(): JSX.Element {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon(): JSX.Element {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
  );
}

export default function Nav({ active, scrolled, onDark, theme, onToggleTheme }: NavProps): JSX.Element {
  const magnetic = useMagnetic<HTMLAnchorElement>(12);

  const navClass = [
    'nav',
    scrolled ? 'scrolled' : '',
    onDark && !scrolled ? 'on-dark' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass}>
      <div className="nav-inner">
        <a href="#" className="nav-name">Abhinav D.</a>
        <div className="nav-links">
          {NAV_LINKS.map(([id, lbl]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
              {lbl}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="nav-resume"
            ref={magnetic.ref}
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
          >
            Resume ↓
          </a>
          <button
            className="nav-theme-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
