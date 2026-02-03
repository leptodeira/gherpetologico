import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { TexturedSection } from '@/components/SectionDivider';
import { Search, Microscope, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  features: string[];
  featuresEs: string[];
}

const services: Service[] = [
  {
    id: 'identification',
    icon: Search,
    title: 'Species Identification',
    titleEs: 'Identificación de Especies',
    description: 'Professional identification services for amphibians and reptiles using morphological and molecular techniques.',
    descriptionEs: 'Servicios profesionales de identificación de anfibios y reptiles utilizando técnicas morfológicas y moleculares.',
    features: [
      'Morphological identification',
      'DNA barcoding',
      'Specimen verification',
      'Photo identification',
    ],
    featuresEs: [
      'Identificación morfológica',
      'Código de barras de ADN',
      'Verificación de especímenes',
      'Identificación por foto',
    ],
  },
  {
    id: 'consulting',
    icon: Microscope,
    title: 'Environmental Consulting',
    titleEs: 'Consultoría Ambiental',
    description: 'Expert consulting services for environmental impact assessments and biodiversity surveys.',
    descriptionEs: 'Servicios de consultoría experta para evaluaciones de impacto ambiental y estudios de biodiversidad.',
    features: [
      'Environmental impact assessments',
      'Biodiversity surveys',
      'Habitat evaluation',
      'Conservation planning',
    ],
    featuresEs: [
      'Evaluaciones de impacto ambiental',
      'Estudios de biodiversidad',
      'Evaluación de hábitat',
      'Planificación de conservación',
    ],
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational Programs',
    titleEs: 'Programas Educativos',
    description: 'Workshops, courses, and training programs for students, researchers, and the general public.',
    descriptionEs: 'Talleres, cursos y programas de capacitación para estudiantes, investigadores y público en general.',
    features: [
      'Field courses',
      'Laboratory workshops',
      'Public lectures',
      'School programs',
    ],
    featuresEs: [
      'Cursos de campo',
      'Talleres de laboratorio',
      'Conferencias públicas',
      'Programas escolares',
    ],
  },
  {
    id: 'fieldwork',
    icon: MapPin,
    title: 'Field Research Support',
    titleEs: 'Apoyo a Investigación de Campo',
    description: 'Logistical support and expertise for field research projects in herpetology.',
    descriptionEs: 'Apoyo logístico y experiencia para proyectos de investigación de campo en herpetología.',
    features: [
      'Field equipment',
      'Research permits',
      'Local expertise',
      'Data collection protocols',
    ],
    featuresEs: [
      'Equipo de campo',
      'Permisos de investigación',
      'Experiencia local',
      'Protocolos de recolección de datos',
    ],
  },
];

const Services = () => {
  const { t, language } = useLanguage();

  const getLocalizedField = (item: Service, field: 'title' | 'description') => {
    if (language === 'es') {
      const esField = `${field}Es` as keyof Service;
      return item[esField] as string;
    }
    return item[field];
  };

  const getLocalizedFeatures = (item: Service) => {
    return language === 'es' ? item.featuresEs : item.features;
  };

  return (
    <Layout>
      {/* Hero Header */}
      <TexturedSection texture="scales" className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            {t('services.title')}
          </h1>
        </div>
      </TexturedSection>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="card-academic rounded-xl p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {getLocalizedField(service, 'title')}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {getLocalizedField(service, 'description')}
                </p>
                <ul className="mt-6 space-y-2">
                  {getLocalizedFeatures(service).map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <TexturedSection texture="membrane" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">
              {language === 'es' ? '¿Interesado en nuestros servicios?' : 'Interested in our services?'}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'es'
                ? 'Contáctenos para discutir cómo podemos ayudar con su proyecto de investigación o consultoría.'
                : 'Contact us to discuss how we can help with your research or consulting project.'}
            </p>
            <Link to="/members" className="btn-academic mt-8">
              {t('common.contact')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </TexturedSection>
    </Layout>
  );
};

export default Services;
