import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { useGeoLanguage } from "../i18n/useGeoLanguage";

export default function App() {
  const { loading, setLanguage, currentLanguage } = useGeoLanguage();
  if (loading) return null; 
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-one via-background-two to-background-three">
      <Navigation setLanguage={setLanguage} currentLanguage={currentLanguage} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}