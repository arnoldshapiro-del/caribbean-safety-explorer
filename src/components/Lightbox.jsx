import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LightboxContext = createContext(() => {});
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }) {
  const [img, setImg] = useState(null);
  const open = useCallback((src, alt) => setImg({ src, alt }), []);
  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    if (!img) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [img, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {img && (
        <div onClick={close} role="dialog" aria-modal="true"
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(3,11,23,0.94)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5vh 4vw", cursor: "zoom-out", animation: "lbFade 0.2s ease" }}>
          <style>{`@keyframes lbFade{from{opacity:0}to{opacity:1}}@keyframes lbZoom{from{opacity:0;transform:scale(0.92)}to{opacity:1;transform:scale(1)}}`}</style>
          <button onClick={close} aria-label="Close" title="Close"
            style={{ position: "fixed", top: 22, right: 26, width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: 26, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }}>×</button>
          <img src={img.src} alt={img.alt}
            style={{ maxWidth: "92vw", maxHeight: "80vh", objectFit: "contain", borderRadius: 10, boxShadow: "0 30px 90px rgba(0,0,0,0.7)", animation: "lbZoom 0.25s ease", cursor: "zoom-out" }} />
          {img.alt && (
            <div style={{ marginTop: 18, fontFamily: "'Oxanium',sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em", textAlign: "center", maxWidth: "80vw" }}>{img.alt}</div>
          )}
          <div style={{ marginTop: 8, fontFamily: "'Space Mono',monospace", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Click anywhere to close</div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}
