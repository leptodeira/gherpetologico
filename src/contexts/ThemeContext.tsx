import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  cream: string;
  gold: string;
}

interface TextureSettings {
  enabled: boolean;
  type: 'scales' | 'spots' | 'membrane';
  opacity: number;
  scale: number;
}

interface ThemeSettings {
  colors: ThemeColors;
  textures: TextureSettings;
}

const defaultTheme: ThemeSettings = {
  colors: {
    primary: '155 45% 18%',
    secondary: '90 25% 28%',
    accent: '75 22% 42%',
    background: '40 15% 94%',
    cream: '45 35% 92%',
    gold: '42 65% 48%',
  },
  textures: {
    enabled: true,
    type: 'scales',
    opacity: 0.08,
    scale: 1,
  },
};

interface ThemeContextType {
  theme: ThemeSettings;
  updateColors: (colors: Partial<ThemeColors>) => void;
  updateTextures: (textures: Partial<TextureSettings>) => void;
  resetTheme: () => void;
  applyTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeSettings>(() => {
    const saved = localStorage.getItem('lab-theme');
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  const applyTheme = useCallback(() => {
    const root = document.documentElement;
    
    // Apply colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
    
    // Apply texture settings
    root.style.setProperty('--texture-opacity', theme.textures.opacity.toString());
    root.style.setProperty('--texture-scale', theme.textures.scale.toString());
  }, [theme]);

  useEffect(() => {
    applyTheme();
    localStorage.setItem('lab-theme', JSON.stringify(theme));
  }, [theme, applyTheme]);

  const updateColors = useCallback((colors: Partial<ThemeColors>) => {
    setTheme(prev => ({
      ...prev,
      colors: { ...prev.colors, ...colors },
    }));
  }, []);

  const updateTextures = useCallback((textures: Partial<TextureSettings>) => {
    setTheme(prev => ({
      ...prev,
      textures: { ...prev.textures, ...textures },
    }));
  }, []);

  const resetTheme = useCallback(() => {
    setTheme(defaultTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateColors, updateTextures, resetTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { defaultTheme };
export type { ThemeSettings, ThemeColors, TextureSettings };
