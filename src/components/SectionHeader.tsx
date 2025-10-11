import React from "react";

interface SectionHeaderProps {
  tag: string;
  children: React.ReactNode;
}

export function SectionHeader({ tag, children }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded mb-3">
        <code className="text-primary">&lt;{tag}&gt;</code>
      </div>
      <h2 className="flex items-center gap-2">{children}</h2>
    </div>
  );
}
