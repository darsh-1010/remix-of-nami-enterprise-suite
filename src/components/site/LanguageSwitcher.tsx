"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

const LANGS = [
  ["en", "English"],
  ["hi", "हिन्दी"],
  ["gu", "ગુજરાતી"],
  ["mr", "मराठी"],
  ["bn", "বাংলা"],
  ["ta", "தமிழ்"],
  ["te", "తెలుగు"],
  ["zh-CN", "中文"],
  ["ar", "العربية"],
  ["es", "Español"],
  ["fr", "Français"],
  ["de", "Deutsch"],
  ["ja", "日本語"],
] as const;

// Loads Google Translate (hidden UI); it reads the `googtrans` cookie set below.
export function TranslateLoader() {
  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <Script
        id="gt-init"
        strategy="afterInteractive"
      >{`window.googleTranslateElementInit=function(){new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'google_translate_element')}`}</Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}

export function LanguageSwitcher() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const m = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (m) setLang(m[1]);
  }, []);

  const change = (l: string) => {
    const host = location.hostname;
    const expire = "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // clear on both host and bare path, then set (unless English)
    document.cookie = `googtrans=; path=/${expire}`;
    document.cookie = `googtrans=; path=/; domain=${host}${expire}`;
    if (l !== "en") document.cookie = `googtrans=/en/${l}; path=/`;
    location.reload();
  };

  return (
    <label className="notranslate relative inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-2 text-foreground/80 hover:text-gold">
      <Languages className="h-4 w-4" aria-hidden />
      <select
        value={lang}
        onChange={(e) => change(e.target.value)}
        aria-label="Language"
        className="bg-transparent text-xs outline-none cursor-pointer max-w-[6.5rem]"
      >
        {LANGS.map(([c, n]) => (
          <option key={c} value={c} className="text-black">
            {n}
          </option>
        ))}
      </select>
    </label>
  );
}
