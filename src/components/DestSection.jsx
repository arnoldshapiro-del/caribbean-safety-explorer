import { useEffect, useRef, useState } from "react";
import { hexToRgb } from "../utils";
import ZoomableImage from "./ZoomableImage";
import ScoreRing from "./ScoreRing";
import SectionLabel from "./SectionLabel";
import GalleryMosaic from "./GalleryMosaic";
import WhySafePanel from "./WhySafePanel";
import BeachesGrid from "./BeachesGrid";
import ExperienceGrid from "./ExperienceGrid";
import HighCard from "./HighCard";
import FoodGrid from "./FoodGrid";
import GemsList from "./GemsList";
import FactsAndStats from "./FactsAndStats";

export default function DestSection({ dest, onVisible }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { onVisible(dest.id); setAnimate(true); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} id={dest.id} style={{ position: 'relative', background: '#030B17', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', transition: 'transform 1.4s ease', transform: animate ? 'scale(1.06)' : 'scale(1)' }}>
            <ZoomableImage src={dest.hero} alt={`${dest.name} — ${dest.tagline}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(3,11,23,0.5)', pointerEvents: 'none' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(128deg,rgba(${hexToRgb(dest.color)},0.55) 0%,rgba(3,11,23,0.95) 58%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', padding: '70px 50px', pointerEvents: 'none' }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, letterSpacing: '0.3em', color: dest.color, background: `rgba(${hexToRgb(dest.color)},0.12)`, border: `1px solid rgba(${hexToRgb(dest.color)},0.4)`, padding: '6px 18px', borderRadius: 100, textTransform: 'uppercase' }}>{dest.badge}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr auto 1fr', gap: 40, alignItems: 'center', maxWidth: 1160 }}>
            <div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, color: `rgba(${hexToRgb(dest.color)},0.85)`, letterSpacing: '0.22em', marginBottom: 12, textTransform: 'uppercase' }}>Rank #{dest.rank} &nbsp;·&nbsp; {dest.flag}</div>
              <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 'clamp(44px,5.5vw,72px)', fontWeight: 800, color: 'white', lineHeight: 0.9, marginBottom: 12, textShadow: `0 0 50px rgba(${hexToRgb(dest.color)},0.38)` }}>{dest.name}</h2>
              <div style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 20, fontWeight: 300, color: dest.color, marginBottom: 20, letterSpacing: '0.04em' }}>{dest.tagline}</div>
              <div style={{ fontFamily: 'Georgia,serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.72, borderLeft: `3px solid ${dest.color}`, paddingLeft: 15, marginBottom: 20 }}>"{dest.vibe}"</div>
              <p style={{ fontFamily: 'Georgia,serif', fontSize: 13.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, maxWidth: 420 }}>{dest.desc}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <ScoreRing score={dest.score} color={dest.color} size={180} animate={animate} />
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 9, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.2em', textAlign: 'center', textTransform: 'uppercase', lineHeight: 1.7 }}>Traveler<br />Safety Index</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'auto' }}>
              {dest.highlights.map((h, i) => (<HighCard key={i} {...h} color={dest.color} />))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '60px 50px', background: `linear-gradient(180deg, #030B17, rgba(${hexToRgb(dest.color)},0.04), #030B17)` }}>
        <SectionLabel text="Photo Gallery" color={dest.color} num="01" />
        <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 34, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>See {dest.name} like you're <span style={{ color: dest.color }}>already there</span></h2>
        <GalleryMosaic gallery={dest.gallery} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px' }}>
        <SectionLabel text="Why It's So Safe" color={dest.color} num="02" />
        <WhySafePanel text={dest.whySafe} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px', background: `linear-gradient(180deg, transparent, rgba(${hexToRgb(dest.color)},0.04), transparent)` }}>
        <SectionLabel text="Best Beaches" color={dest.color} num="03" />
        <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>Where the <span style={{ color: dest.color }}>sand meets the sea</span></h2>
        <BeachesGrid beaches={dest.beaches} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px' }}>
        <SectionLabel text="Must-Do Experiences" color={dest.color} num="04" />
        <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>Six adventures you <span style={{ color: dest.color }}>can't miss</span></h2>
        <ExperienceGrid exps={dest.experiences} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px', background: `linear-gradient(180deg, transparent, rgba(${hexToRgb(dest.color)},0.04), transparent)` }}>
        <SectionLabel text="Eat & Drink" color={dest.color} num="05" />
        <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>Taste {dest.name} <span style={{ color: dest.color }}>like a local</span></h2>
        <FoodGrid foods={dest.food} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px' }}>
        <SectionLabel text="Hidden Gems" color={dest.color} num="06" />
        <h2 style={{ fontFamily: "'Oxanium',sans-serif", fontSize: 32, fontWeight: 800, color: 'white', marginTop: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>Secrets <span style={{ color: dest.color }}>only locals know</span></h2>
        <GemsList gems={dest.gems} color={dest.color} />
      </div>
      <div style={{ padding: '60px 50px 90px', background: `linear-gradient(180deg, transparent, rgba(${hexToRgb(dest.color)},0.05))` }}>
        <SectionLabel text="Facts & Travel Stats" color={dest.color} num="07" />
        <FactsAndStats facts={dest.facts} stats={dest.stats} color={dest.color} />
      </div>
    </section>
  );
}
