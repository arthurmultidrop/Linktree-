import Image from "next/image";
import { StoreConfig } from "@/lib/types";

export default function StoreHeader({ store }: { store: StoreConfig }) {
  const { name, tagline, description, theme, profileImage, coverImage } = store;

  const initials = name
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="w-full animate-fade-up">
      {/* Cover / Banner */}
      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-gray-200">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${name} cover`}
            fill
            className="object-cover"
            sizes="480px"
            priority
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.primaryColor}40, ${theme.primaryColor}15)`,
            }}
          />
        )}
        {/* Gradient fade at bottom for overlap area */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: `linear-gradient(to top, ${theme.bgColor || "#ffffff"}, transparent)`,
          }}
        />
      </div>

      {/* Profile photo — overlapping the banner */}
      <div className="flex justify-center -mt-14 relative z-10">
        <div
          className="w-[88px] h-[88px] rounded-full border-4 overflow-hidden flex items-center justify-center text-2xl font-bold text-white shadow-lg"
          style={{
            borderColor: theme.bgColor || "#ffffff",
            backgroundColor: theme.primaryColor,
          }}
        >
          {profileImage ? (
            <Image
              src={profileImage}
              alt={name}
              width={88}
              height={88}
              className="object-cover w-full h-full"
            />
          ) : (
            initials
          )}
        </div>
      </div>

      {/* Name + tagline + bio */}
      <div className="text-center mt-3 space-y-1.5 px-2">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          {name}
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          {tagline
            .replace(
              /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
              ""
            )
            .trim()}
        </p>
        {description && (
          <p className="text-[13px] text-gray-400 max-w-xs mx-auto leading-relaxed pt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
