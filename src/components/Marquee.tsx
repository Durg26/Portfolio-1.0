const ITEMS = [
  'Event Management', 'Community Building', 'Marketing', 'Photography',
  'Psychology', 'Social Media', 'Storytelling', 'Videography',
  'Halifax NS', 'Content Creation',
];

export default function Marquee(): JSX.Element {
  const all = [...ITEMS, ...ITEMS];

  return (
    <div id="mq">
      <div className="mq-track">
        {all.map((t, i) => (
          <span key={i}>
            <span className="mq-item">{t}</span>
            <span className="mq-item" style={{ opacity: 0.32 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
