// i18n.js
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hello, world!",
      Price: "Price",
      Rating: "Rating",
      Quantity: "Quantity",
      AddToCart: "AddToCart",
    },
  },
  fr: {
    translation: {
      greeting: "Bonjour le monde !",
      Price: "Prix",
      Rating: "Évaluation",
      Quantity: "Quantité",
      AddToCart: "Ajouter au panier",
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
