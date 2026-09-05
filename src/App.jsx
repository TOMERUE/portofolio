import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { GDDSection } from './components/GDDSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { portfolioData } from './data/portfolioData';

export function App() {
  const [lang, setLang] = useState('id'); // 'id' | 'en'
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleOpenProjectModal = (project) => {
    setActiveModalProject(project);
  };

  const handleCloseProjectModal = () => {
    setActiveModalProject(null);
  };

  return (
    <div className="min-h-screen bg-[#0c1017] text-[#f1f5f9] selection:bg-[#d9532f] selection:text-white flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          lang={lang} 
          onOpenProject={handleOpenProjectModal} 
        />

        {/* About Section */}
        <About 
          lang={lang} 
        />

        {/* Featured Projects Section */}
        <Projects 
          lang={lang} 
          onSelectProject={handleOpenProjectModal} 
        />

        {/* Skills & Toolset Matrix */}
        <Skills 
          lang={lang} 
        />

        {/* GDD Methodology Section */}
        <GDDSection 
          lang={lang} 
          onOpenFeaturedGDD={handleOpenProjectModal} 
        />

        {/* Contact & Socials Section */}
        <Contact 
          lang={lang} 
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive GDD Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          lang={lang}
          onClose={handleCloseProjectModal}
          onSelectOtherProject={handleOpenProjectModal}
          allProjects={portfolioData.projects}
        />
      )}
    </div>
  );
}

export default App;
