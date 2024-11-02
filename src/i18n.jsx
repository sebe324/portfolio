import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enjson from "./i18n-translations/en.json"
import pljson from "./i18n-translations/pl.json"
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: enjson,
    pl: pljson
};
const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
  }
i18n.use(LanguageDetector).use(initReactI18next)
.init({
    detection: options,
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en','pl'],
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    
}
);

export default i18n;