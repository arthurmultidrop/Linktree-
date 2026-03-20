export default function StoreFeatures({
  features,
  primaryColor,
}: {
  features: string[];
  primaryColor: string;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 border border-neutral-800/60 bg-neutral-900/50"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
