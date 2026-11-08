
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Language = "en" | "fr";

const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Get in touch",
    },
    hero: {
      title: "UI/UX Designer",
      name: "Zaineb Saied",
      description:
        "Where thoughtful design meets purposeful development.",
      button: "See work",
    },
    projects: {
      title: "Selected work",
    },
    footer: {
  copyright: "© 2026 All rights reserved.",
},
vision: {
  title: "Vision",
  description:
    "Passionate about creating meaningful design experiences and bringing them to life through web development, I aim to bridge creativity and technology to build digital products that are intuitive, functional, and engaging.",
},
  },
  fr: {
    nav: {
      home: "Accueil",
      work: "Projets",
      about: "À propos",
      contact: "Me contacter",
    },
    hero: {
      title: "Designer UI/UX",
      name: "Zaineb Saied",
      description:
        "Là où le design réfléchi rencontre le développement porteur de sens.",
      button: "Voir mes projets",
    },
    projects: {
      title: "Projets sélectionnés",
    },
    footer: {
  copyright: "© 2026 Tous droits réservés.",
},
vision: {
  title: "Vision",
  description:
    "Passionnée par la création d’expériences de design porteuses de sens et leur concrétisation à travers le développement web, je cherche à allier créativité et technologie pour concevoir des produits numériques intuitifs, fonctionnels et engageants.",
},
  },
};

type TranslationData = typeof translations.en;

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "en" || savedLanguage === "fr") {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
