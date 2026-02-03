import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { TexturedSection, SectionDivider } from '@/components/SectionDivider';
import { FileText, ExternalLink } from 'lucide-react';

interface ResearchProject {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  area: string;
  areaEs: string;
  status: 'active' | 'completed';
}

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
}

const projects: ResearchProject[] = [
  {
    id: '1',
    title: 'Amphibian Population Monitoring in Tropical Forests',
    titleEs: 'Monitoreo de Poblaciones de Anfibios en Bosques Tropicales',
    description: 'Long-term monitoring program to assess amphibian population trends and identify conservation priorities in tropical forest ecosystems.',
    descriptionEs: 'Programa de monitoreo a largo plazo para evaluar tendencias poblacionales de anfibios e identificar prioridades de conservación en ecosistemas de bosque tropical.',
    area: 'Conservation',
    areaEs: 'Conservación',
    status: 'active',
  },
  {
    id: '2',
    title: 'Phylogenomics of Neotropical Lizards',
    titleEs: 'Filogenómica de Lagartijas Neotropicales',
    description: 'Using next-generation sequencing to resolve evolutionary relationships among diverse lizard lineages.',
    descriptionEs: 'Uso de secuenciación de nueva generación para resolver relaciones evolutivas entre diversos linajes de lagartijas.',
    area: 'Evolution',
    areaEs: 'Evolución',
    status: 'active',
  },
  {
    id: '3',
    title: 'Climate Change Impacts on Salamander Distributions',
    titleEs: 'Impactos del Cambio Climático en la Distribución de Salamandras',
    description: 'Modeling current and future distributions of endemic salamander species under climate change scenarios.',
    descriptionEs: 'Modelado de distribuciones actuales y futuras de especies endémicas de salamandras bajo escenarios de cambio climático.',
    area: 'Ecology',
    areaEs: 'Ecología',
    status: 'active',
  },
  {
    id: '4',
    title: 'Biodiversity Assessment of Herpetofauna',
    titleEs: 'Evaluación de Biodiversidad de Herpetofauna',
    description: 'Comprehensive inventory and documentation of reptile and amphibian diversity in protected areas.',
    descriptionEs: 'Inventario y documentación integral de la diversidad de reptiles y anfibios en áreas protegidas.',
    area: 'Biodiversity',
    areaEs: 'Biodiversidad',
    status: 'completed',
  },
];

const publications: Publication[] = [
  {
    id: '1',
    title: 'Patterns of amphibian diversity and endemism in tropical montane forests',
    authors: 'Martínez E, Rodríguez C, Chen S',
    journal: 'Journal of Herpetology',
    year: 2024,
    doi: '10.1234/jh.2024.001',
  },
  {
    id: '2',
    title: 'A new species of glass frog from the cloud forests of the Andes',
    authors: 'Rodríguez C, Torres MA, García A',
    journal: 'Zootaxa',
    year: 2023,
    doi: '10.1234/zootaxa.2023.456',
  },
  {
    id: '3',
    title: 'Conservation genetics of endangered salamander populations',
    authors: 'Chen S, García A, Wilson J',
    journal: 'Conservation Genetics',
    year: 2023,
    doi: '10.1234/cg.2023.789',
  },
  {
    id: '4',
    title: 'Effects of habitat fragmentation on lizard community structure',
    authors: 'Torres MA, Pérez LF, Martínez E',
    journal: 'Biological Conservation',
    year: 2022,
    doi: '10.1234/bc.2022.123',
  },
];

const Research = () => {
  const { t, language } = useLanguage();

  const getLocalizedField = (item: ResearchProject, field: 'title' | 'description' | 'area') => {
    if (language === 'es') {
      const esField = `${field}Es` as keyof ResearchProject;
      return item[esField] as string;
    }
    return item[field];
  };

  const activeProjects = projects.filter((p) => p.status === 'active');
  const completedProjects = projects.filter((p) => p.status === 'completed');

  return (
    <Layout>
      {/* Hero Header */}
      <TexturedSection texture="scales" className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            {t('research.title')}
          </h1>
        </div>
      </TexturedSection>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['biodiversity', 'conservation', 'ecology', 'evolution'].map((area, index) => (
              <div
                key={area}
                className="card-academic rounded-lg p-6 text-center"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-3xl">
                    {area === 'biodiversity' && '🌿'}
                    {area === 'conservation' && '🦎'}
                    {area === 'ecology' && '🏞️'}
                    {area === 'evolution' && '🧬'}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {t(`research.${area}`)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Current Projects */}
      <TexturedSection texture="membrane" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-display text-2xl font-bold text-foreground md:text-3xl">
            {t('research.projects')}
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {activeProjects.map((project) => (
              <div key={project.id} className="card-academic rounded-lg p-6">
                <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                  {getLocalizedField(project, 'area')}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {getLocalizedField(project, 'title')}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {getLocalizedField(project, 'description')}
                </p>
              </div>
            ))}
          </div>

          {completedProjects.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-6 font-display text-xl font-semibold text-muted-foreground">
                {language === 'es' ? 'Proyectos Completados' : 'Completed Projects'}
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                {completedProjects.map((project) => (
                  <div key={project.id} className="rounded-lg border border-border bg-card/50 p-4">
                    <h4 className="font-medium text-foreground">
                      {getLocalizedField(project, 'title')}
                    </h4>
                    <span className="text-sm text-muted-foreground">
                      {getLocalizedField(project, 'area')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </TexturedSection>

      <SectionDivider />

      {/* Publications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-header font-display text-2xl font-bold text-foreground md:text-3xl">
            {t('research.publications')}
          </h2>
          <div className="mt-8 space-y-4">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <p className="text-sm text-accent">
                    {pub.journal}, {pub.year}
                  </p>
                </div>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
