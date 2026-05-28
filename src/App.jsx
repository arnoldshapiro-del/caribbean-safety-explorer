import { useState } from "react";
import { DESTS } from "./data/destinations";
import { LightboxProvider } from "./components/Lightbox";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import DestSection from "./components/DestSection";
import Quiz from "./components/Quiz";

export default function App() {
  const [active, setActive] = useState('hero');
  const [collapsed, setCollapsed] = useState(false);
  const nav = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <LightboxProvider>
      <div style={{ display: 'flex', background: '#030B17', minHeight: '100vh' }}>
        <Sidebar active={active} onNav={nav} collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main style={{ marginLeft: collapsed ? 56 : 230, flex: 1, minWidth: 0, transition: 'margin-left 0.28s ease' }}>
          <Hero onVisible={setActive} />
          {DESTS.map(d => (<DestSection key={d.id} dest={d} onVisible={setActive} />))}
          <Quiz onVisible={setActive} />
          <footer style={{ padding: '24px 50px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#020710', flexWrap: 'wrap', gap: 14 }}>
            <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.4)' }}><span style={{ color: '#00C4F0', fontWeight: 700 }}>5 Safest Caribbean Escapes</span> &nbsp;·&nbsp; Summer 2026</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 8, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Data: Travel Off Path Traveler Safety Index</div>
          </footer>
        </main>
      </div>
    </LightboxProvider>
  );
}
