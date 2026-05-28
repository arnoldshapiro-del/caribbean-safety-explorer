export default function StatRow({ icon, label, val, color }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px', background: 'rgba(255,255,255,0.025)', borderRadius: 10, borderLeft: `2px solid ${color}` }}>
      <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 13, color: 'white', fontWeight: 500 }}>{val}</div>
      </div>
    </div>
  );
}
