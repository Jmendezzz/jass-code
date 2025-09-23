import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
  className?: string;
}

export default function Section({ children, bgColor = "bg-background", bgImage, className }: SectionProps) {
  return (
    <section
      className={clsx(bgColor, "py-16 relative overflow-hidden", className)}
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : {}
      }
    >
      {bgImage && (
        <>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </>
      )}

      <div className="relative container mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
}

