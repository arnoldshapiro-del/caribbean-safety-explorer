import { hexToRgb } from "../utils";

export default function FoodGrid({ foods, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, maxWidth: 1160 }}>
      {foods.map((f, i) => (
        <div key={i} style={{ background: `linear-gradient(160deg, rgba(${hexToRgb(color)},0.08), rgba(255,255,255,0.02))`, border: `1px solid rgba(${hexToRgb(color)},0.2)`, borderRadius: 14, padding: '22px 20px', textAlign: 'center', transition: 'all 0.25s ease' }}
          onMouseEnter={el => { el.currentTarget.style.transform = 'translateY(-4px)'; el.currentTarget.style.borderColor = color; }}
          onMouseLeave={el => { el.currentTarget.style.transform = 'none'; el.currentTarget.style.borderColor = `rgba(${hexToRgb(color)},0.2)`; }}>
          <div style={{ fontSize: 42, marginBottom: 10 }}>{f.icon}</div>
          <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 8 }}>{f.name}</div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: 12.5, color: 'rgba(255,255,255,0.62)', lineHeight: 1.6, fontStyle: 'italic' }}>{f.desc}</div>
        </div>
      ))}
    </div>
  );
}
