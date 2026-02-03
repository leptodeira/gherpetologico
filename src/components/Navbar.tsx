import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

const navItems = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/members', labelKey: 'nav.members' },
  { path: '/research', labelKey: 'nav.research' },
  { path: '/services', labelKey: 'nav.services' },
  { path: '/museum', labelKey: 'nav.museum' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">HerpetoLab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link
            to="/admin"
            className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            {t('nav.admin')}
          </Link>
        </div>

        {/* Right side: Language toggle + Mobile menu button */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <Link
              to="/admin"
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === '/admin'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.admin')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
