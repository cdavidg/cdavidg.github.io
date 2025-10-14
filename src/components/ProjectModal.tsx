import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  url?: string;
  images?: string[];
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  fullDescription,
  technologies,
  url,
  images = []
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageViewer, setShowImageViewer] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageViewer(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col bg-card border-border p-0">
          <DialogHeader className="flex-shrink-0 px-6 py-5 border-b border-border">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-foreground">{title}</DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            {url && (
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(url, '_blank')}
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visitar sitio web
                </Button>
              </div>
            )}
          </DialogHeader>

          <div className="flex-1 overflow-y-auto space-y-6 px-6 py-6">
            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-2" style={{paddingBottom: '25px'}}>
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-muted text-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Descripción del Proyecto</h3>
              <div className="text-muted-foreground whitespace-pre-wrap leading-relaxed break-words">
                {fullDescription || description}
              </div>
            </div>

            {/* Images */}
            {images.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Galería del Proyecto</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity border border-border"
                      onClick={() => openImageViewer(index)}
                    >
                      <img
                        src={image}
                        alt={`${title} - Screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxYTFhMWEiLz48dGV4dCB4PSIyMDAiIHk9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NjY2NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Viewer Modal */}
      {showImageViewer && images.length > 0 && (
        <Dialog open={showImageViewer} onOpenChange={setShowImageViewer}>
          <DialogContent className="max-w-7xl max-h-[95vh] p-0 bg-black/95 border-0">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowImageViewer(false)}
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </Button>

              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}

              <img
                src={images[currentImageIndex]}
                alt={`${title} - Screenshot ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}