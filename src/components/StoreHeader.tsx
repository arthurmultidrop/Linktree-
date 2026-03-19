import { StoreConfig } from "@/lib/types";

export default function StoreHeader({ store }: { store: StoreConfig }) {
  const { name, tagline, description, theme } = store;

  return (
    <div className="text-center space-y-3 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
      {/* Logo placeholder - circle with initials */}
      <div
        className="mx-auto w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-2xl animate-pulse-glow"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
        }}
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
        <h1 className="text-2xl font-bold text-white tracking-tight">{name}</h1>
        <p className="text-white/70 text-sm mt-1">{tagline}</p>
      </div>

      {description && (
        <p className="text-white/50 text-xs max-w-xs mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
