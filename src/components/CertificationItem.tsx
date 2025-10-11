import { useState } from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CertificationItemProps {
  title: string;
  institution: string;
  year: string;
  type: "degree" | "certification";
  certificateImage?: string;
}

export function CertificationItem({ 
  title, 
  institution, 
  year, 
  type,
  certificateImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzYwMTM1MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
}: CertificationItemProps) {
  const [open, setOpen] = useState(false);
  const Icon = type === "degree" ? GraduationCap : Award;

  return (
    <div className="flex items-start gap-3 pb-4 border-b border-border/50 relative group">
      <Icon className="w-5 h-5 text-primary mt-1" />
      <div className="flex-1">
        <h4 className="text-foreground">{title}</h4>
        <p className="text-muted-foreground">{institution}</p>
        <p className="text-muted-foreground">{year}</p>
      </div>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button 
            className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent rounded-md"
            aria-label="View certificate"
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {institution} - {year}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <ImageWithFallback
              src={certificateImage}
              alt={`${title} certificate`}
              className="w-full rounded-lg border border-border"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
