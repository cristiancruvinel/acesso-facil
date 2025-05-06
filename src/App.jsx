import { useContext, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, LanguageContext } from "./context/LanguageContext";
import AccessibilityMenu from "./components/AccessibilityMenu";
import Home from "./pages/Home";
import texts from "./utils/texts";

function AppWrapper() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    document.title = texts[language].title;
  }, [language]);

  return (
    <>
      <AccessibilityMenu />
      <Home />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppWrapper />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
