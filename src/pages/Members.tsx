import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/Layout';
import { MemberCard } from '@/components/MemberCard';
import { TexturedSection } from '@/components/SectionDivider';

interface Member {
  id: string;
  name: string;
  title: string;
  titleEs: string;
  email: string;
  specialization: string;
  specializationEs: string;
  description: string;
  descriptionEs: string;
  category: 'principal' | 'researcher' | 'student' | 'collaborator';
}

const membersData: Member[] = [
  {
    id: '1',
    name: 'Dr. Elena Martínez',
    title: 'Principal Investigator',
    titleEs: 'Investigadora Principal',
    email: 'e.martinez@university.edu',
    specialization: 'Amphibian Conservation Biology',
    specializationEs: 'Biología de Conservación de Anfibios',
    description: 'Leading research on amphibian population dynamics and conservation strategies in tropical ecosystems.',
    descriptionEs: 'Lidera investigaciones sobre dinámica poblacional de anfibios y estrategias de conservación en ecosistemas tropicales.',
    category: 'principal',
  },
  {
    id: '2',
    name: 'Dr. Carlos Rodríguez',
    title: 'Principal Investigator',
    titleEs: 'Investigador Principal',
    email: 'c.rodriguez@university.edu',
    specialization: 'Reptile Systematics & Evolution',
    specializationEs: 'Sistemática y Evolución de Reptiles',
    description: 'Specializing in phylogenetic analysis and evolutionary patterns of neotropical reptiles.',
    descriptionEs: 'Especializado en análisis filogenético y patrones evolutivos de reptiles neotropicales.',
    category: 'principal',
  },
  {
    id: '3',
    name: 'Dr. Sarah Chen',
    title: 'Research Associate',
    titleEs: 'Investigadora Asociada',
    email: 's.chen@university.edu',
    specialization: 'Molecular Ecology',
    specializationEs: 'Ecología Molecular',
    description: 'Using genetic tools to study population structure and connectivity in amphibian species.',
    descriptionEs: 'Utiliza herramientas genéticas para estudiar estructura poblacional y conectividad en especies de anfibios.',
    category: 'researcher',
  },
  {
    id: '4',
    name: 'Dr. Miguel Ángel Torres',
    title: 'Postdoctoral Researcher',
    titleEs: 'Investigador Postdoctoral',
    email: 'm.torres@university.edu',
    specialization: 'Behavioral Ecology',
    specializationEs: 'Ecología del Comportamiento',
    description: 'Studying reproductive behavior and communication systems in poison dart frogs.',
    descriptionEs: 'Estudia comportamiento reproductivo y sistemas de comunicación en ranas venenosas.',
    category: 'researcher',
  },
  {
    id: '5',
    name: 'Ana García',
    title: 'PhD Candidate',
    titleEs: 'Candidata a Doctorado',
    email: 'a.garcia@university.edu',
    specialization: 'Conservation Genetics',
    specializationEs: 'Genética de la Conservación',
    description: 'Researching genetic diversity and adaptation in endangered salamander populations.',
    descriptionEs: 'Investiga diversidad genética y adaptación en poblaciones de salamandras en peligro.',
    category: 'student',
  },
  {
    id: '6',
    name: 'Luis Fernando Pérez',
    title: 'PhD Candidate',
    titleEs: 'Candidato a Doctorado',
    email: 'l.perez@university.edu',
    specialization: 'Herpetofaunal Inventory',
    specializationEs: 'Inventario Herpetofaunístico',
    description: 'Conducting biodiversity surveys and species distribution modeling.',
    descriptionEs: 'Realiza muestreos de biodiversidad y modelado de distribución de especies.',
    category: 'student',
  },
  {
    id: '7',
    name: 'María Isabel López',
    title: 'Masters Student',
    titleEs: 'Estudiante de Maestría',
    email: 'm.lopez@university.edu',
    specialization: 'Ecotoxicology',
    specializationEs: 'Ecotoxicología',
    description: 'Investigating the effects of environmental contaminants on amphibian development.',
    descriptionEs: 'Investiga los efectos de contaminantes ambientales en el desarrollo de anfibios.',
    category: 'student',
  },
  {
    id: '8',
    name: 'Dr. James Wilson',
    title: 'Collaborating Researcher',
    titleEs: 'Investigador Colaborador',
    email: 'j.wilson@partneruniv.edu',
    specialization: 'Climate Change Biology',
    specializationEs: 'Biología del Cambio Climático',
    description: 'International collaborator studying climate impacts on herpetofauna.',
    descriptionEs: 'Colaborador internacional que estudia impactos climáticos en herpetofauna.',
    category: 'collaborator',
  },
];

const Members = () => {
  const { t, language } = useLanguage();

  const categories = [
    { key: 'principal', labelKey: 'members.principal' },
    { key: 'researcher', labelKey: 'members.researchers' },
    { key: 'student', labelKey: 'members.students' },
    { key: 'collaborator', labelKey: 'members.collaborators' },
  ];

  const getMembersByCategory = (category: string) =>
    membersData.filter((m) => m.category === category);

  const getLocalizedField = (member: Member, field: 'title' | 'specialization' | 'description') => {
    if (language === 'es') {
      const esField = `${field}Es` as keyof Member;
      return member[esField] as string;
    }
    return member[field];
  };

  return (
    <Layout>
      {/* Hero Header */}
      <TexturedSection texture="scales" className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            {t('members.title')}
          </h1>
        </div>
      </TexturedSection>

      {/* Members by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category) => {
            const members = getMembersByCategory(category.key);
            if (members.length === 0) return null;

            return (
              <div key={category.key} className="mb-16 last:mb-0">
                <h2 className="section-header font-display text-2xl font-bold text-foreground md:text-3xl">
                  {t(category.labelKey)}
                </h2>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {members.map((member) => (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      title={getLocalizedField(member, 'title')}
                      email={member.email}
                      specialization={getLocalizedField(member, 'specialization')}
                      description={getLocalizedField(member, 'description')}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Members;
