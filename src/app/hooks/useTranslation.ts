import { useLanguage } from "../contexts/LanguageContext";
import { translations, TranslationKey } from "../translations";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    const value = translations[language][key];
    if (typeof value === "string") return value;
    return "";
  };

  return { t, language };
}
