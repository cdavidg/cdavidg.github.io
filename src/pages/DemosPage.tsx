import { Gamepad2, Sparkles } from 'lucide-react';
import { Language } from '../lib/translations';

interface DemosPageProps {
  language: Language;
}

export function DemosPage({ language }: DemosPageProps) {
  return (
    <div className="min-h-screen bg-background dark text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
                    
          {/* Title */}
          <h1 className="text-4xl font-bold text-white mb-4" style={{ paddingTop: '40px' }}>
            {language === 'es' && 'Demos Interactivas'}
            {language === 'en' && 'Interactive Demos'}
            {language === 'ar' && 'عروض تفاعلية'}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'es' && 
              'Esta sección estará disponible próximamente con demostraciones interactivas de proyectos y tecnologías.'
            }
            {language === 'en' && 
              'This section will be available soon with interactive demonstrations of projects and technologies.'
            }
            {language === 'ar' && 
              'سيكون هذا القسم متاحًا قريبًا مع عروض توضيحية تفاعلية للمشاريع والتقنيات.'
            }
          </p>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-400 font-medium">
            <Sparkles className="w-5 h-5" />
            <span>
              {language === 'es' && 'Próximamente'}
              {language === 'en' && 'Coming Soon'}
              {language === 'ar' && 'قريبًا'}
            </span>
          </div>

          {/* Info Box */}
          <div className="mt-12 p-6 bg-[#161b22] border border-gray-700 rounded-lg max-w-2xl mx-auto" style={{ marginTop: '60px' }}>
            <h3 className="text-lg font-semibold text-white mb-3">
              {language === 'es' && '¿Qué esperar?'}
              {language === 'en' && 'What to expect?'}
              {language === 'ar' && 'ماذا تتوقع؟'}
            </h3>
            <ul className="text-left text-gray-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {language === 'es' && 'Demostraciones en vivo de proyectos de IA'}
                  {language === 'en' && 'Live demonstrations of AI projects'}
                  {language === 'ar' && 'عروض حية لمشاريع الذكاء الاصطناعي'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {language === 'es' && 'Ejemplos interactivos de detección de objetos con YOLO'}
                  {language === 'en' && 'Interactive examples of object detection with YOLO'}
                  {language === 'ar' && 'أمثلة تفاعلية لاكتشاف الأشياء باستخدام YOLO'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {language === 'es' && 'Prototipos de aplicaciones web y móviles'}
                  {language === 'en' && 'Web and mobile application prototypes'}
                  {language === 'ar' && 'نماذج أولية لتطبيقات الويب والجوال'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  {language === 'es' && 'Playground de APIs y herramientas desarrolladas'}
                  {language === 'en' && 'Playground of developed APIs and tools'}
                  {language === 'ar' && 'مساحة تجريب لواجهات برمجة التطبيقات والأدوات المطورة'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
