import { useEffect, useRef } from "react";
import { DESTS } from "../data/destinations";
import { hexToRgb } from "../utils";

export default function Hero({ onVisible }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) onVisible('hero'); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', background: '#030B17', padding: '80px 40px' }}>
      <style>{`
        @keyframes orb0{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-44%,-56%) scale(1.18)}}
        @keyframes orb1{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-56%,-44%) scale(1.22)}}
        @keyframes orb2{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-47%,-53%) scale(1.12)}}
        @keyframes orb3{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-53%,-47%) scale(1.2)}}
        @keyframes orb4{0%{transform:translate(-50%,-50%) scale(1)}100%{transform:translate(-45%,-55%) scale(1.14)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes bob{0%,100%{transform:translateY(0);opacity:.3}50%{transform:translateY(7px);opacity:.6}}
        @keyframes destPop{from{opacity:0;transform:translateY(16px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}
        .dest-card:hover{transform:translateY(-6px) !important;}
        .quiz-opt:hover{background:rgba(0,196,240,0.1) !important; border-color:#00C4F0 !important; color:white !important; transform:translateY(-2px) !important;}
      `}</style>
      {DESTS.map((d, i) => (
        <div key={d.id} style={{ position: 'absolute', width: `${260 + i * 70}px`, height: `${260 + i * 70}px`, borderRadius: '50%', background: `radial-gradient(circle, ${d.color}22 0%, transparent 68%)`, left: `${[14, 66, 34, 74, 46][i]}%`, top: `${[28, 72, 14, 52, 78][i]}%`, transform: 'translate(-50%,-50%)', animation: `orb${i} ${4 + i * 0.8}s ease-in-out infinite alternate`, pointerEvents: 'none' }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,196,240,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,196,240,0.022) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 820, width: '100%' }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: '#00C4F0', letterSpacing: '0.44em', textTransform: 'uppercase', marginBottom: 22, animation: 'fadeIn 1s ease 0.3s both' }}>☀️ &nbsp; Travel Off Path — Traveler Safety Index &nbsp; ☀️</div>
        <h1 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 'clamp(42px,8vw,94px)', fontWeight: 800, color: 'white', lineHeight: 0.91, letterSpacing: '-0.02em', marginBottom: 22, animation: 'slideUp 0.8s ease 0.5s both' }}>5 SAFEST<br /><span style={{ background: 'linear-gradient(270deg,#FF6E3A,#FFB800,#00E0A8,#00C4F0,#4CC97F,#FF6E3A)', backgroundSize: '400% 400%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>CARIBBEAN</span><br />ESCAPES</h1>
        <p style={{ fontFamily: 'Georgia,serif', fontStyle: 'italic', fontSize: 17, color: 'rgba(255,255,255,0.52)', lineHeight: 1.78, marginBottom: 46, animation: 'slideUp 0.8s ease 0.7s both' }}>Real travelers voted. The numbers are in. Here are the destinations<br />where you can truly unwind — scored <strong style={{ color: 'rgba(255,255,255,0.82)' }}>84 to 98 out of 100.</strong></p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 11, flexWrap: 'wrap', animation: 'slideUp 0.8s ease 0.9s both' }}>
          {DESTS.map((d, i) => (
            <button key={d.id} className="dest-card" onClick={() => document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth' })}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '16px 17px', background: `rgba(${hexToRgb(d.color)},0.08)`, border: `1px solid rgba(${hexToRgb(d.color)},0.26)`, borderRadius: 16, cursor: 'pointer', transition: 'all 0.25s ease', animation: `destPop 0.6s ease ${0.9 + i * 0.08}s both` }}>
              <span style={{ fontSize: 22 }}>{d.flag}</span>
              <span style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 11, color: 'rgba(255,255,255,0.78)', fontWeight: 600, whiteSpace: 'nowrap' }}>{d.name}</span>
              <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 21, color: d.color, fontWeight: 700, lineHeight: 1, textShadow: `0 0 16px ${d.color}70` }}>{d.score}</span>
            </button>
          ))}
        </div>
        <div style={{ marginTop: 54, fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'rgba(255,255,255,0.24)', letterSpacing: '0.26em', textTransform: 'uppercase', animation: 'bob 2.2s ease infinite' }}>↓ &nbsp; scroll to explore &nbsp; ↓</div>
      </div>
    </section>
  );
}
