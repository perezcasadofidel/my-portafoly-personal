import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

import memoryMatch from "../../images/memory-match.png";
import musicPlayer from "../../images/music-player.png";
import dahuPage from "../../images/dahu-page.png";
import dahuShop from "../../images/dahu-shop.png";
import fitnessTracker from "../../images/fitness-tracker.png";

const projectsStatic = [
  { image: dahuPage, github: "https://github.com", demo: "https://dahu-page.vercel.app/" },
  { image: dahuShop, github: "https://github.com", demo: "https://app-web-dahu.vercel.app/" },
  { image: musicPlayer, github: "https://github.com/perezcasadofidel/music-player", demo: "https://music-player-fpc.vercel.app/" },
  { image: fitnessTracker, github: "https://github.com/perezcasadofidel/Fitness-Tracker-App", demo: "https://fitness-tracker-app-fpc.vercel.app/" },
  { image: memoryMatch, github: "https://github.com/perezcasadofidel/memory-match", demo: "https://memory-match-fpc.vercel.app/" },
  { image: "real estate website", github: "https://github.com", demo: "https://example.com" },
];

export function Projects() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projectsTranslated = t("projects.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tech: string[];
  }>;

  const projects = projectsStatic.map((s, i) => ({
    ...s,
    ...projectsTranslated[i],
  }));

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-important mb-4">
            {t("projects.title")}
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
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-600 mb-4 text-sm">
                  {project.description}
                </p>

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
                  {project.github === "https://github.com" ? (
                    <p
                      className={`flex items-center gap-2 text-stone-400 cursor-auto`}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">{t("projects.code")}</span>
                    </p>
                  ) : (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-stone-700 hover:text-amber-600 transition-colors`}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">{t("projects.code")}</span>
                    </motion.a>
                  )}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-700 hover:text-amber-600 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">{t("projects.demo")}</span>
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
