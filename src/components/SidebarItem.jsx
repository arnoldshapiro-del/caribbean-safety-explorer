import { useState } from "react";
import { hexToRgb } from "../utils";

export default function SidebarItem({ id, label, emoji, color, score, rank, active, onNav, collapsed }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={() => onNav(id)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      title={collapsed ? `${label}${score ? ' — ' + score + '/100' : ''}` : undefined}
      style={{ width: '100%', padding: collapsed ? '14px 0' : '12px 16px', background: active ? `rgba(${hexToRgb(color)},0.12)` : hov ? 'rgba(255,255,255,0.04)' : 'transparent', borderTop: 'none', borderRight: 'none', borderBottom: 'none', borderLeft: `3px solid ${active ? color : hov ? `rgba(${hexToRgb(color)},0.35)` : 'transparent'}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 10, textAlign: 'left', transition: 'all 0.18s ease' }}>
      <span style={{ fontSize: collapsed ? 22 : 18, flexShrink: 0 }}>{emoji}</span>
      {!collapsed && (<>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 12, fontWeight: active ? 700 : 500, color: active ? 'white' : 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
          {score && <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: active ? color : 'rgba(255,255,255,0.22)', marginTop: 2 }}>{score}/100</div>}
        </div>
        {rank && <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: active ? color : 'rgba(255,255,255,0.18)', flexShrink: 0 }}>#{rank}</span>}
      </>)}
    </button>
  );
}
