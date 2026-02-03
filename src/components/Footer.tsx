import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span>HerpetoLab</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              {t('footer.university')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">{t('nav.research')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/research" className="hover:text-primary-foreground transition-colors">{t('research.biodiversity')}</Link></li>
              <li><Link to="/research" className="hover:text-primary-foreground transition-colors">{t('research.conservation')}</Link></li>
              <li><Link to="/research" className="hover:text-primary-foreground transition-colors">{t('research.ecology')}</Link></li>
              <li><Link to="/research" className="hover:text-primary-foreground transition-colors">{t('research.publications')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">{t('services.identification')}</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">{t('services.consulting')}</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">{t('services.education')}</Link></li>
              <li><Link to="/museum" className="hover:text-primary-foreground transition-colors">{t('museum.visit')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">{t('common.contact')}</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>herpetolab@university.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Department of Biology<br />University Campus, Building 5</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
