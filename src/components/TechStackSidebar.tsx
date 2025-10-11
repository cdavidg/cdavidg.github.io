import { SectionHeader } from "./SectionHeader";
import { Badge } from "./ui/badge";

interface TechItem {
  name: string;
  color: string;
  percentage: number;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

interface TechStackSidebarProps {
  title: string;
  categories: TechCategory[];
}

export function TechStackSidebar({ title, categories }: TechStackSidebarProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <SectionHeader tag={title}>{title}</SectionHeader>
      
      <div className="space-y-5">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h3 className="mb-3 text-sm text-muted-foreground">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIdx) => (
                <Badge 
                  key={itemIdx}
                  variant="outline"
                  className="text-sm transition-colors hover:bg-accent"
                >
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
