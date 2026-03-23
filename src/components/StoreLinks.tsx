"use client";

import { StoreLink } from "@/lib/types";
import {
  Globe,
  Instagram,
  MessageCircle,
  Facebook,
  Music2,
  Youtube,
  MapPin,
  FileText,
  Bike,
  Phone,
  Mail,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { ComponentType } from "react";

const iconMap: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  website: Globe,
  instagram: Instagram,
  whatsapp: MessageCircle,
  facebook: Facebook,
  tiktok: Music2,
  youtube: Youtube,
  maps: MapPin,
  menu: FileText,
  delivery: Bike,
  phone: Phone,
  email: Mail,
  custom: Star,
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
      {links.map((link, index) => {
        const Icon = iconMap[link.type] || Globe;
        const cleanTitle = link.title
          .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
          .trim();

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="store-link group relative flex items-center w-full px-5 py-4 rounded-2xl bg-white text-gray-800 font-medium text-[15px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={
              {
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
                animationDelay: `${index * 60}ms`,
                "--accent": primaryColor,
              } as React.CSSProperties
            }
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mr-3.5 transition-colors duration-200"
              style={{
                backgroundColor: `${primaryColor}12`,
                color: primaryColor,
              }}
            >
              <Icon size={17} />
            </div>

            {/* Title */}
            <span className="flex-1 text-gray-800">{cleanTitle}</span>

            {/* Arrow */}
            <ArrowUpRight
              size={15}
              className="text-gray-300 group-hover:text-gray-500 transition-colors shrink-0 ml-2"
            />

            {/* Hover accent border */}
            <div
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current transition-colors duration-200 pointer-events-none opacity-0 group-hover:opacity-100"
              style={{ borderColor: `${primaryColor}30` }}
            />
          </a>
        );
      })}
    </div>
  );
}
