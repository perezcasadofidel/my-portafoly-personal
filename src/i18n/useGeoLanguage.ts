import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SPANISH_SPEAKING_COUNTRIES } from "./countries";

export function useGeoLanguage() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("i18n-lang");
    if (cached) {
      i18n.changeLanguage(cached);
      setLoading(false);
      return;
    }

    fetch("http://ip-api.com/json/?fields=countryCode")
      .then((res) => res.json())
      .then((data) => {
        const lang = SPANISH_SPEAKING_COUNTRIES.includes(data.countryCode)
          ? "es"
          : "en";
        localStorage.setItem("i18n-lang", lang);
        i18n.changeLanguage(lang);
      })
      .catch(() => {
        i18n.changeLanguage("en");
      })
      .finally(() => setLoading(false));
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const setLanguage = (lang: string) => {
    localStorage.setItem("i18n-lang", lang);
    i18n.changeLanguage(lang);
  };

  return { loading, setLanguage, currentLanguage: i18n.language };
}
