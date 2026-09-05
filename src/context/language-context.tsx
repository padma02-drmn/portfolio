import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "id" | "en"

type LanguageContextType = {
  lang: Language
  setLang: (l: Language) => void
  t: <T>(idVal: T, enVal: T) => T
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem("portfolio_lang") as Language) || "id"
  })

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem("portfolio_lang", l)
  }

  const t = <T,>(idVal: T, enVal: T): T => {
    return lang === "en" ? enVal : idVal
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
