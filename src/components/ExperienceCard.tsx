import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Eye } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  technologies: string[];
  onClick?: () => void;
  isClickable?: boolean;
}

export function ExperienceCard({ 
  title, 
  description, 
  technologies, 
  onClick, 
  isClickable = false 
}: ExperienceCardProps) {
  return (
    <Card 
      className={`mb-4 bg-card/50 border-border/50 transition-all duration-200 ${
        isClickable 
          ? 'hover:bg-card/80 hover:border-border cursor-pointer hover:shadow-lg' 
          : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex-1">{title}</CardTitle>
          {isClickable && (
            <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {isClickable && (
          <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
            <Eye className="w-3 h-3" />
            Clic para ver detalles completos
          </p>
        )}
      </CardContent>
    </Card>
  );
}
