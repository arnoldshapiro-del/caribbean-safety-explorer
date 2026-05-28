import { useState, useEffect } from "react";

export default function ScoreRing({ score, color, size = 180, animate }) {
  const [prog, setProg] = useState(0);
  const radius = size / 2 - 14;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (prog / 100) * circ;
  useEffect(() => {
    if (!animate) { setProg(0); return; }
    let cur = 0; const step = score / 55;
    const id = setInterval(() => { cur = Math.min(cur + step, score); setProg(cur); if (cur >= score) clearInterval(id); }, 16);
    return () => clearInterval(id);
  }, [animate, score]);
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', display: 'block' }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="10" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: Math.round(size * 0.22), fontWeight: 700, color: 'white', lineHeight: 1, textShadow: `0 0 24px ${color}90` }}>{Math.round(prog)}</span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: Math.round(size * 0.075), color: 'rgba(255,255,255,0.38)' }}>/ 100</span>
        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: Math.round(size * 0.062), color, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 3 }}>SAFETY</span>
      </div>
    </div>
  );
}
