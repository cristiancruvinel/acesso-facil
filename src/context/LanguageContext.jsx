import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp(`${name}=([^;]+)`));
    return match ? match[1] : "pt";
  };

  const [language, setLanguage] = useState(getCookie("lang"));

  useEffect(() => {
    document.cookie = `lang=${language};path=/;max-age=31536000`; // 1 ano
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
