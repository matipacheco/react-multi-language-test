import React, {useContext, useState} from "react";

import { dictionaries } from "./languages";
import { LanguageContext } from "./language_context";

export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage]     = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaries[selectedLanguage.id])
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  )
}