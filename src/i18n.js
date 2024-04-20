import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EnglishTranslate from './locales/en.json';
import ArabicTranslate from './locales/ar.json';

const resources = {
  en: {
    translation:  
        EnglishTranslate
    
  },
  ar: {
    translation:  
        ArabicTranslate
   
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lang") || "en",  
    fallbackLng: localStorage.getItem("lang") || "en",  
    interpolation: {
      escapeValue: false  
    }
  });

export default i18n;
