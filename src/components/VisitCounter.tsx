import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export function VisitCounter() {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar el contador de visitas
    const loadVisitCount = () => {
      try {
        // Obtener el contador del localStorage
        const stored = localStorage.getItem('cv-visit-count');
        const lastVisit = localStorage.getItem('cv-last-visit');
        const today = new Date().toDateString();

        let count = stored ? parseInt(stored, 10) : 0;

        // Si es una nueva visita (diferente día o primera visita)
        if (lastVisit !== today) {
          count += 1;
          localStorage.setItem('cv-visit-count', count.toString());
          localStorage.setItem('cv-last-visit', today);
        }

        setVisitCount(count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading visit count:', error);
        setVisitCount(0);
        setIsLoading(false);
      }
    };

    loadVisitCount();
  }, []);

  if (isLoading) {
    return (
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg">
        <Eye className="w-4 h-4 text-white" />
        <span className="text-white text-sm font-medium">...</span>
      </div>
    );
  }

  return (
    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg hover:bg-black/80 transition-all duration-200 group">
      <Eye className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
      <span className="text-white text-sm font-medium tabular-nums">
        {visitCount.toLocaleString()}
      </span>
    </div>
  );
}