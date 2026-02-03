import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="lang-toggle">
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={language === 'es' ? 'active' : ''}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
