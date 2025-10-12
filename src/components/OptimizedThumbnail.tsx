import { useState } from 'react';

interface OptimizedThumbnailProps {
  src: string;
  alt: string;
  onClick: () => void;
  index: number;
}

export function OptimizedThumbnail({ src, alt, onClick }: OptimizedThumbnailProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg border border-border/50 hover:border-border transition-all duration-200 flex-shrink-0 w-32 h-24 bg-muted/20"
      onClick={onClick}
    >
      {/* Simple loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
          <div className="text-xs text-muted-foreground">Cargando...</div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
      />

      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/40 flex flex-col items-center justify-center text-muted-foreground">
          <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">Error</span>
        </div>
      )}

      {/* Hover overlay */}
      {isLoaded && !hasError && (
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
          <div className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            Ver
          </div>
        </div>
      )}
    </div>
  );
}