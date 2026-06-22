import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code2, Rocket, Lightbulb } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Desarrollo con las mejores prácticas y estándares de la industria",
    },
    {
      icon: Rocket,
      title: "Alto Rendimiento",
      description: "Aplicaciones optimizadas para velocidad y escalabilidad",
    },
    {
      icon: Lightbulb,
      title: "Soluciones Innovadoras",
      description: "Enfoque creativo para resolver problemas complejos",
    },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-important mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-12 border border-stone-200"
        >
          <p className="text-lg text-stone-700 mb-6 leading-relaxed">
            Soy un desarrollador Full Stack apasionado por crear aplicaciones web modernas y eficientes. 
            Con experiencia en tecnologías tanto de frontend como de backend, me especializo en construir 
            soluciones completas que no solo funcionan bien, sino que también ofrecen experiencias de usuario excepcionales.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Mi enfoque se centra en escribir código limpio, mantenible y escalable, siempre buscando 
            aprender nuevas tecnologías y mejorar mis habilidades. Me encanta trabajar en equipo y 
            contribuir a proyectos que generen un impacto positivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-stone-200 hover:border-amber-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">{feature.title}</h3>
              <p className="text-stone-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}