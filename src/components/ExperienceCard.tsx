import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ExperienceCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ExperienceCard({ title, description, technologies }: ExperienceCardProps) {
  return (
    <Card className="mb-4 bg-card/50 border-border/50">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
      </CardContent>
    </Card>
  );
}
