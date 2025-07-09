"use client";
import dynamic from "next/dynamic";
import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
});

export default function ClientHeader() {
  const { language } = useLanguage();

  useEffect(() => {
    // 言語に応じてhtmlタグのlang属性を変更
    document.documentElement.lang = language;
  }, [language]);

  return <Header />;
}
