"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t("aboutTitle")}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("aboutDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">
              {t("uniqueCompetitionAbout")}
            </h3>
            <p className="text-gray-600">{t("uniqueCompetitionAboutDesc")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">😄</div>
            <h3 className="text-xl font-bold mb-4">{t("openAtmosphere")}</h3>
            <p className="text-gray-600">{t("openAtmosphereDesc")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-4">{t("newValues")}</h3>
            <p className="text-gray-600">{t("newValuesDesc")}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4">{t("communityBuilding")}</h3>
            <p className="text-gray-600">{t("communityBuildingDesc")}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("ourVision")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("ourVisionDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
