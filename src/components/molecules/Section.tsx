import clsx from "clsx";
import type { ReactNode, CSSProperties } from "react";

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
  bgSize?: CSSProperties["backgroundSize"];
  bgPosition?: CSSProperties["backgroundPosition"];
  bgRepeat?: CSSProperties["backgroundRepeat"];
  overlay?: string;
  className?: string;
  containerClassName?: string;
  disableContainer?: boolean;
}

export default function Section({
  children,
  bgColor = "bg-background",
  bgImage,
  bgSize = "cover",
  bgPosition = "center",
  bgRepeat = "no-repeat",
  overlay = "bg-black/40 dark:bg-black/60",
  className,
  containerClassName,
  disableContainer = false,
}: SectionProps) {
  return (
    <section
      className={clsx(bgColor, "py-16 relative overflow-hidden", className)}
      style={
        bgImage
          ? ({
            backgroundImage: `url(${bgImage})`,
            backgroundSize: bgSize,
            backgroundPosition: bgPosition,
            backgroundRepeat: bgRepeat,
          } as CSSProperties)
          : {}
      }
    >
      {bgImage && overlay && <div className={clsx("absolute inset-0", overlay)} />}

      <div
        className={clsx(
          "relative",
          !disableContainer && "container mx-auto px-6 md:px-12",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
