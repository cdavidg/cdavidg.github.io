import { SectionHeader } from "./SectionHeader";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface SoftSkillsSidebarProps {
  title: string;
  t: any;
}

const softSkillsData = [
  { 
    name: "technicalCommunication",
    color: "#60A5FA", // blue-400 - good contrast on dark
    percentage: 95 
  },
  { 
    name: "projectManagement",
    color: "#34D399", // emerald-400
    percentage: 90 
  },
  { 
    name: "autonomy",
    color: "#FBBF24", // amber-400
    percentage: 95 
  },
  { 
    name: "goalOriented",
    color: "#F87171", // red-400
    percentage: 92 
  },
];

const languagesData = [
  { 
    key: "spanish",
    level: "native"
  },
  { 
    key: "english",
    level: "professional"
  }
];

export function SoftSkillsSidebar({ title, t }: SoftSkillsSidebarProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mt-6">
      <SectionHeader tag={title}>{title}</SectionHeader>
      
      {/* Soft Skills */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm text-muted-foreground">Soft Skills</h3>
        <div className="space-y-3">
          {softSkillsData.map((skill, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-foreground">
                  {t[skill.name]}
                </span>
                <span className="text-xs text-muted-foreground">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 rounded-full transition-all duration-500 bg-foreground" 
                  style={{ 
                    width: `${skill.percentage}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Languages */}
      <div>
        <h3 className="mb-4 text-sm text-muted-foreground">{t.languages}</h3>
        <div className="space-y-2">
          {languagesData.map((lang, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="text-sm text-foreground">
                {t[lang.key]}
              </span>
              <Badge variant="secondary" className="text-xs">
                {t[lang.level]}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
