import { Button } from "./ui/button";
import { Languages } from "lucide-react";

interface ModernLanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: "es", label: "ES", fullName: "Español" },
  { code: "en", label: "EN", fullName: "English" },
  { code: "ar", label: "AR", fullName: "العربية" },
];

export function ModernLanguageSelector({ currentLanguage, onLanguageChange }: ModernLanguageSelectorProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Languages className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Language</span>
      </div>
      <div className="flex gap-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={currentLanguage === lang.code ? "default" : "outline"}
            size="sm"
            onClick={() => onLanguageChange(lang.code)}
            className="flex-1 transition-all"
          >
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
