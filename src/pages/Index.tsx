import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, FlaskConical, Archive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { SectionDivider, TexturedSection } from '@/components/SectionDivider';
import heroFrog from '@/assets/hero-frog.jpg';

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      titleKey: 'nav.members',
      descKey: 'about.description',
      link: '/members',
    },
    {
      icon: FlaskConical,
      titleKey: 'nav.research',
      descKey: 'research.projects',
      link: '/research',
    },
    {
      icon: BookOpen,
      titleKey: 'nav.services',
      descKey: 'services.title',
      link: '/services',
    },
    {
      icon: Archive,
      titleKey: 'nav.museum',
      descKey: 'museum.title',
      link: '/museum',
    },
  ];

  const researchAreas = [
    { key: 'research.biodiversity', icon: '🌿' },
    { key: 'research.conservation', icon: '🦎' },
    { key: 'research.ecology', icon: '🏞️' },
    { key: 'research.evolution', icon: '🧬' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroFrog}
            alt="Tree frog in tropical forest"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-secondary/60" />
        </div>
        
        <TexturedSection texture="scales" className="relative z-10 py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="animate-fade-in font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>
              <p className="mt-6 animate-slide-up text-lg text-primary-foreground/90 md:text-xl stagger-1">
                {t('hero.subtitle')}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up stagger-2">
                <Link to="/research" className="btn-academic-outline border-cream text-cream hover:bg-cream hover:text-primary">
                  {t('hero.cta.research')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/members" className="btn-academic bg-cream text-primary hover:bg-cream/90">
                  {t('hero.cta.contact')}
                </Link>
              </div>
            </div>
          </div>
        </TexturedSection>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="section-header centered font-display text-3xl font-bold text-foreground md:text-4xl">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Research Areas Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area, index) => (
              <div
                key={area.key}
                className="card-academic rounded-lg p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl">{area.icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {t(area.key)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Features Section */}
      <TexturedSection texture="membrane" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Link
                key={feature.titleKey}
                to={feature.link}
                className="card-academic group rounded-lg p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {t(feature.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(feature.descKey)}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  {t('common.learnMore')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </TexturedSection>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-50 texture-spots" />
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
                {t('museum.title')}
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                {t('about.description')}
              </p>
              <Link to="/museum" className="btn-academic mt-8 bg-cream text-primary hover:bg-cream/90">
                {t('museum.visit')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
