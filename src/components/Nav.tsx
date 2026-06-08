interface NavProps {
  active: string;
  scrolled: boolean;
  onDark: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}

const Spk = () => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/>
  </svg>
);

export default function Nav({ active, scrolled, onDark, menuOpen, setMenuOpen }: NavProps): JSX.Element {
  const navLinks = ['about', 'experience', 'events', 'photos', 'design', 'writing', 'contact'];

  const cls = ['nav', scrolled ? 'scrolled' : '', onDark && !scrolled ? 'on-dark' : ''].filter(Boolean).join(' ');

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      const lenis = (window as any).__lenis;
      if (lenis?.scrollTo) { lenis.scrollTo(0); } else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as any).__lenis;
    const offset = -68;
    if (lenis?.scrollTo) { lenis.scrollTo(el, { offset }); }
    else { el.scrollIntoView({ behavior: 'smooth' }); }
  };

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleMobLink = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => scrollToSection(id), 60);
  };

  return (
    <>
      <nav className={cls} id="nav">
        <div className="nav-in">
          <a href="#top" className="logo" onClick={(e) => handleLink(e, 'top')}>
            A.D.
            <span className="spk" style={{ width: 15, height: 15, display: 'inline-flex' }}><Spk /></span>
          </a>
          <div className="nav-links">
            {navLinks.map((id) => (
              id === 'photos' ? (
                <a key={id} href={`#${id}`} className={`lnk${active === id ? ' active' : ''}`} onClick={(e) => handleLink(e, id)}>
                  {id}
                  <svg className="nav-eyes" viewBox="0 0 60 30" fill="none">
                    <ellipse className="ink" cx="18" cy="15" rx="14" ry="13" stroke="#171310" strokeWidth="3"/>
                    <ellipse className="ink" cx="42" cy="15" rx="14" ry="13" stroke="#171310" strokeWidth="3"/>
                    <circle cx="22" cy="17" r="5" fill="#171310"/>
                    <circle cx="46" cy="17" r="5" fill="#171310"/>
                  </svg>
                </a>
              ) : (
                <a key={id} href={`#${id}`} className={`lnk${active === id ? ' active' : ''}`} onClick={(e) => handleLink(e, id)}>{id}</a>
              )
            ))}
            <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="resume sketch">Résumé ↓</a>
          </div>
          <button className="nav-ham" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="ham-l"/><span className="ham-l"/><span className="ham-l"/>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="mob-menu open">
          {navLinks.map((id) => (
            <a key={id} href={`#${id}`} className="mob-link" onClick={(e) => handleMobLink(e, id)}>{id}</a>
          ))}
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="mob-resume" onClick={() => setMenuOpen(false)}>Résumé ↓</a>
        </div>
      )}
    </>
  );
}
