"use client";
import TechSection from "../components/TechSection";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import DevelopmentPhilosophy from "../components/DevelopmentPhilosophy";

export default function Tech() {
  const frontendItems = [
    {
      icon: "🍎",
      title: "Swift",
      description:
        "iOSアプリ開発用の言語。型安全で高速なネイティブアプリを構築。",
      tag: "ネイティブ開発",
    },
    {
      icon: "🔥",
      title: "Firebase",
      description: "Google認証とFCMトークン発行による通知機能を実装。",
      tag: "認証・通知",
    },
    {
      icon: "🔐",
      title: "Google認証",
      description:
        "Firebase Authenticationを使用した安全なユーザー認証システム。",
      tag: "セキュリティ",
    },
    {
      icon: "📱",
      title: "FCM通知",
      description:
        "Firebase Cloud Messagingによるリアルタイムプッシュ通知機能。",
      tag: "リアルタイム",
    },
    {
      icon: "🎨",
      title: "SwiftUI",
      description: "宣言的UIフレームワークで、モダンなインターフェースを構築。",
      tag: "モダンUI",
    },
    {
      icon: "⚡",
      title: "Core Data",
      description: "ローカルデータ管理とオフライン対応機能を実装。",
      tag: "データ管理",
    },
  ];

  const backendItems = [
    {
      icon: "🐹",
      title: "Go",
      description: "高性能で並行処理に優れた言語。APIサーバーの構築に使用。",
      tag: "高速・軽量",
    },
    {
      icon: "⚡",
      title: "Echo",
      description: "軽量で高速なWebフレームワーク。RESTful APIの構築に最適。",
      tag: "高パフォーマンス",
    },
    {
      icon: "🐳",
      title: "Docker",
      description:
        "コンテナ化技術で環境の一貫性を保証。デプロイメントを効率化。",
      tag: "環境統一",
    },
    {
      icon: "☁️",
      title: "Google Cloud Run",
      description:
        "サーバーレスコンテナプラットフォーム。自動スケーリング対応。",
      tag: "サーバーレス",
    },
    {
      icon: "🍃",
      title: "MongoDB",
      description:
        "ユーザー、イベント、グループ管理と到着予定時刻の比較セグメント。",
      tag: "ドキュメントDB",
    },
    {
      icon: "🔴",
      title: "Redis",
      description:
        "インメモリデータベース。WebSocket通信でのランキング保持に使用。",
      tag: "高速キャッシュ",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            技術スタック
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            遅刻リンピックを構築するために使用している最新の技術スタックをご紹介します。
          </p>
        </div>

        <ArchitectureDiagram />
        <TechSection title="フロントエンド（モバイル）" items={frontendItems} />
        <TechSection title="バックエンド" items={backendItems} />
        <DevelopmentPhilosophy />
      </div>
    </div>
  );
}
