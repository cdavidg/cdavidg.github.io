import { useRef } from 'react';
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

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

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
            {/* Tabs row with language selector */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="relative group" ref={languageSelectorRef}>
                <button
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm rounded-md transition-colors hover:bg-[#21262d] focus:bg-[#21262d] focus:outline-none"
                  style={{ color: '#e6edf3' }}
                  type="button"
                  data-lang-trigger="true"
                >
                  <Globe className="w-4 h-4" />
                  <span>{languages.find((l) => l.code === currentLanguage)?.flag}</span>
                  <span className="text-xs sm:text-sm" style={{ color: '#7d8590' }}>
                    {languages.find((l) => l.code === currentLanguage)?.label}
                  </span>
                </button>

                {/* Dropdown */}
                <div
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-200"
                  style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d'
                  }}
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          const trigger = languageSelectorRef.current?.querySelector<HTMLButtonElement>('[data-lang-trigger="true"]');
                          trigger?.blur();
                        }}
                        className="w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors"
                        style={{
                          color: currentLanguage === lang.code ? '#e6edf3' : '#7d8590',
                          backgroundColor: currentLanguage === lang.code ? '#21262d' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#21262d';
                          e.currentTarget.style.color = '#e6edf3';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = currentLanguage === lang.code ? '#21262d' : 'transparent';
                          e.currentTarget.style.color = currentLanguage === lang.code ? '#e6edf3' : '#7d8590';
                        }}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <nav className="flex flex-wrap items-center gap-2 sm:gap-4 sm:flex-1 justify-start mt-2 sm:mt-0">
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

            {/* Title */}
            <h1
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ color: '#e6edf3' }}
            >
              CV David Guerra
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
