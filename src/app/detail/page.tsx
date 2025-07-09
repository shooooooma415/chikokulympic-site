"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function Detail() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t("detailTitle")}
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("detailDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4">
              {t("lastMinuteRaceDetail")}
            </h3>
            <p className="text-gray-700 mb-4">
              {t("lastMinuteRaceDetailDesc")}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("timeLimit")}</li>
              <li>• {t("arrivalTimeScore")}</li>
              <li>• {t("earlyLatePenalty")}</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="text-xl font-bold mb-4">
              {t("oversleepMarathonDetail")}
            </h3>
            <p className="text-gray-700 mb-4">
              {t("oversleepMarathonDetailDesc")}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("targetWakeTime")}</li>
              <li>• {t("naturalOversleep")}</li>
              <li>• {t("excuseCredibility")}</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-4">
              {t("excusePresentationDetail")}
            </h3>
            <p className="text-gray-700 mb-4">
              {t("excusePresentationDetailDesc")}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("presentationTime")}</li>
              <li>• {t("creativityHumor")}</li>
              <li>• {t("audienceLaughter")}</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-4">
              {t("alarmSnoozeChampionshipDetail")}
            </h3>
            <p className="text-gray-700 mb-4">
              {t("alarmSnoozeChampionshipDetailDesc")}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {t("timeLimit1Hour")}</li>
              <li>• {t("snoozeCount")}</li>
              <li>• {t("finalWakeTime")}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {t("howToEnjoy")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">😄</div>
              <h3 className="font-bold mb-2">{t("asParticipant")}</h3>
              <p className="text-gray-600 text-sm">{t("asParticipantDesc")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-bold mb-2">{t("asSpectator")}</h3>
              <p className="text-gray-600 text-sm">{t("asSpectatorDesc")}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-bold mb-2">{t("asCommunity")}</h3>
              <p className="text-gray-600 text-sm">{t("asCommunityDesc")}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">{t("joinUs")}</h2>
          <p className="text-lg mb-6">{t("joinUsDesc")}</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            {t("applyToJoin")}
          </button>
        </div>
      </div>
    </div>
  );
}
