import { MapPin, Instagram } from "lucide-react";
import { StoreConfig } from "@/lib/types";

export default function StoreFooter({ store }: { store: StoreConfig }) {
  const { contact, socialMedia } = store;

  return (
    <footer className="w-full text-center space-y-4 pt-6 border-t border-neutral-800/60">
      {contact.address && (
        <p className="text-neutral-500 text-xs flex items-center justify-center gap-1.5">
          <MapPin size={12} />
          {contact.address}
        </p>
      )}

      {socialMedia?.instagram && (
        <div className="flex justify-center">
          <a
            href={`https://instagram.com/${socialMedia.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-neutral-300 transition-colors text-xs"
          >
            <Instagram size={12} />
            @{socialMedia.instagram}
          </a>
        </div>
      )}

      <div className="pt-4">
        <p className="text-neutral-700 text-[10px]">
          Powered by{" "}
          <a href="/" className="hover:text-neutral-500 transition-colors underline">
            NFC Card
          </a>
        </p>
      </div>
    </footer>
  );
}
