import { Badge } from "./ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="px-3 py-1">
      {skill}
    </Badge>
  );
}
