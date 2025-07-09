export default function DevelopmentPhilosophy() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">開発理念</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3 text-purple-600">
            フロントエンド
          </h3>
          <p className="text-gray-700">
            モバイルファーストの設計で、どのデバイスからでも快適に利用できるユーザー体験を提供する。
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3 text-purple-600">
            バックエンド
          </h3>
          <p className="text-gray-700">
            クリーンアーキテクチャを踏襲し変更に強い設計になっている。また、テスト駆動開発を行い、バグを減らしている。
          </p>
        </div>
      </div>
    </div>
  );
}
