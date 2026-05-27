import { useCountUp } from '../hooks/useCountUp';

interface StatItem {
  n: number;
  s: string;
  l: string;
}

const STATS: StatItem[] = [
  { n: 19000, s: '+', l: 'Students Reached' },
  { n: 5, s: '', l: 'Roles Held' },
  { n: 1000, s: '+', l: 'Instagram Followers' },
  { n: 4, s: '', l: 'Certifications' },
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
