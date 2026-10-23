import './LoadingScreen.css';

/** Indeterminate progress: route chunks and network calls have no measurable total. */
export function LoadingScreen({ label = 'Загружаем…', compact = false }: { label?: string; compact?: boolean }) {
  return <div className={`skillum-loading${compact ? ' skillum-loading-compact' : ''}`} role="status" aria-live="polite" aria-label={label}>
    <img src="/logo-splash.svg" alt="Skillum" width="286" height="69" />
    <div className="skillum-loading-track" aria-hidden="true"><span /></div>
    <p>{label}</p>
  </div>;
}
