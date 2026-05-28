import { useState } from "react";
import { hexToRgb } from "../utils";

export default function HighCard({ icon, title, text, color }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? `rgba(${hexToRgb(color)},0.14)` : 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: `1px solid ${hov ? color : 'rgba(255,255,255,0.1)'}`, borderRadius: 16, padding: '18px 20px', transition: 'all 0.25s ease', transform: hov ? 'translateY(-3px)' : 'none' }}>
      <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 11, fontWeight: 700, color: hov ? color : `rgba(${hexToRgb(color)},0.8)`, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>{title}</div>
      <div style={{ fontFamily: 'Georgia,serif', fontSize: 13, color: 'rgba(255,255,255,0.62)', lineHeight: 1.65 }}>{text}</div>
    </div>
  );
}
