import TechCard from "./TechCard";

interface TechItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

interface TechSectionProps {
  title: string;
  items: TechItem[];
}

export default function TechSection({ title, items }: TechSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <TechCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}
