export default function StoreFeatures({
  features,
  primaryColor,
}: {
  features: string[];
  primaryColor: string;
}) {
  return (
    <div
      className="w-full animate-fade-in-up opacity-0"
      style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
    >
      <div className="flex flex-wrap justify-center gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full text-xs font-medium text-white/90 border border-white/15 bg-white/5"
            style={{
              borderColor: `${primaryColor}40`,
              backgroundColor: `${primaryColor}15`,
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
