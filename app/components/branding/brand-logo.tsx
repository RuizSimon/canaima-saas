type BrandLogoProps = {
  variant: 'blue' | 'white';
  className?: string;
};

const logoMap = {
  blue: '/Logo%20(1).png',
  white: '/Logo%20(2).png',
};

export function BrandLogo({ variant, className = '' }: BrandLogoProps) {
  return (
    <div
      role="img"
      aria-label={`Logo Canaima Express ${variant}`}
      className={`bg-contain bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${logoMap[variant]})` }}
    />
  );
}
