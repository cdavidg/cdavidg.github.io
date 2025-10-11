import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">
                    {fullDescription}
                  </div>
                </div>
              )}

              {/* Image Gallery */}
              {images.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Galería del Proyecto</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg border border-border/50 hover:border-border transition-all duration-200"
                        onClick={() => openImageModal(image)}
                      >
                        <img
                          src={image}
                          alt={`${title} - Screenshot ${index + 1}`}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `data:image/svg+xml;base64,${btoa(`
                              <svg width="200" height="128" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100%" height="100%" fill="#374151"/>
                                <text x="50%" y="50%" fill="#9CA3AF" text-anchor="middle" dy=".3em" style="font-family: system-ui, sans-serif; font-size: 12px;">
                                  Screenshot ${index + 1}
                                </text>
                              </svg>
                            `)}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <div className="text-white text-sm font-medium">Ver completa</div>
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
            >
              <ChevronUp className="w-6 h-6 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}