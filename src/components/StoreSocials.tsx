import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

const socialConfig = {
  instagram: {
    icon: Instagram,
    url: (handle: string) => `https://instagram.com/${handle}`,
    label: "Instagram",
  },
  facebook: {
    icon: Facebook,
    url: (handle: string) => `https://facebook.com/${handle}`,
    label: "Facebook",
  },
  tiktok: {
    icon: Music2,
    url: (handle: string) => `https://tiktok.com/@${handle}`,
    label: "TikTok",
  },
  youtube: {
    icon: Youtube,
    url: (handle: string) => `https://youtube.com/@${handle}`,
    label: "YouTube",
  },
} as const;

type SocialKey = keyof typeof socialConfig;

export default function StoreSocials({
  socialMedia,
  primaryColor,
}: {
  socialMedia: Partial<Record<SocialKey, string>>;
  primaryColor: string;
}) {
  const entries = (Object.entries(socialMedia) as [SocialKey, string][]).filter(
    ([, handle]) => handle
  );

  if (entries.length === 0) return null;

  return (
    <div className="flex justify-center gap-3 animate-fade-up delay-400">
      {entries.map(([key, handle]) => {
        const config = socialConfig[key];
        if (!config) return null;
        const Icon = config.icon;

        return (
          <a
            key={key}
            href={config.url(handle)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={config.label}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: `${primaryColor}12`,
              color: primaryColor,
            }}
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
