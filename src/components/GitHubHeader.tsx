import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Language } from '../lib/translations';

interface GitHubHeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function GitHubHeader({ currentLanguage, onLanguageChange }: GitHubHeaderProps) {
  const location = useLocation();
  
  const tabs = [
    { path: '/', label: 'Code', icon: '<>' },
    { path: '/projects', label: 'Projects', icon: '📦' },
    { path: '/demos', label: 'Demos', icon: '🎮' },
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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Title */}
          <h1 className="text-base font-semibold" style={{ color: '#e6edf3' }}>
            CV David Guerra
          </h1>

          {/* Navigation Tabs */}
          <nav className="flex items-center h-16 -mb-px">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className="flex items-center gap-2 px-4 h-16 text-sm font-medium border-b-2 transition-colors"
                style={isActive(tab.path) ? {
                  color: '#e6edf3',
                  borderColor: '#f78166'
                } : {
                  color: '#7d8590',
                  borderColor: 'transparent'
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
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </Link>
            ))}
          </nav>

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
