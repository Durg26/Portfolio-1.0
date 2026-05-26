import { useEffect } from 'react';

export default function Cursor(): null {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    const dot = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');

    // Create elements if not present
    let dotEl = dot;
    let ringEl = ring;

    if (!dotEl) {
      dotEl = document.createElement('div');
      dotEl.id = 'cur';
      document.body.appendChild(dotEl);
    }
    if (!ringEl) {
      ringEl = document.createElement('div');
      ringEl.id = 'cur-ring';
      document.body.appendChild(ringEl);
    }

    let cx = -100;
    let cy = -100;
    let rx = -100;
    let ry = -100;

    const onMove = (e: MouseEvent): void => {
      cx = e.clientX;
      cy = e.clientY;
      dotEl!.style.left = cx + 'px';
      dotEl!.style.top = cy + 'px';
      dotEl!.style.opacity = '1';
      ringEl!.style.opacity = '1';
    };

    const onLeave = (): void => {
      dotEl!.style.opacity = '0';
      ringEl!.style.opacity = '0';
    };

    const onOver = (e: MouseEvent): void => {
      const target = e.target as Element;
      if (target.closest('a,button')) document.body.classList.add('ch');
    };

    const onOut = (e: MouseEvent): void => {
      const target = e.target as Element;
      if (target.closest('a,button')) document.body.classList.remove('ch');
    };

    let rafId: number;
    const loop = (): void => {
      rx += (cx - rx) * 0.11;
      ry += (cy - ry) * 0.11;
      ringEl!.style.left = rx + 'px';
      ringEl!.style.top = ry + 'px';
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return null;
}
