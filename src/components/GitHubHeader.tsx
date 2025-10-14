import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, FolderKanban, Sparkles } from 'lucide-react';
import { Language } from '../lib/translations';

interface GitHubHeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function GitHubHeader({ currentLanguage, onLanguageChange }: GitHubHeaderProps) {
  const location = useLocation();
  const languageSelectorRef = useRef<HTMLDivElement | null>(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  const tabs = [
    { path: '/', label: 'Code', Icon: Code2 },
    { path: '/projects', label: 'Projects', Icon: FolderKanban },
    { path: '/demos', label: 'Demos', Icon: Sparkles },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  const activeLanguage = languages.find((lang) => lang.code === currentLanguage) ?? languages[0];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!languageSelectorRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header
      className="border-b"
      style={{
        backgroundColor: '#0d1117',
        borderColor: '#30363d'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1600px] py-4 sm:py-5">
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Title row with language selector */}
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <h1
                className="text-2xl sm:text-3xl font-semibold tracking-tight"
                style={{ color: '#e6edf3', paddingLeft: '10px', paddingTop: '25px', paddingRight: '10px', fontSize: '20px' }}
              >
                CV David Guerra
              </h1>

              <div
                ref={languageSelectorRef}
                className="absolute right-0 top-[25px] self-end sm:static sm:self-auto sm:top-auto" 
                style={{ zIndex: 10, paddingTop: '25px', paddingRight: '20px', paddingRight: '10px' }}
              >
                <div className="relative">
                  <button
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm rounded-md transition-colors hover:bg-[#21262d] focus:bg-[#21262d] focus:outline-none"
                    style={{ color: '#e6edf3' }}
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={languageMenuOpen}
                    onClick={() => setLanguageMenuOpen((open) => !open)}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{activeLanguage.flag}</span>
                    <span className="text-sm font-medium" style={{ color: '#7d8590' }}>
                      {activeLanguage.label}
                    </span>
                  </button>

                  <div
                    className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg transition-all duration-200 ${languageMenuOpen ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-1'}`}
                    style={{
                      backgroundColor: '#161b22',
                      border: '1px solid #30363d'
                    }}
                    role="listbox"
                  >
                    <div className="py-1">
                      {languages.map((lang) => {
                        const isSelected = currentLanguage === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => {
                              onLanguageChange(lang.code);
                              setLanguageMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm transition-colors"
                            style={{
                              color: isSelected ? '#e6edf3' : '#7d8590',
                              backgroundColor: isSelected ? '#21262d' : 'transparent'
                            }}
                          >
                            <span>{lang.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 sm:gap-4" style={{ paddingLeft: '10px' }}>
              {tabs.map((tab) => {
                const Icon = tab.Icon;
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 border-b-2 text-sm sm:text-base transition-colors"
                    style={isActive(tab.path)
                      ? {
                          color: '#e6edf3',
                          borderColor: '#f78166',
                          fontWeight: '600'
                        }
                      : {
                          color: '#7d8590',
                          borderColor: 'transparent',
                          fontWeight: '400'
                        }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive(tab.path)) {
                        e.currentTarget.style.color = '#e6edf3';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(tab.path)) {
                        e.currentTarget.style.color = '#7d8590';
                      }
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
