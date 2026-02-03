import { useTheme } from '@/contexts/ThemeContext';

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
  const { theme } = useTheme();

  const textureClass = theme.textures.enabled ? `texture-${theme.textures.type}` : '';

  return (
    <div className={`divider-organic ${textureClass} ${className}`} />
  );
}

interface TexturedSectionProps {
  children: React.ReactNode;
  texture?: 'scales' | 'spots' | 'membrane' | 'none';
  className?: string;
}

export function TexturedSection({ children, texture = 'scales', className = '' }: TexturedSectionProps) {
  const { theme } = useTheme();

  const textureClass = theme.textures.enabled && texture !== 'none' 
    ? `texture-${texture}` 
    : '';

  return (
    <section className={`${textureClass} ${className}`}>
      {children}
    </section>
  );
}
