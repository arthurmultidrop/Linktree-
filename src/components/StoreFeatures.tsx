export default function StoreFeatures({
  features,
  primaryColor,
}: {
  features: string[];
  primaryColor: string;
}) {
  return (
    <div className="w-full animate-fade-up delay-200">
      <div className="flex flex-wrap justify-center gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold"
            style={{
              color: primaryColor,
              backgroundColor: `${primaryColor}10`,
            }}
          >
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}
