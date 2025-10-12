import { useState, useEffect } from 'react';

interface UseImageLoadOptions {
  src: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function useImageLoad({ src, placeholder, onLoad, onError }: UseImageLoadOptions) {
  const [imageSrc, setImageSrc] = useState<string>(placeholder || '');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      setHasError(false);
      onLoad?.();
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      onError?.();
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return {
    imageSrc,
    isLoading,
    hasError
  };
}