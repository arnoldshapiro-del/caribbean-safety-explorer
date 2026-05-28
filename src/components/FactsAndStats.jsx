import { hexToRgb } from "../utils";
import StatRow from "./StatRow";

export default function FactsAndStats({ facts, stats, color }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, maxWidth: 1160, alignItems: 'start' }}>
      <div style={{ background: `linear-gradient(145deg, rgba(${hexToRgb(color)},0.08), rgba(255,255,255,0.02))`, border: `1px solid rgba(${hexToRgb(color)},0.18)`, borderRadius: 18, padding: '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 22 }}>💡</span>
          <h3 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 18, fontWeight: 700, color: 'white', margin: 0 }}>Fun Facts You Didn't Know</h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {facts.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontFamily: 'Georgia,serif', fontSize: 13.5, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65 }}>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, color, opacity: 0.7, minWidth: 24, flexShrink: 0, marginTop: 3 }}>0{i + 1}</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '24px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 22 }}>📋</span>
          <h3 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 18, fontWeight: 700, color: 'white', margin: 0 }}>Quick Stats</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          <StatRow icon="✈️" label="Flight Time" val={stats.flight} color={color} />
          <StatRow icon="💰" label="Currency" val={stats.currency} color={color} />
          <StatRow icon="🗣️" label="Language" val={stats.lang} color={color} />
          <StatRow icon="📅" label="Best Time" val={stats.best} color={color} />
          <StatRow icon="🌡️" label="Temperature" val={stats.temp} color={color} />
          <StatRow icon="📔" label="Visa" val={stats.visa} color={color} />
        </div>
      </div>
    </div>
  );
}
