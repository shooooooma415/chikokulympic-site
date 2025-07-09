export default function Detail() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            内容詳細
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            遅刻リンピックの具体的な競技内容やルール、楽しみ方を詳しくご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold mb-4">ギリギリ到着レース</h3>
            <p className="text-gray-700 mb-4">
              制限時間ギリギリに到着できるかを競う競技です。
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 制限時間：30分</li>
              <li>• 到着時間が制限時間に近いほど高得点</li>
              <li>• 早すぎても遅すぎても減点</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="text-xl font-bold mb-4">寝坊マラソン</h3>
            <p className="text-gray-700 mb-4">
              どれだけ自然に寝坊できるかを競う競技です。
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 目標起床時間：8:00</li>
              <li>• 自然な寝坊具合を審査</li>
              <li>• 言い訳の説得力も評価</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-bold mb-4">言い訳プレゼンテーション</h3>
            <p className="text-gray-700 mb-4">
              遅刻の言い訳をユーモアたっぷりに発表する競技です。
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 発表時間：3分</li>
              <li>• 創造性とユーモアを評価</li>
              <li>• 観客の笑い声で判定</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-4">アラームスヌーズ選手権</h3>
            <p className="text-gray-700 mb-4">
              アラームを何度スヌーズできるかを競う競技です。
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 制限時間：1時間</li>
              <li>• スヌーズ回数を記録</li>
              <li>• 最終的な起床時間も評価</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">楽しみ方</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">😄</div>
              <h3 className="font-bold mb-2">参加者として</h3>
              <p className="text-gray-600 text-sm">
                自分の遅刻力を競技で試してみましょう。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-bold mb-2">観客として</h3>
              <p className="text-gray-600 text-sm">
                他の参加者のユニークな競技を楽しみましょう。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="font-bold mb-2">コミュニティ</h3>
              <p className="text-gray-600 text-sm">
                新しい価値観を共有する仲間を見つけましょう。
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">参加してみませんか？</h2>
          <p className="text-lg mb-6">
            遅刻リンピックで、新しい自分を発見しましょう。
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
            参加申し込み
          </button>
        </div>
      </div>
    </div>
  );
}
