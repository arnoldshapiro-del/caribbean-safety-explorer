import { useLightbox } from "./Lightbox";

export default function ZoomableImage({ src, alt, style, loading, className }) {
  const open = useLightbox();
  return (
    <img src={src} alt={alt} loading={loading} className={className}
      onClick={(e) => { e.stopPropagation(); open(src, alt); }}
      style={{ ...style, cursor: "zoom-in" }} />
  );
}
