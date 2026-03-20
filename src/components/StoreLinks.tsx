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
  ExternalLink,
} from "lucide-react";
import { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
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
    <div className="flex flex-col gap-2.5 w-full">
      {links.map((link, index) => {
        const Icon = iconMap[link.type] || ExternalLink;
        const cleanTitle = link.title.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "").trim();

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl border border-neutral-800/60 bg-neutral-900/50 text-neutral-200 text-sm font-medium transition-colors hover:bg-neutral-800/80 hover:border-neutral-700 active:bg-neutral-800"
          >
            <Icon size={16} className="text-neutral-500 shrink-0" />
            <span className="flex-1">{cleanTitle}</span>
            <ExternalLink size={12} className="text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </a>
        );
      })}
    </div>
  );
}
