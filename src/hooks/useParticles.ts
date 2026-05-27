import { useEffect, MutableRefObject } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function useParticles(ref: MutableRefObject<HTMLCanvasElement | null>): void {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mx = -999;
    let my = -999;
    let raf: number;
    const N = 62;
    const pts: Particle[] = [];

    function resize(): void {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    resize();

    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        r: Math.random() * 1.2 + 0.5,
      });
    }

    function draw(): void {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 170) {
          p.vx += dx * 0.000044;
          p.vy += dy * 0.000044;
        }
        p.vx *= 0.986;
        p.vy *= 0.986;
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(153,95,47,.56)';
        ctx.fill();
      }

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 112) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(153,95,47,${0.14 * (1 - d / 112)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    const mm = (e: MouseEvent): void => {
      mx = e.clientX;
      my = e.clientY;
    };
    const rz = (): void => resize();

    window.addEventListener('mousemove', mm);
    window.addEventListener('resize', rz);
    draw();

    return (): void => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('resize', rz);
    };
  }, []);
}
