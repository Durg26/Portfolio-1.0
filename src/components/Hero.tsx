export default function Hero(): JSX.Element {
  return (
    <header className="hero" id="top">
      <div className="chars">
        {/* Brain */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M44 26c-12-6-28 0-30 14-10 2-14 16-6 24-6 10 2 24 14 24 2 12 18 16 26 8 8 8 24 4 26-8 12 0 20-14 14-24 8-8 4-22-6-24-2-14-18-20-30-14-2-4-6-4-8 0Z" strokeWidth="3.4"/>
            <path stroke="#171310" d="M48 34c-4 6-2 12 2 14m12-14c4 4 2 12-2 16m-16 8c4 2 10 0 12-4m6 14c4-2 6-8 4-12" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="44" cy="62" r="3.4" fill="#171310"/><circle cx="68" cy="60" r="3.4" fill="#171310"/>
            <path stroke="#171310" d="M46 76c6 6 16 6 22-1" strokeWidth="3.2" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Megaphone */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M24 56l54-26v60L24 70Z" strokeWidth="3.4" strokeLinejoin="round"/>
            <path stroke="#171310" d="M24 56H14c-4 0-6 3-6 7s2 7 6 7h10" strokeWidth="3.4"/>
            <path stroke="#171310" d="M30 78l6 22c1 4 9 4 10 0l2-16" strokeWidth="3.4" strokeLinejoin="round"/>
            <path stroke="#171310" d="M90 40c8 4 8 36 0 40M98 30c14 8 14 52 0 60" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="50" cy="54" r="3" fill="#171310"/><circle cx="64" cy="50" r="3" fill="#171310"/>
          </svg>
        </div>
        {/* Camera */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M16 44h14l6-10h32l6 10h14c5 0 8 3 8 8v40c0 5-3 8-8 8H16c-5 0-8-3-8-8V52c0-5 3-8 8-8Z" strokeWidth="3.4" strokeLinejoin="round"/>
            <circle stroke="#171310" cx="60" cy="74" r="20" strokeWidth="3.4"/>
            <circle stroke="#171310" cx="60" cy="74" r="9" strokeWidth="3"/>
            <circle cx="53" cy="70" r="3" fill="#171310"/><circle cx="64" cy="70" r="3" fill="#171310"/>
            <path stroke="#171310" d="M54 80c3 3 9 3 12 0" strokeWidth="2.6" strokeLinecap="round"/>
            <circle cx="82" cy="52" r="2.6" fill="#171310"/>
          </svg>
        </div>
        {/* Mug */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M30 40h54v40c0 14-12 22-27 22s-27-8-27-22V40Z" strokeWidth="3.4" strokeLinejoin="round"/>
            <path stroke="#171310" d="M84 52h10c8 0 12 6 12 13s-5 13-13 13h-9" strokeWidth="3.4"/>
            <circle cx="48" cy="64" r="4" fill="#171310"/><circle cx="66" cy="64" r="4" fill="#171310"/>
            <path stroke="#171310" d="M46 80c6 7 18 7 24 0" strokeWidth="3.2" strokeLinecap="round"/>
            <path stroke="#171310" d="M44 22c-3 5 3 9 0 14M58 18c-3 5 3 9 0 14M72 22c-3 5 3 9 0 14" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Ticket */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M22 44h76c3 0 5 2 5 5v10a8 8 0 000 16v10c0 3-2 5-5 5H22c-3 0-5-2-5-5V80a8 8 0 000-16V49c0-3 2-5 5-5Z" strokeWidth="3.4" strokeLinejoin="round"/>
            <path stroke="#171310" d="M60 50l5 11 12 1-9 8 3 12-11-7-11 7 3-12-9-8 12-1Z" strokeWidth="3" strokeLinejoin="round"/>
            <circle cx="35" cy="56" r="2.6" fill="#171310"/><circle cx="86" cy="56" r="2.6" fill="#171310"/>
          </svg>
        </div>
        {/* Speech bubble with heart */}
        <div className="char">
          <svg viewBox="0 0 120 120" fill="none" style={{ filter: 'url(#rough)' }}>
            <path stroke="#171310" d="M24 30h72c6 0 10 4 10 10v34c0 6-4 10-10 10H58L38 98l2-14h-16c-6 0-10-4-10-10V40c0-6 4-10 10-10Z" strokeWidth="3.4" strokeLinejoin="round"/>
            <path stroke="#171310" d="M60 70c-12-8-18-14-18-22 0-6 5-9 9-7 4 1 7 6 9 9 2-3 5-8 9-9 4-2 9 1 9 7 0 8-6 14-18 22Z" strokeWidth="3" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="tags">
        <div className="tag">BA Psychology,<br/>Dalhousie University</div>
        <div className="tag c">Marketing · events ·<br/>community engagement</div>
        <div className="tag r">Based in<br/>Halifax, Nova Scotia</div>
      </div>

      <div className="wordmark">
        <span className="l1">ABHINAV</span>
        <span className="l2">DURGAVARJHULA</span>
      </div>

      <div className="subrow">
        <svg className="wave" viewBox="0 0 60 24" fill="none">
          <path d="M3 14c8-12 14 10 22-2s12 12 20-2 10 6 12 4" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"/>
        </svg>
        <p>Building communities, crafting events, and making things that <span className="hl">genuinely connect</span> with people.</p>
      </div>
    </header>
  );
}
