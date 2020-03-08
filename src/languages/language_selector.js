import React, {useContext} from "react";

import { languages } from "./languages";
import { LanguageContext } from "./language_context";

export default function LanguageSelector() {
  const languageContext = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const selectedLanguage = languages.find(language => language.id === event.target.value);
    languageContext.setLanguage(selectedLanguage);
  };

  return (
    <select onChange={handleLanguageChange} value={languageContext.language.id}>
      {
        languages.map(item => (
          <option key={item.id} value={item.id}>
            {item.flag}
          </option>
        ))
      }
    </select>
  )
}
