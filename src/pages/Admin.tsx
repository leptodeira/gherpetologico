import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme, defaultTheme } from '@/contexts/ThemeContext';
import { Layout } from '@/components/Layout';
import { TexturedSection } from '@/components/SectionDivider';
import { Palette, Layers, RotateCcw, Save, Check } from 'lucide-react';

const colorFields = [
  { key: 'primary', label: 'Primary (Deep Forest)', labelEs: 'Primario (Bosque Profundo)' },
  { key: 'secondary', label: 'Secondary (Dark Moss)', labelEs: 'Secundario (Musgo Oscuro)' },
  { key: 'accent', label: 'Accent (Muted Olive)', labelEs: 'Acento (Oliva Apagado)' },
  { key: 'background', label: 'Background (Warm Gray)', labelEs: 'Fondo (Gris Cálido)' },
  { key: 'cream', label: 'Cream Highlights', labelEs: 'Reflejos Crema' },
  { key: 'gold', label: 'Gold Accents', labelEs: 'Acentos Dorados' },
] as const;

const textureOptions = [
  { value: 'scales', label: 'Scales', labelEs: 'Escamas' },
  { value: 'spots', label: 'Spots', labelEs: 'Manchas' },
  { value: 'membrane', label: 'Membrane', labelEs: 'Membrana' },
] as const;

const Admin = () => {
  const { t, language } = useLanguage();
  const { theme, updateColors, updateTextures, resetTheme } = useTheme();
  const [saved, setSaved] = useState(false);

  const handleColorChange = (key: string, value: string) => {
    updateColors({ [key]: value });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const getLabel = (field: typeof colorFields[number]) =>
    language === 'es' ? field.labelEs : field.label;

  const getTextureLabel = (option: typeof textureOptions[number]) =>
    language === 'es' ? option.labelEs : option.label;

  return (
    <Layout>
      {/* Hero Header */}
      <TexturedSection texture="scales" className="bg-primary py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            {t('admin.title')}
          </h1>
        </div>
      </TexturedSection>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Color Palette Section */}
            <div className="card-academic rounded-xl p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {t('admin.colors')}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {colorFields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {getLabel(field)}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={theme.colors[field.key as keyof typeof theme.colors]}
                        onChange={(e) => handleColorChange(field.key, e.target.value)}
                        className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="H S% L%"
                      />
                      <div
                        className="h-10 w-10 rounded-md border border-border shadow-sm"
                        style={{ backgroundColor: `hsl(${theme.colors[field.key as keyof typeof theme.colors]})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Texture Settings Section */}
            <div className="card-academic rounded-xl p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {t('admin.textures')}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Enable Textures */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">
                    {language === 'es' ? 'Habilitar Texturas' : 'Enable Textures'}
                  </label>
                  <button
                    onClick={() => updateTextures({ enabled: !theme.textures.enabled })}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      theme.textures.enabled ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                        theme.textures.enabled ? 'translate-x-5' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Texture Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {language === 'es' ? 'Tipo de Textura' : 'Texture Type'}
                  </label>
                  <div className="flex gap-2">
                    {textureOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateTextures({ type: option.value as 'scales' | 'spots' | 'membrane' })}
                        className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                          theme.textures.type === option.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                      >
                        {getTextureLabel(option)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Opacity Slider */}
                <div className="space-y-2">
                  <label className="flex justify-between text-sm font-medium text-foreground">
                    <span>{language === 'es' ? 'Opacidad' : 'Opacity'}</span>
                    <span className="font-mono text-muted-foreground">
                      {(theme.textures.opacity * 100).toFixed(0)}%
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.3"
                    step="0.01"
                    value={theme.textures.opacity}
                    onChange={(e) => updateTextures({ opacity: parseFloat(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Scale Slider */}
                <div className="space-y-2">
                  <label className="flex justify-between text-sm font-medium text-foreground">
                    <span>{language === 'es' ? 'Escala' : 'Scale'}</span>
                    <span className="font-mono text-muted-foreground">
                      {theme.textures.scale.toFixed(1)}x
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={theme.textures.scale}
                    onChange={(e) => updateTextures({ scale: parseFloat(e.target.value) })}
                    className="w-full accent-primary"
                  />
                </div>

                {/* Preview */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    {language === 'es' ? 'Vista Previa' : 'Preview'}
                  </label>
                  <div
                    className={`h-24 rounded-lg border border-border ${
                      theme.textures.enabled ? `texture-${theme.textures.type}` : ''
                    }`}
                    style={{
                      backgroundColor: `hsl(${theme.colors.background})`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={resetTheme}
                className="btn-academic-outline flex items-center justify-center gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                {language === 'es' ? 'Restablecer' : 'Reset to Default'}
              </button>
              <button
                onClick={handleSave}
                className="btn-academic flex items-center justify-center gap-2"
              >
                {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
                {saved
                  ? language === 'es' ? 'Guardado' : 'Saved!'
                  : t('admin.save')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
