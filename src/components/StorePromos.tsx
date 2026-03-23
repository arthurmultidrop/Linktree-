import { Sparkles } from "lucide-react";

export default function StorePromos({
  promos,
  primaryColor,
}: {
  promos: { title: string; description: string; badge?: string }[];
  primaryColor: string;
}) {
  return (
    <div className="w-full space-y-3 animate-fade-up delay-100">
      {promos.map((promo, index) => (
        <div
          key={index}
          className="rounded-2xl p-4 relative overflow-hidden"
          style={{
            backgroundColor: `${primaryColor}08`,
            border: `1px solid ${primaryColor}18`,
          }}
        >
          {/* Accent dot */}
          <div
            className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"
            style={{ backgroundColor: primaryColor }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles
                size={13}
                style={{ color: primaryColor }}
              />
              {promo.badge && (
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider text-white uppercase"
                  style={{ backgroundColor: primaryColor }}
                >
                  {promo.badge}
                </span>
              )}
            </div>
            <h4 className="text-gray-800 font-semibold text-sm">
              {promo.title}
            </h4>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              {promo.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
