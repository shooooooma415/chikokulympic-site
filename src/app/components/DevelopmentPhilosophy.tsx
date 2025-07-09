export default function DevelopmentPhilosophy() {
  return (
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
  );
}
