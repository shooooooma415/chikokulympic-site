export default function Tech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            技術スタック
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            遅刻リンピックサイトを構築するために使用している最新の技術スタックをご紹介します。
          </p>
        </div>

        {/* フロントエンド（モバイル）セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            フロントエンド（モバイル）
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Next.js</h3>
              <p className="text-gray-600 mb-3">
                Reactベースのフレームワーク。高速なページ遷移とSEOに強い。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                モバイル対応
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">TypeScript</h3>
              <p className="text-gray-600 mb-3">
                型安全なJavaScriptで、保守性と信頼性を向上。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                開発効率向上
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4">Tailwind CSS</h3>
              <p className="text-gray-600 mb-3">
                ユーティリティファーストなCSSフレームワークで、素早いUI開発が可能。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                レスポンシブ対応
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-4">Framer Motion</h3>
              <p className="text-gray-600 mb-3">
                リッチなアニメーションを簡単に実装。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                スムーズなUX
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-4">レスポンシブデザイン</h3>
              <p className="text-gray-600 mb-3">
                スマートフォン、タブレット、デスクトップに対応。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                全デバイス対応
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">PWA対応</h3>
              <p className="text-gray-600 mb-3">
                プログレッシブWebアプリとして動作。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                ネイティブアプリ体験
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
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-4">Next.js API Routes</h3>
              <p className="text-gray-600 mb-3">
                サーバーサイドAPIエンドポイントを提供。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                フルスタック開発
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-4">React Hook Form</h3>
              <p className="text-gray-600 mb-3">
                フォーム管理とバリデーションを効率化。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                データ処理
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4">Zod</h3>
              <p className="text-gray-600 mb-3">
                型安全なバリデーションライブラリ。
              </p>
              <div className="text-sm text-purple-600 font-medium">
                データ検証
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-bold mb-4">データベース</h3>
              <p className="text-gray-600 mb-3">参加者情報や競技結果を管理。</p>
              <div className="text-sm text-purple-600 font-medium">
                データ永続化
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-4">認証システム</h3>
              <p className="text-gray-600 mb-3">参加者の安全なログイン機能。</p>
              <div className="text-sm text-purple-600 font-medium">
                セキュリティ
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-4">分析・レポート</h3>
              <p className="text-gray-600 mb-3">競技結果の統計と分析機能。</p>
              <div className="text-sm text-purple-600 font-medium">
                データ分析
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
