/** Round the actual PNG bounds, rather than the larger panel around it. */
export function ChallengePreview({ src, alt, padded = false }: { src: string; alt: string; padded?: boolean }) {
  return (
    <div className={`w-full h-full min-h-0 flex items-center justify-center ${padded ? "py-[20px]" : ""}`}>
      <img src={src} alt={alt} className="block min-h-0 min-w-0 max-w-full max-h-full w-auto h-auto rounded-[15px]" />
    </div>
  );
}
