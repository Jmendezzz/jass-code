import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bgColor?: string; 
  className?: string; 
}

export default function Section({ children, bgColor = "bg-background", className }: SectionProps) {
  return (
    <section className={clsx(bgColor, "py-16", className)}>
      <div className="container mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}
