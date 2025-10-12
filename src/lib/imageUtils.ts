// Image optimization utilities

/**
 * Generate optimized image URL for thumbnails
 * In a real production environment, you would use a service like Cloudinary, ImageKit, or similar
 * For now, we'll implement a basic approach that can be enhanced later
 */
export function getOptimizedImageUrl(originalUrl: string, width?: number, height?: number): string {
  // For now, return the original URL
  // In production, you would transform this to use an image optimization service
  // Example: `https://your-image-service.com/image?url=${encodeURIComponent(originalUrl)}&w=${width}&h=${height}&q=80`
  
  return originalUrl;
}

/**
 * Generate thumbnail URL for faster loading
 */
export function getThumbnailUrl(originalUrl: string): string {
  // For thumbnails, we want smaller, compressed versions
  return getOptimizedImageUrl(originalUrl, 128, 96);
}

/**
 * Generate full-size optimized URL for modal display
 */
export function getFullSizeUrl(originalUrl: string): string {
  // For full size, we want good quality but still optimized
  return getOptimizedImageUrl(originalUrl, 1200, 900);
}

/**
 * Preload image to improve perceived performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Generate a placeholder data URL while images load
 */
export function generatePlaceholder(width: number, height: number, text?: string): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#374151"/>
      <text x="50%" y="50%" fill="#9CA3AF" text-anchor="middle" dy=".3em" 
            style="font-family: system-ui, sans-serif; font-size: 12px;">
        ${text || 'Cargando...'}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}