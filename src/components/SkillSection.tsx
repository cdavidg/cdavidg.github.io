import { SkillBadge } from "./SkillBadge";

interface SkillSectionProps {
  title: string;
  icon: string;
  skills: string[];
}

export function SkillSection({ title, icon, skills }: SkillSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
