import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import memoryMatch from '../../images/memory-match.png';
import musicPlayer from '../../images/music-player.png';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: "Digital Memory Card Game",
      description: "Aplicación completa de juego de memoria. Ideal para el desarrollo cognitivo, el entretenimiento educativo o como herramienta de estimulación temprana.",
      tech: ["React", "TypeScript", "HTML", "Tailwind CSS"],
      image: memoryMatch,
      github: "https://github.com/perezcasadofidel/memory-match",
      demo: "https://memory-match-fpc.vercel.app/",
    },
    {
      title: "Interactive Music Player",
      description: "Aplicación de reproductor de música interactivo con funcionalidades de playlist, búsqueda y sincronización en la nube.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Web Audio API"],
      image: musicPlayer,
      github: "https://github.com/perezcasadofidel/music-player",
      demo: "https://music-player-fpc.vercel.app/",
    },
    {
      title: "Social Media Dashboard",
      description: "Panel analítico para redes sociales con visualización de datos, reportes automáticos y predicciones con IA.",
      tech: ["React", "Python", "FastAPI", "TensorFlow"],
      image: "analytics dashboard",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio Generator",
      description: "Herramienta para crear portafolios personalizados con plantillas dinámicas y exportación a múltiples formatos.",
      tech: ["Vue.js", "Express", "MySQL", "AWS S3"],
      image: "portfolio builder",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Fitness Tracker",
      description: "Aplicación móvil y web para seguimiento de ejercicios, nutrición y objetivos de salud con gráficos interactivos.",
      tech: ["React Native", "Firebase", "Chart.js"],
      image: "fitness tracking app",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real Estate Platform",
      description: "Plataforma inmobiliaria con búsqueda avanzada, tours virtuales 360° y sistema de mensajería integrado.",
      tech: ["Angular", "Spring Boot", "PostgreSQL"],
      image: "real estate website",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-stone-200 hover:border-amber-500/50 transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 overflow-hidden">
                <ImageWithFallback
                  src={`${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-100 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{project.title}</h3>
                <p className="text-stone-600 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-500/20 text-amber-700 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-700 hover:text-amber-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Código</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-700 hover:text-amber-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}