import { MapPin, Nfc } from "lucide-react";
import { StoreConfig } from "@/lib/types";

export default function StoreFooter({ store }: { store: StoreConfig }) {
  const { contact } = store;

  return (
    <footer className="w-full flex flex-col items-center gap-3 pt-2 animate-fade-up delay-500">
      {/* Address */}
      {contact.address && (
        <p className="text-gray-400 text-xs flex items-center gap-1.5 text-center">
          <MapPin size={12} className="shrink-0" />
          {contact.address}
        </p>
      )}

      {/* TopFind branding */}
      <div className="pt-4 pb-2 w-full flex justify-center">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 text-gray-400 text-[11px] font-medium hover:bg-gray-200 hover:text-gray-500 transition-all duration-200"
        >
          <Nfc size={11} />
          Feito com TopFind
        </a>
      </div>
    </footer>
  );
}
