import { useState } from 'react';
import { ExternalLink, ChevronRight, X } from 'lucide-react';
import { translations, Language } from '../lib/translations';

interface ProjectsPageProps {
  language: Language;
}

interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  url: string;
  language: string;
  languageColor: string;
  topics: string[];
  updatedAt: string;
}

export function ProjectsPage({ language }: ProjectsPageProps) {
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'qvaclick',
      name: 'QvaClick',
      description: t.qvaclickDesc,
      fullDescription: t.qvaclickFullDesc,
      url: 'https://qvaclick.com',
      language: 'PHP',
      languageColor: '#4F5D95',
      topics: ['WordPress', 'WooCommerce', 'QvaPay', 'Telegram Bot', 'Email Manager', 'RSS'],
      updatedAt: '2024',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1117', color: '#c9d1d9' }}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#e6edf3' }}>
            {t.featuredProjects || 'Proyectos'}
          </h1>
          <p style={{ color: '#7d8590' }}>
            {language === 'es' && 'Mis proyectos más destacados'}
            {language === 'en' && 'My featured projects'}
            {language === 'ar' && 'مشاريعي المميزة'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 rounded-lg border cursor-pointer transition-all hover:shadow-lg"
              style={{
                backgroundColor: '#161b22',
                borderColor: '#30363d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#58a6ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: '#58a6ff' }}>
                    {project.name}
                    <ChevronRight className="w-5 h-5" />
                  </h2>
                  <p className="text-sm mb-3" style={{ color: '#7d8590' }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 text-xs rounded-full"
                    style={{
                      backgroundColor: 'rgba(88, 166, 255, 0.1)',
                      color: '#58a6ff',
                      border: '1px solid rgba(88, 166, 255, 0.3)'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-4 text-xs" style={{ color: '#7d8590' }}>
                <div className="flex items-center gap-1">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  <span>{project.language}</span>
                </div>
                <span>
                  {language === 'es' && `Actualizado en ${project.updatedAt}`}
                  {language === 'en' && `Updated in ${project.updatedAt}`}
                  {language === 'ar' && `محدث في ${project.updatedAt}`}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 text-center text-sm" style={{ color: '#7d8590' }}>
          <p>
            {language === 'es' && '🚀 Más proyectos próximamente...'}
            {language === 'en' && '🚀 More projects coming soon...'}
            {language === 'ar' && '🚀 المزيد من المشاريع قريبًا...'}
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg"
            style={{
              backgroundColor: '#0d1117',
              border: '1px solid #30363d'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b" style={{
              backgroundColor: '#0d1117',
              borderColor: '#30363d'
            }}>
              <h2 className="text-2xl font-bold" style={{ color: '#e6edf3' }}>
                {selectedProject.name}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg transition-colors"
                style={{ color: '#7d8590' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#21262d';
                  e.currentTarget.style.color = '#e6edf3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#7d8590';
                }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      backgroundColor: 'rgba(88, 166, 255, 0.1)',
                      color: '#58a6ff',
                      border: '1px solid rgba(88, 166, 255, 0.3)'
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <div className="mb-6 p-4 rounded-lg" style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d'
              }}>
                <pre className="whitespace-pre-wrap text-sm font-sans leading-relaxed" style={{ color: '#c9d1d9' }}>
                  {selectedProject.fullDescription}
                </pre>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: '#238636',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2ea043';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#238636';
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === 'es' && 'Visitar Sitio'}
                  {language === 'en' && 'Visit Site'}
                  {language === 'ar' && 'زيارة الموقع'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
