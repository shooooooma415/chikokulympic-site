interface TechCardProps {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export default function TechCard({
  icon,
  title,
  description,
  tag,
}: TechCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg card-hover">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="text-sm text-purple-600 font-medium">{tag}</div>
    </div>
  );
}
