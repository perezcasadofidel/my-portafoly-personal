import { motion } from "motion/react";
import { ChevronDown, Github, Linkedin, Mail,Download } from "lucide-react";
import cvFileUrl from "@/public/Fidel_Pérez_Casado.pdf?url";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/20 rounded-full"
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-important mb-4"
          >
            Desarrollador Full Stack
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-amber-700 mb-6"
          >
            Fidel Pérez Casado
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-important-foreground mb-12 max-w-2xl mx-auto"
          >
            Creando experiencias digitales excepcionales con código limpio y soluciones innovadoras
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-7 py-3 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-105 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #FF6F00, #FFB300)",
                fontSize: "0.95rem",
              }}
            >
              Ver Proyectos
            </button>
            <a
              href={cvFileUrl}
              download="Fidel_Pérez_Casado.pdf"
              className="px-7 py-3 rounded-xl transition-all duration-200 hover:scale-105 border"
              style={{
                color: "#FF6F00",
                borderColor: "#FF6F00",
                background: "#FFF8E1.",
                fontSize: "0.95rem",
              }}
            >
              <span className="flex items-center gap-2">
                <Download size={16} />
                Descargar CV
              </span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/perezcasadofidel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent backdrop-blur-sm rounded-full hover:bg-accent-foreground transition-colors"
            >
              <Github className="w-6 h-6 text-important" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent backdrop-blur-sm rounded-full hover:bg-accent-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6 text-important" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:perezcasadofidel@gmail.com"
              className="p-3 bg-accent backdrop-blur-sm rounded-full hover:bg-accent-foreground transition-colors"
            >
              <Mail className="w-6 h-6 text-important" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-amber-600" />
        </motion.div>
      </div>
    </section>
  );
}