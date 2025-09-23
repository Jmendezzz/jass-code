
interface LogoProps {
  size?: number; 
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({
  size,
  width,
  height,
  className = "",
}: LogoProps) {
  const finalWidth = size ?? width ?? 40;  
  const finalHeight = size ?? height ?? 40;

  return (
    <img
      src="/logo.png" 
      alt="JASS Code Logo"
      width={finalWidth}
      height={finalHeight}
      className={`object-contain ${className}`}
    />
  );
}
