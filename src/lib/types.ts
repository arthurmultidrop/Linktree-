export interface StoreLink {
  title: string;
  url: string;
  icon?: string;
  type: "website" | "instagram" | "whatsapp" | "facebook" | "tiktok" | "youtube" | "maps" | "menu" | "delivery" | "phone" | "email" | "custom";
}

export interface StoreSchedule {
  day: string;
  hours: string;
}

export interface StoreConfig {
  slug: string;
  name: string;
  tagline: string;
  description?: string;
  logo?: string;
  coverImage?: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    bgGradientFrom: string;
    bgGradientTo: string;
    style: "modern" | "elegant" | "vibrant" | "minimal";
  };
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    address?: string;
  };
  links: StoreLink[];
  schedule?: StoreSchedule[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
  features?: string[];
  promos?: {
    title: string;
    description: string;
    badge?: string;
  }[];
}
