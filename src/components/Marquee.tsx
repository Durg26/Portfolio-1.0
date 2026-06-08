const ITEMS = ['Social Media Strategy', 'Event Management', 'Community Engagement', 'Content Creation', 'Marketing & PR', 'Psychology', 'Branding', 'Canva & Figma'];

const Spk = () => (
  <svg className="spk" style={{ width: 17, height: 17, flex: '0 0 auto' }} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 4C55 36 64 45 96 50C64 55 55 64 50 96C45 64 36 55 4 50C36 45 45 36 50 4Z"/>
  </svg>
);

export default function Marquee(): JSX.Element {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ribbon">
      <div className="mq">
        {doubled.map((item, i) => (
          <span key={i}><Spk />{item}</span>
        ))}
      </div>
    </div>
  );
}
