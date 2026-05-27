interface PlaceholderProps {
  dark?: boolean;
  label?: string;
}

export default function Placeholder({ dark = false, label = 'Your photo here' }: PlaceholderProps): JSX.Element {
  return (
    <div className={`ph-box ${dark ? 'ph-dk' : 'ph-lt'}`} style={{ width: '100%', height: '100%' }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect
          x="3" y="3" width="18" height="18" rx="1"
          stroke={dark ? '#f0e8cc' : '#3a1808'}
          strokeWidth="1.5"
        />
        <circle cx="8.5" cy="8.5" r="1.5" fill={dark ? '#f0e8cc' : '#3a1808'} />
        <path
          d="M3 15l5-5 4 4 3-3 6 6"
          stroke={dark ? '#f0e8cc' : '#3a1808'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ color: dark ? 'rgba(240,232,204,.3)' : undefined }}>{label}</span>
    </div>
  );
}
