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
      <div className="min-h-screen bg-[#0d1117]">
        <GitHubHeader 
          currentLanguage={language} 
          onLanguageChange={(lang) => setLanguage(lang as Language)} 
        />
        <Routes>
          <Route path="/" element={<CVPage language={language} />} />
          <Route path="/projects" element={<ProjectsPage language={language} />} />
          <Route path="/demos" element={<DemosPage language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}
