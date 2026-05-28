import { hexToRgb } from "../utils";

export default function WhySafePanel({ text, color }) {
  return (
    <div style={{ maxWidth: 1000, background: `linear-gradient(135deg, rgba(${hexToRgb(color)},0.1), rgba(255,255,255,0.02))`, border: `1px solid rgba(${hexToRgb(color)},0.25)`, borderRadius: 18, padding: '30px 36px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -30, right: -30, fontSize: 160, opacity: 0.06, color }}>🛡️</div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 28 }}>🛡️</span>
          <h3 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 22, fontWeight: 700, color: 'white', margin: 0 }}>Why It's So Safe</h3>
        </div>
        <p style={{ fontFamily: 'Georgia,serif', fontSize: 15, color: 'rgba(255,255,255,0.78)', lineHeight: 1.78, margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}
