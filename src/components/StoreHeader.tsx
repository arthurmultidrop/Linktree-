import { StoreConfig } from "@/lib/types";

export default function StoreHeader({ store }: { store: StoreConfig }) {
  const { name, tagline, description, theme } = store;

  return (
    <div className="text-center space-y-4">
      <div
        className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center text-xl font-semibold text-white"
        style={{ backgroundColor: theme.primaryColor }}
      >
        {name
          .split(" ")
          .filter((w) => w.length > 2)
          .slice(0, 2)
          .map((w) => w[0])
          .join("")
          .toUpperCase()}
      </div>

      <div>
        <h1 className="text-xl font-semibold text-neutral-50">{name}</h1>
        <p className="text-neutral-400 text-sm mt-1">
          {tagline.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "").trim()}
        </p>
      </div>

      {description && (
        <p className="text-neutral-500 text-xs max-w-xs mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
