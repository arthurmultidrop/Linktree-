export default function StorePromos({
  promos,
  primaryColor,
}: {
  promos: { title: string; description: string; badge?: string }[];
  primaryColor: string;
}) {
  return (
    <div className="w-full space-y-3">
      {promos.map((promo, index) => (
        <div
          key={index}
          className="relative rounded-2xl p-4 border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in-up opacity-0 overflow-hidden"
          style={{
            animationDelay: `${1 + index * 0.1}s`,
            animationFillMode: "forwards",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{
              background: `linear-gradient(90deg, ${primaryColor}, transparent)`,
            }}
          />
          {promo.badge && (
            <span
              className="inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-wider text-white mb-2"
              style={{ backgroundColor: primaryColor }}
            >
              {promo.badge}
            </span>
          )}
          <h4 className="text-white font-semibold text-sm">{promo.title}</h4>
          <p className="text-white/60 text-xs mt-1">{promo.description}</p>
        </div>
      ))}
    </div>
  );
}
