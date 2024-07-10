import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const useLanguage = () => useContext(LanguageContext);

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("esp");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export { LanguageContext, useLanguage, LanguageProvider };
