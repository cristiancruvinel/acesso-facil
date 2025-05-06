import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const AccessibilityMenu = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const currentTheme = theme === "light" ? "☀️ Claro" : "🌙 Escuro";
  const currentLang = language === "pt" ? "🇧🇷 Português" : "🇬🇧 English";

  return (
    <div className={`accessibility-menu ${theme}`}>
      <button onClick={toggleTheme}>{currentTheme}</button>
      <button onClick={toggleLanguage}>{currentLang}</button>
    </div>
  );
};

export default AccessibilityMenu;
