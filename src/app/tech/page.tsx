"use client";
import Image from "next/image";

export default function Tech() {
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

        {/* アーキテクチャ図 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            アーキテクチャ図
          </h2>
          <div className="flex justify-center">
            <Image
              src="/frontend-backend-architecture.png"
              alt="システムアーキテクチャ図"
              width={800}
              height={600}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              }}
              priority
            />
          </div>
        </div>

        {/* フロントエンド（モバイル）セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            フロントエンド（モバイル）
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🍎</div>
              <h3 className="text-xl font-bold mb-4">Swift</h3>
              <p className="text-gray-600 mb-3">
                iOSアプリ開発用の言語。型安全で高速なネイティブアプリを構築。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                ネイティブ開発
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold mb-4">Firebase</h3>
              <p className="text-gray-600 mb-3">
                Google認証とFCMトークン発行による通知機能を実装。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                認証・通知
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-4">Google認証</h3>
              <p className="text-gray-600 mb-3">
                Firebase Authenticationを使用した安全なユーザー認証システム。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                セキュリティ
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">FCM通知</h3>
              <p className="text-gray-600 mb-3">
                Firebase Cloud Messagingによるリアルタイムプッシュ通知機能。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                リアルタイム
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">SwiftUI</h3>
              <p className="text-gray-600 mb-3">
                宣言的UIフレームワークで、モダンなインターフェースを構築。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                モダンUI
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Core Data</h3>
              <p className="text-gray-600 mb-3">
                ローカルデータ管理とオフライン対応機能を実装。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                データ管理
              </div>
            </div>
          </div>
        </div>

        {/* バックエンドセクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            バックエンド
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🐹</div>
              <h3 className="text-xl font-bold mb-4">Go</h3>
              <p className="text-gray-600 mb-3">
                高性能で並行処理に優れた言語。APIサーバーの構築に使用。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                高速・軽量
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Echo</h3>
              <p className="text-gray-600 mb-3">
                軽量で高速なWebフレームワーク。RESTful APIの構築に最適。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                高パフォーマンス
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🐳</div>
              <h3 className="text-xl font-bold mb-4">Docker</h3>
              <p className="text-gray-600 mb-3">
                コンテナ化技術で環境の一貫性を保証。デプロイメントを効率化。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                環境統一
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-4">Google Cloud Run</h3>
              <p className="text-gray-600 mb-3">
                サーバーレスコンテナプラットフォーム。自動スケーリング対応。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                サーバーレス
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🍃</div>
              <h3 className="text-xl font-bold mb-4">MongoDB</h3>
              <p className="text-gray-600 mb-3">
                ユーザー、イベント、グループ管理と到着予定時刻の比較セグメント。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                ドキュメントDB
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🔴</div>
              <h3 className="text-xl font-bold mb-4">Redis</h3>
              <p className="text-gray-600 mb-3">
                インメモリデータベース。WebSocket通信でのランキング保持に使用。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                高速キャッシュ
              </div>
            </div>
          </div>
        </div>

        {/* 開発理念 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">開発理念</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-600">
                フロントエンド重視
              </h3>
              <p className="text-gray-700">
                モバイルファーストの設計で、どのデバイスからでも快適に利用できるユーザー体験を提供します。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3 text-purple-600">
                バックエンド安定性
              </h3>
              <p className="text-gray-700">
                セキュアでスケーラブルなバックエンドシステムにより、安全で信頼性の高いサービスを実現します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
