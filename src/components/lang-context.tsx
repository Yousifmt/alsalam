"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Lang = "en" | "ar";
type Ctx = {
  lang: Lang;
  isArabic: boolean;
  toggle: () => void;
  set: (l: Lang) => void;
};

const LanguageCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("lang") as Lang | null;
    return saved === "ar" ? "ar" : "en";
  });

  // persist & reflect on <html>
  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
    } catch {}
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      isArabic: lang === "ar",
      toggle: () => setLang((l) => (l === "ar" ? "en" : "ar")),
      set: setLang,
    }),
    [lang]
  );

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
