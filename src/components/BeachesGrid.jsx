import ZoomableImage from "./ZoomableImage";

export default function BeachesGrid({ beaches, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, maxWidth: 1160 }}>
      {beaches.map((b, i) => (
        <div key={i} style={{ borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'none'; }}>
          <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
            <ZoomableImage src={b.img} alt={b.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5))' }} />
            <div style={{ position: 'absolute', bottom: 10, left: 14, fontFamily: "'Oxanium',sans-serif", fontSize: 16, fontWeight: 700, color: 'white' }}>🏖️ {b.name}</div>
          </div>
          <div style={{ padding: '14px 16px', fontFamily: 'Georgia,serif', fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{b.desc}</div>
        </div>
      ))}
    </div>
  );
}
