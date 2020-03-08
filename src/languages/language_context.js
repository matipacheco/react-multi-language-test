import { createContext } from "react";
import { languages, dictionaries } from "./languages";

// Language context. Default EN
export const LanguageContext = createContext({
  language: languages.filter((language) => {
    return language.id === 'en'
  }),
  dictionary: dictionaries['en']
});