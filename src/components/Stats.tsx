import { useCountUp } from '../hooks/useCountUp';

interface StatItem {
  n: number;
  s: string;
  l: string;
}

const STATS: StatItem[] = [
  { n: 20, s: '+', l: 'Events Managed' },
  { n: 3, s: '+', l: 'Years Experience' },
  { n: 1000, s: '+', l: 'People Reached' },
  { n: 6, s: '', l: 'Certifications' },
];

function StatNum({ to, suf }: { to: number; suf: string }): JSX.Element {
  const ref = useCountUp(to, suf);
  return <span ref={ref}>0{suf}</span>;
}

export default function Stats(): JSX.Element {
  return (
    <div id="sw" data-bg="dark">
      <div className="sbar">
        {STATS.map((x, i) => (
          <div key={i} className="stat">
            <div className="stat-n">
              <StatNum to={x.n} suf={x.s} />
            </div>
            <div className="stat-l">{x.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
