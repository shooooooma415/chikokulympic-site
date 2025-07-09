export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            遅刻リンピック 概要
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            遅刻リンピックは、現代社会の"遅刻"という現象をポジティブに捉え直し、ユーモアと競技性を融合させた新感覚イベントです。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">ユニークな競技</h3>
            <p className="text-gray-600">
              遅刻をテーマにした多彩な競技で、参加者の創造性とユーモアを競い合います。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">😄</div>
            <h3 className="text-xl font-bold mb-4">オープンな雰囲気</h3>
            <p className="text-gray-600">
              誰でも気軽に参加できる、笑いと共感を生むコミュニティを形成します。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-4">新しい価値観</h3>
            <p className="text-gray-600">
              遅刻を前向きに捉えることで、社会問題への新しいアプローチを提案します。
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-4">コミュニティ形成</h3>
            <p className="text-gray-600">
              参加者同士が笑い合い、共感し合える新しいコミュニティを作ります。
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            私たちのビジョン
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            遅刻リンピックを通じて、現代社会の時間に対するプレッシャーを軽減し、遅刻という現象を楽しく、前向きに捉える文化を創造します。誰もが経験する遅刻を、競技として楽しむことで、新しい価値観とコミュニティを生み出していきます。
          </p>
        </div>
      </div>
    </div>
  );
}
