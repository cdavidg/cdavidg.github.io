import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChevronDown, ChevronUp, ExternalLink, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { OptimizedThumbnail } from "./OptimizedThumbnail";

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
                      <OptimizedThumbnail
                        key={index}
                        src={image}
                        alt={`${title} - Screenshot ${index + 1}`}
                        onClick={() => openImageModal(image)}
                        index={index}
                      />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-8 md:p-16"
          onClick={closeImageModal}
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        >
          {/* Container with padding for button space */}
          <div className="relative w-full max-w-4xl">
            {/* Close Button - Always outside at top */}
            <button
              onClick={closeImageModal}
              className="absolute -top-16 right-0 text-white bg-red-500 hover:bg-red-600 rounded-full p-3 transition-all duration-200 shadow-2xl hover:scale-110"
              aria-label="Cerrar imagen"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Image - constrained to leave space for button */}
            <div className="w-full max-h-[75vh] flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}