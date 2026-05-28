import { hexToRgb } from "../utils";

export default function GalleryMosaic({ gallery, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: '200px 200px 200px', gridTemplateAreas: '"a a b c" "a a d e" "f g h e"', gap: 10, maxWidth: 1160 }}>
      {gallery.map((g, i) => (
        <div key={i} style={{ gridArea: g.area, position: 'relative', overflow: 'hidden', borderRadius: 14, cursor: 'pointer', background: `rgba(${hexToRgb(color)},0.15)` }}
          onMouseEnter={e => {
            const inner = e.currentTarget.querySelector('.gal-inner'); if (inner) inner.style.transform = 'scale(1.08)';
            const cap = e.currentTarget.querySelector('.cap'); if (cap) cap.style.transform = 'translateY(0)';
          }}
          onMouseLeave={e => {
            const inner = e.currentTarget.querySelector('.gal-inner'); if (inner) inner.style.transform = 'scale(1)';
            const cap = e.currentTarget.querySelector('.cap'); if (cap) cap.style.transform = 'translateY(100%)';
          }}>
          <div className="gal-inner" style={{ width: '100%', height: '100%', transition: 'transform 0.6s ease' }}>
            <img src={g.src} alt={g.cap} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%, rgba(0,0,0,0.7))', pointerEvents: 'none' }} />
          <div className="cap" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', transform: 'translateY(100%)', transition: 'transform 0.3s ease', fontFamily: "'Oxanium',sans-serif", fontSize: 11, color: 'white', fontWeight: 600, letterSpacing: '0.02em', background: `linear-gradient(180deg, transparent, rgba(${hexToRgb(color)},0.55))` }}>{g.cap}</div>
        </div>
      ))}
    </div>
  );
}
