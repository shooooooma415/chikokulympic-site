"use client";
import TechSection from "../components/TechSection";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import DevelopmentPhilosophy from "../components/DevelopmentPhilosophy";
import { useTranslation } from "../hooks/useTranslation";
import { translations } from "../translations";

export default function Tech() {
  const { t, language } = useTranslation();
  const frontendItems = [...translations[language].techFrontend];
  const backendItems = [...translations[language].techBackend];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t("techTitle")}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("techDescription")}
          </p>
        </div>

        <ArchitectureDiagram />
        <TechSection
          title={
            language === "ja"
              ? "フロントエンド（モバイル）"
              : "Frontend (Mobile)"
          }
          items={frontendItems}
        />
        <TechSection
          title={language === "ja" ? "バックエンド" : "Backend"}
          items={backendItems}
        />
        <DevelopmentPhilosophy />
      </div>
    </div>
  );
}
