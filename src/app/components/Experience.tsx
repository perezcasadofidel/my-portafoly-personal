import { motion } from "motion/react";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "GET",
    period: "Enero 2023 – Presente",
    type: "Full Stack / Tiempo completo",
    description:
      "Desarrollo y mantenimiento de aplicaciones web escalables para clientes internacionales. Liderazgo técnico en proyectos usando React, Node.js y PostgreSQL.",
    achievements: [
      "Disminución del 40% en los tiempos de renderizado inicial mediante estrategias de carga diferida (lazy loading) y reestructuración de consultas a base de datos",
      "Diseño y despliegue de una arquitectura distribuida basada en microservicios, orquestada con Docker y pipelines automatizados de CI/CD sobre la nube de AWS",
      "Creación de una capa de autorización robusta con flujos OAuth2, incorporando gestión granular de roles y privilegios de usuario",
      "Acompañamiento y supervisión formativa de 2 desarrolladores junior, acelerando su curva de integración al equipo y buenas prácticas de código",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    color: "#FF6F00",
  },
  {
    role: "Frontend Developer",
    company: "CITMATEL",
    period: "Junio 2022 – Diciembre 2022",
    type: "Frontend / Remoto",
    description:
      "Desarrollo de interfaces de usuario modernas y validación funcional para aplicaciones empresariales. Trabajo cercano con equipos de producto y UX para garantizar la fidelidad del diseño y la robustez técnica.",
    achievements: [
      "Implementación de vistas y lógica de interacción compleja utilizando React JS, JavaScript (ES6) y CSS avanzado para layouts responsivos",
      "Consumo y manejo de datos provenientes de APIs REST construidas sobre Django y base de datos PostgreSQL",
      "Validación temprana de criterios de aceptación y ejecución de pruebas exploratorias/de regresión para garantizar despliegues sin errores en producción",
      "Participación clave en Dailies y Retrospectivas para alinear el desarrollo frontend con los objetivos del sprint y la arquitectura del backend",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Integración Django/PostgreSQL", "Metodologías Ágiles (Scrum)"],
    color: "#FFB300",
  },
  {
    role: "Junior Web Developer",
    company: "FreelanceDev",
    period: "Enero 2021 – Mayo 2022",
    type: "Freelance",
    description:
      "Desarrollo de sitios web y aplicaciones para pequeñas y medianas empresas. Gestión completa de proyectos desde la conceptualización hasta el despliegue.",
    achievements: [
      "Construcción y entrega de más de 10 portales web adaptados a las necesidades específicas de diversos sectores comerciales",
      "Integración de funcionalidades de venta en línea mediante la configuración y despliegue de plataformas e-commerce con pasarelas de pago seguras",
      "Administración y optimización de entornos de alojamiento en Servidores Privados Virtuales (VPS), incluyendo la configuración de servidores web Nginx y la instalación de certificados de seguridad SSL",
      "Diseño e implementación de APIs REST robustas utilizando Node.js en conjunto con el framework Express",
    ],
    tech: ["JavaScript", "React", "Node.js", "MySQL", "Nginx"],
    color: "#FF6F00",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "#FF6F00" }}
          >
            Trayectoria
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "important",
            }}
          >
            Experiencia Laboral
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "linear-gradient(90deg, #FF6F00, #FFB300)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "rgba(139, 92, 246, 0.2)" }}
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-12 h-12 rounded-xl items-center justify-center hidden sm:flex"
                  style={{
                    background: `${exp.color}20`,
                    border: `2px solid ${exp.color}40`,
                  }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-50"
                  style={{
                    background: "#fff",
                    borderColor: `${exp.color}20`,
                    borderLeftWidth: "3px",
                    borderLeftColor: exp.color,
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#000",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span style={{ color: exp.color, fontSize: "0.9rem" }}>
                          {exp.company}
                        </span>
                        <ExternalLink size={13} style={{ color: "#475569" }} />
                      </div>
                    </div>
                    <div className="text-right">
                      <div style={{ color: "#64748b", fontSize: "0.8rem" }}>
                        {exp.period}
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          background: `${exp.color}15`,
                          color: exp.color,
                          fontSize: "0.72rem",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="mb-4" style={{ color: "#64748b", fontSize: "0.88rem", lineHeight: 1.7 }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2"
                        style={{ color: "#64748b", fontSize: "0.83rem" }}
                      >
                        <span style={{ color: exp.color, marginTop: "4px", flexShrink: 0 }}>▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          background: `${exp.color}10`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
