import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

interface GitHubHeaderProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export function GitHubHeader({ currentLanguage, onLanguageChange }: GitHubHeaderProps) {
  const location = useLocation();
  
  const tabs = [
    { path: '/', label: 'Code', icon: '</>' },
    { path: '/projects', label: 'Projects', icon: '📦' },
    { path: '/demos', label: 'Demos', icon: '🎮' },
  ];

  const languages = [
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0d1117]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-white">CV David Guerra</h1>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-colors
                  ${isActive(tab.path) 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-300'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </span>
                {isActive(tab.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Selector */}
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {languages.find(l => l.code === currentLanguage)?.flag}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-[#161b22] border-gray-700">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onLanguageChange(lang.code)}
                    className={`
                      cursor-pointer text-gray-300 hover:text-white hover:bg-gray-800
                      ${currentLanguage === lang.code ? 'bg-gray-800' : ''}
                    `}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center gap-1 pb-2 overflow-x-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`
                relative px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap
                ${isActive(tab.path) 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-gray-300'
                }
              `}
            >
              <span className="flex items-center gap-1.5">
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </span>
              {isActive(tab.path) && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
