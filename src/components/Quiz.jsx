import { useEffect, useRef, useState } from "react";
import { DESTS } from "../data/destinations";
import { QUIZ } from "../data/quiz";
import { hexToRgb } from "../utils";
import QuizBtn from "./QuizBtn";

export default function Quiz({ onVisible }) {
  const ref = useRef(null);
  const [step, setStep] = useState(0);
  const [sc, setSc] = useState({});
  const [result, setResult] = useState(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) onVisible('quiz'); }, { threshold: 0.35 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const answer = (m) => {
    const s = { ...sc };
    Object.entries(m).forEach(([k, v]) => { s[k] = (s[k] || 0) + v; });
    setSc(s);
    if (step < QUIZ.length - 1) { setStep(step + 1); }
    else {
      const winner = Object.entries(s).sort((a, b) => b[1] - a[1])[0][0];
      setResult(DESTS.find(d => d.id === winner));
    }
  };
  const reset = () => { setStep(0); setSc({}); setResult(null); };
  return (
    <section ref={ref} id="quiz" style={{ minHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 50px', background: '#030B17', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(155,93,229,0.07) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, width: '100%' }}>
        {!result ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: 42 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: '#9B5DE5', letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 14 }}>🧭 Safe Caribbean Matcher</div>
              <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 36, fontWeight: 800, color: 'white', marginBottom: 10 }}>Find Your Perfect Escape</h2>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'rgba(255,255,255,0.26)', letterSpacing: '0.18em' }}>QUESTION {step + 1} OF {QUIZ.length}</div>
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, marginBottom: 34, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${(step / QUIZ.length) * 100}%`, background: 'linear-gradient(90deg,#FF6E3A,#9B5DE5)', transition: 'width 0.4s ease' }} />
            </div>
            <h3 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 22, fontWeight: 700, color: 'white', textAlign: 'center', marginBottom: 26 }}>{QUIZ[step].q}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
              {QUIZ[step].opts.map((o, i) => (<QuizBtn key={i} text={o.text} onClick={() => answer(o.m)} />))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 440, height: 440, borderRadius: '50%', background: `radial-gradient(circle,${result.color}22 0%,transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: result.color, letterSpacing: '0.32em', textTransform: 'uppercase', marginBottom: 18 }}>🎯 Your Perfect Match</div>
              <div style={{ fontSize: 68, marginBottom: 14 }}>{result.flag}</div>
              <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 52, fontWeight: 800, color: 'white', marginBottom: 8 }}>{result.name}</h2>
              <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 20, color: result.color, marginBottom: 18 }}>{result.tagline}</div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 50, fontWeight: 700, color: result.color, marginBottom: 5, textShadow: `0 0 32px ${result.color}60` }}>{result.score}<span style={{ fontSize: 22, opacity: 0.6 }}>/100</span></div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 8, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.26em', textTransform: 'uppercase', marginBottom: 26 }}>SAFETY INDEX SCORE</div>
              <div style={{ fontFamily: 'Georgia,serif', fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.62)', lineHeight: 1.76, background: `rgba(${hexToRgb(result.color)},0.08)`, border: `1px solid rgba(${hexToRgb(result.color)},0.2)`, borderRadius: 16, padding: '18px 26px', marginBottom: 34 }}>"{result.vibe}"</div>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={reset} style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#030B17', background: result.color, border: 'none', padding: '13px 26px', borderRadius: 100, cursor: 'pointer' }}>↺ Take Again</button>
                <button onClick={() => document.getElementById(result.id)?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: result.color, background: `rgba(${hexToRgb(result.color)},0.1)`, border: `1px solid rgba(${hexToRgb(result.color)},0.4)`, padding: '13px 26px', borderRadius: 100, cursor: 'pointer' }}>Explore {result.name} ↑</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
