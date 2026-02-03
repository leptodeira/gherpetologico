import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { TexturedSection, SectionDivider } from '@/components/SectionDivider';
import { Archive, MapPin, Clock, Calendar } from 'lucide-react';

interface SpecimenStats {
  label: string;
  labelEs: string;
  count: string;
}

const stats: SpecimenStats[] = [
  { label: 'Total Specimens', labelEs: 'Especímenes Totales', count: '25,000+' },
  { label: 'Amphibian Species', labelEs: 'Especies de Anfibios', count: '450' },
  { label: 'Reptile Species', labelEs: 'Especies de Reptiles', count: '380' },
  { label: 'Type Specimens', labelEs: 'Especímenes Tipo', count: '120' },
];

const collections = [
  {
    title: 'Amphibian Collection',
    titleEs: 'Colección de Anfibios',
    description: 'Comprehensive collection of preserved amphibian specimens including frogs, salamanders, and caecilians.',
    descriptionEs: 'Colección integral de especímenes preservados de anfibios incluyendo ranas, salamandras y cecilias.',
    highlights: ['Anurans (frogs & toads)', 'Caudates (salamanders)', 'Caecilians'],
    highlightsEs: ['Anuros (ranas y sapos)', 'Caudados (salamandras)', 'Cecilias'],
  },
  {
    title: 'Reptile Collection',
    titleEs: 'Colección de Reptiles',
    description: 'Extensive holdings of squamates, turtles, and crocodilians from diverse geographic regions.',
    descriptionEs: 'Extensa colección de escamados, tortugas y cocodrilianos de diversas regiones geográficas.',
    highlights: ['Lizards & snakes', 'Turtles & tortoises', 'Crocodilians'],
    highlightsEs: ['Lagartijas y serpientes', 'Tortugas', 'Cocodrilianos'],
  },
  {
    title: 'Tissue & DNA Collection',
    titleEs: 'Colección de Tejidos y ADN',
    description: 'Frozen tissue samples and extracted DNA for molecular research and genetic studies.',
    descriptionEs: 'Muestras de tejido congelado y ADN extraído para investigación molecular y estudios genéticos.',
    highlights: ['Tissue samples', 'DNA extractions', 'Voucher specimens'],
    highlightsEs: ['Muestras de tejido', 'Extracciones de ADN', 'Especímenes de referencia'],
  },
];

const Museum = () => {
  const { language } = useLanguage();

  const getLocalizedStat = (stat: SpecimenStats) =>
    language === 'es' ? stat.labelEs : stat.label;

  return (
    <Layout>
      {/* Hero Header */}
      <TexturedSection texture="scales" className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            {language === 'es' ? 'Colección Herpetológica' : 'Herpetological Collection'}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            {language === 'es'
              ? 'Una de las colecciones más completas de anfibios y reptiles en la región'
              : 'One of the most comprehensive amphibian and reptile collections in the region'}
          </p>
        </div>
      </TexturedSection>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-academic rounded-lg p-6 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Archive className="h-6 w-6 text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-primary">{stat.count}</p>
                <p className="mt-1 text-sm text-muted-foreground">{getLocalizedStat(stat)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Collections */}
      <TexturedSection texture="membrane" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-display text-2xl font-bold text-foreground md:text-3xl">
            {language === 'es' ? 'Nuestras Colecciones' : 'Our Collections'}
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.title} className="card-academic rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {language === 'es' ? collection.titleEs : collection.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {language === 'es' ? collection.descriptionEs : collection.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {(language === 'es' ? collection.highlightsEs : collection.highlights).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </TexturedSection>

      <SectionDivider />

      {/* Visit Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-header centered text-center font-display text-2xl font-bold text-foreground md:text-3xl">
              {language === 'es' ? 'Visite la Colección' : 'Visit the Collection'}
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {language === 'es' ? 'Ubicación' : 'Location'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'es' 
                    ? 'Edificio de Biología, Piso 3, Sala 305'
                    : 'Biology Building, Floor 3, Room 305'}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {language === 'es' ? 'Horario' : 'Hours'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'es'
                    ? 'Lunes - Viernes: 9:00 - 17:00'
                    : 'Monday - Friday: 9:00 AM - 5:00 PM'}
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {language === 'es' ? 'Citas' : 'Appointments'}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {language === 'es'
                    ? 'Se requiere cita previa para visitas de investigación'
                    : 'Appointment required for research visits'}
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-secondary p-8 text-center">
              <p className="text-secondary-foreground">
                {language === 'es'
                  ? 'Para programar una visita o solicitar préstamos de especímenes, contacte al curador de la colección.'
                  : 'To schedule a visit or request specimen loans, please contact the collection curator.'}
              </p>
              <a
                href="mailto:herpetolab@university.edu"
                className="btn-academic mt-6 bg-cream text-primary hover:bg-cream/90"
              >
                {language === 'es' ? 'Contactar Curador' : 'Contact Curator'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Museum;
