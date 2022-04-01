import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
//Langueges availables
import en from "./en.json";
import es from "./es.json";

//translations
const resources = {
    en: {translation: en},
    es: {translation: es}
};

export const defaultLanguage = "es";

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: defaultLanguage,
        interpolation: {
            escapeValue: false
        }
    });

export const lang = [
    {value: "en", name: "English"},
    {value: "es", name: "Espanol"},
];

export default i18n;