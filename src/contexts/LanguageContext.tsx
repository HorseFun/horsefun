import * as React from "react";
import { getTranslation } from "@/lib/translations";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({
  children,
  defaultLanguage = "zh",
}: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(() => {
    // Try to get from localStorage
    const saved = localStorage.getItem("language") as Language | null;
    return saved || defaultLanguage;
  });

  React.useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = React.useCallback((key: string): string => {
    return getTranslation(language, key);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
