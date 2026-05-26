import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Events from './components/Events';
import Photos from './components/Photos';
import Certifications from './components/Certifications';
import Media from './components/Media';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const DARK_SECTION_IDS = new Set(['hero', 'sw', 'experience', 'media', 'contact']);

export default function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('portfolio_loaded');
    }
    return true;
  });
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [onDark, setOnDark] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio_theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });
  const [konamiVisible, setKonamiVisible] = useState<boolean>(false);

  // Apply theme to html element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Loading screen timer
  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('portfolio_loaded', '1');
    }, 1800);
    return () => clearTimeout(t);
  }, [loading]);

  // Scroll / active section / dark detection
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'events', 'photos', 'certifications', 'media', 'blog', 'contact'];
    const allIds = ['hero', 'sw', ...sectionIds];

    const activeObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );

    const darkObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setOnDark(DARK_SECTION_IDS.has(e.target.id));
        });
      },
      { rootMargin: '-50% 0px -49% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) activeObs.observe(el);
    });
    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) darkObs.observe(el);
    });

    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      activeObs.disconnect();
      darkObs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const sequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a',
    ];
    let idx = 0;

    const onKey = (e: KeyboardEvent): void => {
      if (e.key === sequence[idx]) {
        idx++;
        if (idx === sequence.length) {
          idx = 0;
          setKonamiVisible(true);
          setTimeout(() => setKonamiVisible(false), 2800);
        }
      } else {
        idx = e.key === sequence[0] ? 1 : 0;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Cursor />
      {loading && <LoadingScreen />}
      <ScrollProgress />
      <Nav
        active={active}
        scrolled={scrolled}
        onDark={onDark}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Experience />
      <Events />
      <Photos />
      <Certifications />
      <Media />
      <Blog />
      <Contact />
      <Footer />
      {konamiVisible && (
        <div className="konami-toast show">You found it. Impressive.</div>
      )}
    </>
  );
}
