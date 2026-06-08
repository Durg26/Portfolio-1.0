import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Events from './components/Events';
import Photos from './components/Photos';
import Certifications from './components/Certifications';
import Photography from './components/Photography';
import Design from './components/Design';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';
import EventPost from './pages/EventPost';

const DARK_SECTION_IDS = new Set(['experience', 'media', 'contact-dark']);

function PortfolioHome(): JSX.Element {
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [onDark, setOnDark] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'events', 'photos', 'certs', 'media', 'design', 'writing', 'contact'];

    const activeObs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    const darkObs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setOnDark(DARK_SECTION_IDS.has(e.target.id)); }); },
      { rootMargin: '-50% 0px -49% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) { activeObs.observe(el); darkObs.observe(el); }
    });

    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { activeObs.disconnect(); darkObs.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <>
      {/* SVG rough filter — mounted once at root */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="rough" x="-6%" y="-25%" width="112%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves={2} seed={7} result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale={3.2}/>
          </filter>
        </defs>
      </svg>
      <Nav active={active} scrolled={scrolled} onDark={onDark} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Experience />
      <Events />
      <Photos />
      <Certifications />
      <Photography />
      <Design />
      <Writing />
      <Contact />
      <Footer />
    </>
  );
}

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/event/:slug" element={<EventPost />} />
    </Routes>
  );
}
