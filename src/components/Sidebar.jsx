import { ChevronLeft, ChevronRight } from "lucide-react";
import { DESTS } from "../data/destinations";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ active, onNav, collapsed, onToggle }) {
  return (
    <aside style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: collapsed ? 56 : 230, background: 'rgba(2,6,16,0.96)', backdropFilter: 'blur(24px)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', zIndex: 200, overflowY: 'auto', transition: 'width 0.28s ease' }}>
      <div style={{ padding: collapsed ? '18px 0' : '22px 18px 18px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between', gap: 10 }}>
        {!collapsed && (
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 8, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 6 }}>Travel Off Path</div>
            <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1.1 }}>5 Safest<br /><span style={{ color: '#00C4F0' }}>Caribbean</span></div>
          </div>
        )}
        <button onClick={onToggle} title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', borderRadius: 8, color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, flexShrink: 0, transition: 'all 0.18s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,196,240,0.15)'; e.currentTarget.style.borderColor = '#00C4F0'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
          {collapsed ? <ChevronRight size={16} strokeWidth={2.5} /> : <ChevronLeft size={16} strokeWidth={2.5} />}
        </button>
      </div>
      <nav style={{ flex: 1, padding: '10px 0' }}>
        <SidebarItem id="hero" label="Overview" emoji="🌊" color="#00C4F0" active={active === 'hero'} onNav={onNav} collapsed={collapsed} />
        {DESTS.map(d => (
          <SidebarItem key={d.id} id={d.id} label={d.name} emoji={d.flag} color={d.color} score={d.score} rank={d.rank} active={active === d.id} onNav={onNav} collapsed={collapsed} />
        ))}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.04)', margin: '10px 0' }} />
        <SidebarItem id="quiz" label="Find My Match" emoji="🧭" color="#9B5DE5" active={active === 'quiz'} onNav={onNav} collapsed={collapsed} />
      </nav>
      {!collapsed && (
        <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.04)', fontFamily: "'Space Mono',monospace", fontSize: 8, color: 'rgba(255,255,255,0.14)', letterSpacing: '0.1em', lineHeight: 1.8 }}>DATA: TRAVEL OFF PATH<br />SAFETY INDEX © 2026</div>
      )}
    </aside>
  );
}
