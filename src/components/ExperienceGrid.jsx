import { hexToRgb } from "../utils";

export default function ExperienceGrid({ exps, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 1160 }}>
      {exps.map((e, i) => (
        <div key={i} style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '20px 22px', transition: 'all 0.25s ease' }}
          onMouseEnter={el => { el.currentTarget.style.background = `rgba(${hexToRgb(color)},0.12)`; el.currentTarget.style.borderColor = color; el.currentTarget.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={el => { el.currentTarget.style.background = 'rgba(255,255,255,0.04)'; el.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; el.currentTarget.style.transform = 'none'; }}>
          <div style={{ fontSize: 30, marginBottom: 10 }}>{e.icon}</div>
          <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 13, fontWeight: 700, color: color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{e.title}</div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: 13.5, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>{e.text}</div>
        </div>
      ))}
    </div>
  );
}
