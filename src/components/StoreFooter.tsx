import { StoreConfig } from "@/lib/types";

export default function StoreFooter({ store }: { store: StoreConfig }) {
  const { contact, socialMedia } = store;

  return (
    <footer
      className="w-full text-center space-y-4 pt-6 border-t border-white/10 animate-fade-in-up opacity-0"
      style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
    >
      {contact.address && (
        <p className="text-white/40 text-xs flex items-center justify-center gap-1">
          <span>📍</span> {contact.address}
        </p>
      )}

      {socialMedia && (
        <div className="flex justify-center gap-4">
          {socialMedia.instagram && (
            <a
              href={`https://instagram.com/${socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/80 transition-colors text-sm"
            >
              @{socialMedia.instagram}
            </a>
          )}
        </div>
      )}

      <div className="pt-4">
        <p className="text-white/20 text-[10px]">
          Powered by{" "}
          <a href="/" className="hover:text-white/40 transition-colors underline">
            NFC Card
          </a>
        </p>
      </div>
    </footer>
  );
}
