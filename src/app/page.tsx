import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* ヒーローセクション */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🏃‍♂️⏰</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            遅刻リンピック
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            遅刻王を決める
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/detail"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              競技を見る
            </Link>
            <Link
              href="/about"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-600"
            >
              詳細を読む
            </Link>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            遅刻リンピックの特徴
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">ユニークな競技</h3>
              <p className="text-gray-600">
                遅刻をテーマにした、世界初の競技大会です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">😄</div>
              <h3 className="text-xl font-bold mb-4">笑いと共感</h3>
              <p className="text-gray-600">
                誰もが経験する遅刻を、楽しく競技化しました。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-4">新しい価値観</h3>
              <p className="text-gray-600">
                遅刻を前向きに捉える新しい視点を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 競技紹介セクション */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            主な競技種目
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">ギリギリ到着レース</h3>
              <p className="text-gray-700">
                制限時間ギリギリに到着できるかを競う
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">寝坊マラソン</h3>
              <p className="text-gray-700">どれだけ自然に寝坊できるかを競う</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">
                言い訳プレゼンテーション
              </h3>
              <p className="text-gray-700">
                遅刻の言い訳をユーモアたっぷりに発表
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-xl p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">アラームスヌーズ選手権</h3>
              <p className="text-gray-700">アラームを何度スヌーズできるか</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} 遅刻リンピック実行委員会</p>
      </footer>
    </div>
  );
}
