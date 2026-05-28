import { hexToRgb } from "../utils";

export default function GemsList({ gems, color }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 1000 }}>
      {gems.map((g, i) => (
        <div key={i} style={{ display: 'flex', gap: 18, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderLeft: `3px solid ${color}`, borderRadius: '4px 14px 14px 4px', padding: '18px 22px', transition: 'all 0.2s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = `rgba(${hexToRgb(color)},0.08)`; e.currentTarget.style.transform = 'translateX(4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'none'; }}>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 28, fontWeight: 700, color, opacity: 0.6, flexShrink: 0, lineHeight: 1, minWidth: 40 }}>{String(i + 1).padStart(2, '0')}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 6 }}>{g.name}</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, fontStyle: 'italic' }}>{g.why}</div>
          </div>
          <div style={{ fontSize: 24, opacity: 0.4, alignSelf: 'center' }}>💎</div>
        </div>
      ))}
    </div>
  );
}
