import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Fidel",
        },
        {
          publicKey,
        },
      );

      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setErrorMessage(t("contact.error_message"));
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.email"),
      value: "perezcasadofidel@gmail.com",
      link: "mailto:perezcasadofidel@gmail.com",
    },
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+53 56593126",
      link: "tel:+5356593126",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      value: t("contact.location_value"),
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-important mb-4">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-important-foreground text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-stone-200">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">
                {t("contact.info_title")}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-stone-600 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-stone-900 hover:text-amber-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-stone-900">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-500/30"
            >
              <h4 className="text-xl font-bold text-important mb-4">
                {t("contact.benefits_title")}
              </h4>
              <ul className="space-y-3 text-important-foreground">
                {(t("contact.benefits", { returnObjects: true }) as string[]).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "#FF6F00" }}
                  >
                    <Send size={28} style={{ color: "#FFF" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      color: "#FF6F00",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {t("contact.success_title")}
                  </h3>
                  <p style={{ color: "#000", fontSize: "0.88rem" }}>
                    {t("contact.success_text")}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-5 py-2 rounded-lg text-sm cursor-pointer"
                    style={{
                      background: "#FF6F00",
                      color: "#fff",
                      border: "#FF6F00",
                    }}
                  >
                    {t("contact.send_another")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-stone-200">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-stone-900 mb-2">
                        {t("contact.form_name")}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder={t("contact.form_name_placeholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-stone-900 mb-2">
                        {t("contact.form_email")}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder={t("contact.form_email_placeholder")}
                      />
                    </div>

                    <div>
                      <label
                        className="flex items-center gap-1.5 mb-2 text-stone-900 "
                      >
                        {t("contact.form_subject")}
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder={t("contact.form_subject_placeholder")}
                        className="w-full px-4 py-3 bg-white/50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                  </div>
                   
                    <div>
                      <label htmlFor="message" className="block text-stone-900 mb-2">
                        {t("contact.form_message")}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/50 border border-stone-300 rounded-lg text-stone-900 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        placeholder={t("contact.form_message_placeholder")}
                      />
                    </div>

                    <motion.button
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("contact.form_sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t("contact.form_submit")}
                        </>
                      )}
                    </motion.button>
                  </div>
                  {errorMessage && (
                    <p style={{ color: "#fca5a5", fontSize: "0.82rem" }}>
                      {errorMessage}
                    </p>
                  )}
                </form>)
              }
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-stone-300"
        >
          <p className="text-important-foreground">
            {t("footer.text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
