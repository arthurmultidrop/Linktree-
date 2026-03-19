"use client";

import { StoreLink } from "@/lib/types";

const iconMap: Record<string, string> = {
  website: "🌐",
  instagram: "📸",
  whatsapp: "💬",
  facebook: "👥",
  tiktok: "🎵",
  youtube: "▶️",
  maps: "📍",
  menu: "📋",
  delivery: "🛵",
  phone: "📞",
  email: "✉️",
  custom: "⭐",
};

export default function StoreLinks({
  links,
  primaryColor,
}: {
  links: StoreLink[];
  primaryColor: string;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group relative w-full px-6 py-4 rounded-2xl
            bg-white/10 backdrop-blur-md border border-white/10
            text-white font-medium text-center
            transition-all duration-300 ease-out
            hover:bg-white/20 hover:scale-[1.02] hover:border-white/25
            hover:shadow-lg active:scale-[0.98]
            animate-fade-in-up opacity-0
          `}
          style={{
            animationDelay: `${index * 0.08 + 0.3}s`,
            animationFillMode: "forwards",
          }}
        >
          <span
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}33, transparent)`,
            }}
          />
          <span className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-xl">{iconMap[link.type] || "🔗"}</span>
            <span>{link.title.replace(/^[\p{Emoji}\s]+/u, "")}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
