import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GitHubHeader } from "./components/GitHubHeader";
import { CVPage } from "./pages/CVPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { DemosPage } from "./pages/DemosPage";
import { Language } from "./lib/translations";

export default function App() {
  const [language, setLanguage] = useState<Language>("es");

  return (
    <Router>
    <div className="min-h-screen bg-background dark">
      <div className="container mx-auto px-4 py-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Profile */}
          <aside className="lg:col-span-3 lg:sticky lg:top-8 lg:self-start">
            <div className="bg-card border border-border rounded-lg p-6">
              {/* Profile Image */}
              <div className="mb-6 relative">
                <ImageWithFallback
                  src="/profile.jpg"
                  alt="David Guerra Profile"
                  className="w-full aspect-square object-cover rounded-lg"
                />
                <VisitCounter />
              </div>

              {/* Name and Title */}
              <h1 className="text-2xl font-bold text-foreground mb-2">David Guerra</h1>
              <p className="text-muted-foreground mb-4">{t.title}</p>

              <Separator className="my-4" />

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+5353069595"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+53 5 9441373</span>
                </a>
                <a
                  href="mailto:cdavidg@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>cedav95@gmail.com</span>
                </a>
                <a
                  href="https://github.com/cdavidg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>

              <Separator className="my-4" />

              {/* Quick Stats */}
              <div className="space-y-3">
                <div>
                  <span className="text-muted-foreground text-sm">{t.specialization}</span>
                  <p className="text-sm mt-1 text-foreground">{t.specializationDesc}</p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">{t.mainStack}</span>
                  <p className="text-sm mt-1 text-foreground">Python, PHP, JavaScript — con experiencia en Django, Flask, FastAPI, Laravel y APIs REST</p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">{t.focus}</span>
                  <p className="text-sm mt-1 text-foreground">{t.focusDesc}</p>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="mt-6">
              <ModernLanguageSelector 
                currentLanguage={language} 
                onLanguageChange={(lang) => setLanguage(lang as Language)} 
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-6">
            {/* Professional Summary Section */}
            <section className="mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader tag={t.professionalSummary}>
                  {t.professionalSummary}
                </SectionHeader>
                <p className="text-foreground leading-relaxed" dir={language === "ar" ? "rtl" : "ltr"}>
                  {t.summary}
                </p>
              </div>
            </section>

            {/* Education & Certifications Section */}
            <section className="mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader tag={t.education}>
                  <GraduationCap className="w-6 h-6" />
                  {t.education}
                </SectionHeader>
                
                <div className="space-y-4">
                  <CertificationItem
                    type="degree"
                    title={t.computerScience}
                    institution={t.university}
                    year="2019"
                  />

                  <CertificationItem
                    type="certification"
                    title={t.aiCertification}
                    institution={t.deepLearningAI}
                    year="2023"
                  />

                  <CertificationItem
                    type="certification"
                    title={t.dockerCertification}
                    institution={t.bigSchool}
                    year="2025"
                    certificateImage="/certificate_bigschool.png"
                  />

                  <CertificationItem
                    type="certification"
                    title={t.marketingCertification}
                    institution={t.cubanCommunicators}
                    year="2017"
                    certificateImage="/certificate_mercadotecnia.jpg"
                  />

                  <CertificationItem
                    type="certification"
                    title={t.webDevelopment}
                    institution={t.googleMicrosoft}
                    year="2019"
                  />
                </div>
              </div>
            </section>

            {/* Professional Experience Section */}
            <section className="mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader tag={t.professionalExperience}>
                  {t.featuredProjects}
                </SectionHeader>
                
                <ExpandableExperienceCard
                  title="QvaClick"
                  description={t.qvaclickDesc}
                  fullDescription={t.qvaclickFullDesc}
                  technologies={["PHP", "WordPress", "MySQL", "JavaScript", "AJAX", "jQuery", "APIs REST", "SMTP", "IMAP"]}
                  url="https://qvaclick.com"
                  images={[
                    "/qvaclick/Screenshot 2025-10-11 183606.jpg",
                    "/qvaclick/Screenshot 2025-10-11 183619.jpg",
                    "/qvaclick/Screenshot 2025-10-11 183700.jpg",
                    "/qvaclick/Screenshot 2025-10-11 183721.jpg",
                    "/qvaclick/Screenshot 2025-10-11 183742.jpg",
                    "/qvaclick/Screenshot 2025-10-11 184029.jpg"
                  ]}
                  isExpandable={true}
                />

                <ExperienceCard
                  title="MindFlow"
                  description={t.mindflowDesc}
                  technologies={["Python", "FastAPI", "PostgreSQL", "Docker", "Redis"]}
                />

                <ExperienceCard
                  title="QvaPay Plugin (WooCommerce)"
                  description={t.qvapayDesc}
                  technologies={["PHP", "WordPress", "WooCommerce", "APIs REST", "MySQL"]}
                />

                <ExperienceCard
                  title="detect_2.0"
                  description={t.detectDesc}
                  technologies={["PyTorch", "YOLOv8", "OpenCV", "Docker", "FastAPI"]}
                />

                <ExperienceCard
                  title="QvaMiner"
                  description={t.qvaminerDesc}
                  technologies={["Python", "TensorFlow", "PostgreSQL", "Celery"]}
                />

                <ExperienceCard
                  title="swipe_4"
                  description={t.swipeDesc}
                  technologies={["Python", "Tesseract", "OpenCV", "Flask", "MongoDB"]}
                />
              </div>
            </section>

            {/* Extras Section */}
            <section>
              <div className="bg-card border border-border rounded-lg p-6">
                <SectionHeader tag={t.extras}>
                  {t.extras}
                </SectionHeader>
                
                <div className="space-y-4">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="mb-1 text-foreground">{t.extrasOpenSource}</h4>
                    <p className="text-muted-foreground">
                      {t.extrasOpenSourceDesc}
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="mb-1 text-foreground">{t.extrasAthletics}</h4>
                    <p className="text-muted-foreground">
                      {t.extrasAthleticsDesc}
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                    <h4 className="mb-1 text-foreground">{t.extrasContinuousLearning}</h4>
                    <p className="text-muted-foreground">
                      {t.extrasContinuousLearningDesc}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sidebar - Tech Stack & Soft Skills */}
          <aside className="lg:col-span-3 space-y-6">
            <TechStackSidebar 
              title={t.technicalStack}
              categories={getTechStackCategories(t)}
            />
            <SoftSkillsSidebar 
              title={t.softSkills}
              t={t}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
