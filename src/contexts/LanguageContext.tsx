import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

// Core translations for the site
const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.members': { en: 'Members', es: 'Miembros' },
  'nav.research': { en: 'Research', es: 'Investigación' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.museum': { en: 'Museum', es: 'Museo' },
  'nav.admin': { en: 'Admin', es: 'Admin' },

  // Hero Section
  'hero.title': { 
    en: 'Amphibian & Reptile Research Laboratory', 
    es: 'Laboratorio de Investigación de Anfibios y Reptiles' 
  },
  'hero.subtitle': { 
    en: 'Advancing herpetological science through research, conservation, and education', 
    es: 'Avanzando la ciencia herpetológica a través de la investigación, conservación y educación' 
  },
  'hero.cta.research': { en: 'Explore Research', es: 'Explorar Investigación' },
  'hero.cta.contact': { en: 'Contact Us', es: 'Contáctenos' },

  // About Section
  'about.title': { en: 'About Our Laboratory', es: 'Sobre Nuestro Laboratorio' },
  'about.description': { 
    en: 'Our laboratory is dedicated to the study and conservation of amphibians and reptiles. We conduct cutting-edge research on biodiversity, ecology, evolution, and conservation biology.', 
    es: 'Nuestro laboratorio está dedicado al estudio y conservación de anfibios y reptiles. Realizamos investigación de vanguardia en biodiversidad, ecología, evolución y biología de la conservación.' 
  },

  // Members
  'members.title': { en: 'Our Team', es: 'Nuestro Equipo' },
  'members.principal': { en: 'Principal Investigators', es: 'Investigadores Principales' },
  'members.researchers': { en: 'Researchers', es: 'Investigadores' },
  'members.students': { en: 'Graduate Students', es: 'Estudiantes de Posgrado' },
  'members.collaborators': { en: 'Collaborators', es: 'Colaboradores' },

  // Research
  'research.title': { en: 'Research Areas', es: 'Áreas de Investigación' },
  'research.projects': { en: 'Current Projects', es: 'Proyectos Actuales' },
  'research.publications': { en: 'Publications', es: 'Publicaciones' },
  'research.biodiversity': { en: 'Biodiversity', es: 'Biodiversidad' },
  'research.conservation': { en: 'Conservation', es: 'Conservación' },
  'research.ecology': { en: 'Ecology', es: 'Ecología' },
  'research.evolution': { en: 'Evolution', es: 'Evolución' },

  // Services
  'services.title': { en: 'Our Services', es: 'Nuestros Servicios' },
  'services.identification': { en: 'Species Identification', es: 'Identificación de Especies' },
  'services.consulting': { en: 'Environmental Consulting', es: 'Consultoría Ambiental' },
  'services.education': { en: 'Educational Programs', es: 'Programas Educativos' },
  'services.fieldwork': { en: 'Field Research Support', es: 'Apoyo a Investigación de Campo' },

  // Museum
  'museum.title': { en: 'Herpetological Collection', es: 'Colección Herpetológica' },
  'museum.specimens': { en: 'Specimens', es: 'Especímenes' },
  'museum.catalog': { en: 'Catalog', es: 'Catálogo' },
  'museum.visit': { en: 'Visit Us', es: 'Visítenos' },

  // Common
  'common.learnMore': { en: 'Learn More', es: 'Más Información' },
  'common.viewAll': { en: 'View All', es: 'Ver Todo' },
  'common.contact': { en: 'Contact', es: 'Contacto' },
  'common.email': { en: 'Email', es: 'Correo' },
  'common.phone': { en: 'Phone', es: 'Teléfono' },
  'common.address': { en: 'Address', es: 'Dirección' },

  // Footer
  'footer.copyright': { 
    en: '© 2024 Amphibian & Reptile Research Laboratory. All rights reserved.', 
    es: '© 2024 Laboratorio de Investigación de Anfibios y Reptiles. Todos los derechos reservados.' 
  },
  'footer.university': { en: 'University Research Center', es: 'Centro de Investigación Universitario' },

  // Admin
  'admin.title': { en: 'Administration Panel', es: 'Panel de Administración' },
  'admin.theme': { en: 'Theme Settings', es: 'Configuración del Tema' },
  'admin.content': { en: 'Content Management', es: 'Gestión de Contenido' },
  'admin.colors': { en: 'Color Palette', es: 'Paleta de Colores' },
  'admin.textures': { en: 'Textures', es: 'Texturas' },
  'admin.save': { en: 'Save Changes', es: 'Guardar Cambios' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };
export type { Language, Translations };
