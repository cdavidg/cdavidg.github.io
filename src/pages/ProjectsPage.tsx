import { Book, ExternalLink, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { translations, Language } from '../lib/translations';

interface ProjectsPageProps {
  language: Language;
}

export function ProjectsPage({ language }: ProjectsPageProps) {
  const t = translations[language];

  // Por ahora solo QvaClick, pero preparado para más proyectos
  const projects = [
    {
      id: 'qvaclick',
      name: 'QvaClick',
      description: t.qvaclickDesc,
      fullDescription: t.qvaclickFullDesc,
      url: 'https://qvaclick.com',
      stars: 0,
      forks: 0,
      language: 'PHP',
      languageColor: '#4F5D95',
      topics: ['WordPress', 'WooCommerce', 'QvaPay', 'Telegram Bot', 'Email Manager', 'RSS'],
      updatedAt: '2024',
      isPrivate: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-300">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Book className="w-8 h-8" />
            {t.featuredProjects || 'Proyectos'}
          </h1>
          <p className="text-gray-400">
            {language === 'es' && 'Mis proyectos más destacados con descripciones detalladas'}
            {language === 'en' && 'My featured projects with detailed descriptions'}
            {language === 'ar' && 'مشاريعي المميزة مع أوصاف تفصيلية'}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id} className="bg-[#161b22] border-gray-700 hover:border-gray-600 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl font-semibold text-blue-400 hover:underline">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          {project.name}
                        </a>
                      </h2>
                      {project.isPrivate && (
                        <Badge variant="outline" className="text-xs border-gray-600">
                          Private
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="bg-[#1f6feb]/10 text-[#58a6ff] hover:bg-[#1f6feb]/20 border-[#1f6feb]/30 text-xs"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Full Description */}
                <div className="mb-4 p-4 bg-[#0d1117] rounded-lg border border-gray-800">
                  <pre className="whitespace-pre-wrap text-sm text-gray-300 font-sans leading-relaxed">
                    {project.fullDescription}
                  </pre>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span>{project.language}</span>
                  </div>
                  
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                  
                  {project.forks > 0 && (
                    <div className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      <span>{project.forks}</span>
                    </div>
                  )}

                  <span>
                    {language === 'es' && `Actualizado en ${project.updatedAt}`}
                    {language === 'en' && `Updated in ${project.updatedAt}`}
                    {language === 'ar' && `محدث في ${project.updatedAt}`}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-[#21262d] border-gray-600 hover:bg-[#30363d] hover:border-gray-500"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'es' && 'Visitar Sitio'}
                    {language === 'en' && 'Visit Site'}
                    {language === 'ar' && 'زيارة الموقع'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-8 text-center text-gray-500 text-sm">
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
