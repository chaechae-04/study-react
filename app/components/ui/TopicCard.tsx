interface TopicCardProps {
  title: string;
  description: string;
}

export default function TopicCard({ title, description }: TopicCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-emerald-400 transition-all duration-300 cursor-pointer">
      <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition">
        {title}
      </h3>
      <p className="text-neutral-400 text-sm">
        {description}
      </p>
    </div>
  );
}