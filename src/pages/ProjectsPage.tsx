import { useState } from 'react';
import { ExternalLink, ChevronRight, ArrowLeft } from 'lucide-react';
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

  // If a project is selected, show project detail view
  if (selectedProject) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0d1117', color: '#c9d1d9' }}>
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Back Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg text-sm font-medium transition-colors"
            style={{
              color: '#7d8590',
              backgroundColor: 'transparent',
              border: '1px solid #30363d'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#58a6ff';
              e.currentTarget.style.color = '#e6edf3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#30363d';
              e.currentTarget.style.color = '#7d8590';
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            {language === 'es' && 'Volver a proyectos'}
            {language === 'en' && 'Back to projects'}
            {language === 'ar' && 'العودة إلى المشاريع'}
          </button>

          {/* Project Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: '#e6edf3' }}>
              {selectedProject.name}
            </h1>
            
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

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm mb-6" style={{ color: '#7d8590' }}>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedProject.languageColor }}
                />
                <span>{selectedProject.language}</span>
              </div>
              <span>
                {language === 'es' && `Actualizado en ${selectedProject.updatedAt}`}
                {language === 'en' && `Updated in ${selectedProject.updatedAt}`}
                {language === 'ar' && `محدث في ${selectedProject.updatedAt}`}
              </span>
            </div>

            {/* Action Button */}
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
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
          </header>

          {/* Project Description */}
          <article
            className="p-6 sm:p-8 rounded-lg border mb-8"
            style={{
              backgroundColor: '#161b22',
              borderColor: '#30363d'
            }}
          >
            <h2 className="text-xl font-semibold mb-4" style={{ color: '#e6edf3' }}>
              {language === 'es' && 'Descripción del Proyecto'}
              {language === 'en' && 'Project Description'}
              {language === 'ar' && 'وصف المشروع'}
            </h2>
            <div 
              className="text-base leading-relaxed"
              style={{ 
                color: '#c9d1d9',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              {selectedProject.fullDescription}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Default view: show projects list
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d1117', color: '#c9d1d9' }}>
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3" style={{ color: '#e6edf3' }}>
            {t.featuredProjects || 'Proyectos'}
          </h1>
          <p className="text-sm sm:text-base" style={{ color: '#7d8590' }}>
            {language === 'es' && 'Mis proyectos más destacados'}
            {language === 'en' && 'My featured projects'}
            {language === 'ar' && 'مشاريعي المميزة'}
          </p>
        </header>

        {/* Projects Grid */}
        <section className="grid gap-5" style={{ paddingTop: '10px' }}>
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="p-6 sm:p-7 rounded-lg border cursor-pointer transition-colors"
              style={{
                backgroundColor: '#161b22',
                borderColor: '#30363d',
                boxShadow: '0 8px 24px rgba(1, 4, 9, 0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#58a6ff';
                e.currentTarget.style.backgroundColor = '#1b2230';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.backgroundColor = '#161b22';
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 flex items-center gap-2" style={{ color: '#58a6ff' }}>
                    {project.name}
                    <ChevronRight className="w-5 h-5" />
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: '#7d8590' }}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-5">
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
            </article>
          ))}
        </section>

        {/* Coming Soon */}
        <div className="mt-10 text-center text-sm" style={{ color: '#7d8590' }}>
          <p>
            {language === 'es' && '🚀 Más proyectos próximamente...'}
            {language === 'en' && '🚀 More projects coming soon...'}
            {language === 'ar' && '🚀 المزيد من المشاريع قريبًا...'}
          </p>
        </div>
      </div>
    </div>
  );
}
