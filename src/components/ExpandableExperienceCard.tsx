import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getThumbnailUrl, getFullSizeUrl, generatePlaceholder } from "../lib/imageUtils";

interface ExpandableExperienceCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  url?: string;
  images?: string[];
  isExpandable?: boolean;
}

export function ExpandableExperienceCard({
  title,
  description,
  fullDescription,
  technologies,
  url,
  images = [],
  isExpandable = false
}: ExpandableExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <Card className={`mb-4 bg-card/50 border-border/50 transition-all duration-300 ${
        isExpandable ? 'hover:bg-card/80 hover:border-border cursor-pointer' : ''
      }`}>
        <CardHeader onClick={isExpandable ? toggleExpanded : undefined}>
          <div className="flex items-center justify-between">
            <CardTitle className="flex-1">{title}</CardTitle>
            {isExpandable && (
              <div className="flex items-center gap-2">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                )}
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Expanded Content */}
          {isExpandable && isExpanded && (
            <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
              {/* Full Description */}
              {fullDescription && (
                <div className="space-y-4">
                  {fullDescription.split('\n\n').map((section, index) => {
                    if (section.startsWith('**') && section.endsWith('**')) {
                      // Main headers
                      return (
                        <h3 key={index} className="text-xl font-bold text-foreground mt-6 mb-3">
                          {section.replace(/\*\*/g, '')}
                        </h3>
                      );
                    } else if (section.startsWith('🔹 **') && section.includes('**')) {
                      // Plugin sections
                      const [title, ...content] = section.split('\n');
                      const cleanTitle = title.replace('🔹 **', '').replace('**', '');
                      return (
                        <div key={index} className="space-y-2">
                          <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <span className="text-primary">🔹</span>
                            {cleanTitle}
                          </h4>
                          <div className="pl-6 text-muted-foreground leading-relaxed">
                            {content.join('\n')}
                          </div>
                        </div>
                      );
                    } else if (section.includes(':')) {
                      // Stack tecnológico and other key-value sections
                      const lines = section.split('\n');
                      return (
                        <div key={index} className="space-y-2">
                          {lines.map((line, lineIndex) => {
                            if (line.includes(':') && line.includes('|')) {
                              // Stack tecnológico line with separators
                              const [label, ...parts] = line.split(':');
                              return (
                                <div key={lineIndex} className="space-y-1">
                                  <h4 className="font-semibold text-foreground">{label.trim()}:</h4>
                                  <div className="pl-4 text-muted-foreground">
                                    {parts.join(':').split('|').map((part, partIndex) => (
                                      <div key={partIndex} className="mb-1">
                                        <span className="font-medium">{part.trim()}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            } else if (line.includes(':')) {
                              // Regular key-value lines
                              const [label, value] = line.split(':');
                              return (
                                <div key={lineIndex} className="flex gap-2">
                                  <span className="font-semibold text-foreground">{label.trim()}:</span>
                                  <span className="text-muted-foreground">{value?.trim()}</span>
                                </div>
                              );
                            } else {
                              return (
                                <p key={lineIndex} className="text-muted-foreground leading-relaxed">
                                  {line}
                                </p>
                              );
                            }
                          })}
                        </div>
                      );
                    } else {
                      // Regular paragraphs
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed">
                          {section}
                        </p>
                      );
                    }
                  })}
                </div>
              )}

              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Galería del Proyecto</h4>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg border border-border/50 hover:border-border transition-all duration-200 flex-shrink-0"
                        onClick={() => openImageModal(image)}
                      >
                        {/* Optimized thumbnail with placeholder */}
                        <img
                          src={getThumbnailUrl(image)}
                          alt={`${title} - Screenshot ${index + 1}`}
                          className="w-32 h-24 object-cover group-hover:scale-105 transition-transform duration-200"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = generatePlaceholder(128, 96, `Screenshot ${index + 1}`);
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                          <div className="text-white text-xs font-medium">Ver ampliada</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* External Link Button */}
              {url && (
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visitar {title}
                    </a>
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-3xl max-h-[85vh] w-full">
            <img
              src={getFullSizeUrl(selectedImage)}
              alt="Imagen ampliada"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Close Button - Top Right Corner */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors shadow-lg z-10"
              aria-label="Cerrar imagen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}