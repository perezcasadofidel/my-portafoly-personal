import { motion } from "motion/react";
import { Briefcase, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const colors = ["#FF6F00", "#FFB300", "#FF6F00"];

export function Experience() {
  const { t } = useTranslation();
  const experiences = t("experience.items", { returnObjects: true }) as Array<{
    role: string;
    company: string;
    period: string;
    type: string;
    description: string;
    achievements: string[];
    tech: string[];
  }>;

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
            {t("experience.label")}
          </span>
          <h2
            className="mt-2"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "important",
            }}
          >
            {t("experience.title")}
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
            {experiences.map((exp: any, idx: number) => (
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
                    background: `${colors[idx]}20`,
                    border: `2px solid ${colors[idx]}40`,
                  }}
                >
                  <Briefcase size={18} style={{ color: colors[idx] }} />
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl p-6 border transition-all duration-300 hover:border-opacity-50"
                  style={{
                    background: "#fff",
                    borderColor: `${colors[idx]}20`,
                    borderLeftWidth: "3px",
                    borderLeftColor: colors[idx],
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
                        <span style={{ color: colors[idx], fontSize: "0.9rem" }}>
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
                          background: `${colors[idx]}15`,
                          color: colors[idx],
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
                        <span style={{ color: colors[idx], marginTop: "4px", flexShrink: 0 }}>▸</span>
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
                          background: `${colors[idx]}10`,
                          color: colors[idx],
                          border: `1px solid ${colors[idx]}25`,
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
