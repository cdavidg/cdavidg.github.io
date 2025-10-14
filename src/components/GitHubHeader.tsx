import { Link, useLocation } from 'react-router-dom';
import { Globe, Code2, FolderKanban, Sparkles } from 'lucide-react';
import { Language } from '../lib/translations';

interface GitHubHeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function GitHubHeader({ currentLanguage, onLanguageChange }: GitHubHeaderProps) {
  const location = useLocation();
  
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
    <header className="border-b" style={{ 
      backgroundColor: '#0d1117', 
      borderColor: '#30363d'
    }}>
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Title */}
            <h1 className="text-base font-semibold whitespace-nowrap" style={{ color: '#e6edf3' }}>
              CV David Guerra
            </h1>

            {/* Navigation Tabs */}
            <nav className="flex items-center h-16 -mb-px">
              {tabs.map((tab) => {
                const Icon = tab.Icon;
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className="flex items-center gap-2 px-3 sm:px-4 h-16 text-sm border-b-2 transition-colors"
                    style={isActive(tab.path) ? {
                      color: '#e6edf3',
                      borderColor: '#f78166',
                      fontWeight: '600'
                    } : {
                      color: '#7d8590',
                      borderColor: 'transparent',
                      fontWeight: '400'
                    }}
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

          {/* Language Selector */}
          <div className="relative group">
            <button
              className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors"
              style={{
                color: '#e6edf3',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#21262d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Globe className="w-4 h-4" />
              <span>{languages.find(l => l.code === currentLanguage)?.flag}</span>
            </button>
            
            {/* Dropdown */}
            <div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d'
              }}
            >
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
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
        </div>
      </div>
    </header>
  );
}
