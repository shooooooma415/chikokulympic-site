import Image from "next/image";

export default function ArchitectureDiagram() {
  return (
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
  );
}
