import { useContext } from "react";
import { LanguageContext } from "../languages/language_context";

export function Text(props) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[props.tid];
}