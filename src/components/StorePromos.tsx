import { Tag } from "lucide-react";

export default function StorePromos({
  promos,
  primaryColor,
}: {
  promos: { title: string; description: string; badge?: string }[];
  primaryColor: string;
}) {
  return (
    <div className="w-full space-y-2.5">
      {promos.map((promo, index) => (
        <div
          key={index}
          className="rounded-xl p-4 border border-neutral-800/60 bg-neutral-900/50"
        >
          <div className="flex items-start gap-3">
            <Tag size={14} className="text-neutral-500 mt-0.5 shrink-0" />
            <div>
              {promo.badge && (
                <span
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-white mb-1.5"
                  style={{ backgroundColor: primaryColor }}
                >
                  {promo.badge}
                </span>
              )}
              <h4 className="text-neutral-100 font-medium text-sm">{promo.title}</h4>
              <p className="text-neutral-500 text-xs mt-1 leading-relaxed">{promo.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
