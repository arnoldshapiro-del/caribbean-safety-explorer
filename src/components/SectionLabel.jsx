import { hexToRgb } from "../utils";

export default function SectionLabel({ text, color, num }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
      <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color, letterSpacing: '0.3em', textTransform: 'uppercase', background: `rgba(${hexToRgb(color)},0.12)`, border: `1px solid rgba(${hexToRgb(color)},0.35)`, padding: '5px 14px', borderRadius: 100 }}>
        {num && <span style={{ opacity: 0.5, marginRight: 8 }}>{num}</span>}{text}
      </span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, rgba(${hexToRgb(color)},0.3), transparent)` }} />
    </div>
  );
}
