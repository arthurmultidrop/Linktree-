import { StoreConfig } from "@/lib/types";

export const stores: Record<string, StoreConfig> = {
  "pizzaria-bella": {
    slug: "pizzaria-bella",
    name: "Pizzaria Bella Napoli",
    tagline: "A verdadeira pizza napolitana em suas mãos 🍕",
    description: "Desde 2015 trazendo o melhor da culinária italiana para você. Massa artesanal, ingredientes selecionados e muito amor em cada fatia.",
    logo: "/stores/pizzaria-bella-logo.png",
    coverImage: "/stores/pizzaria-bella-cover.jpg",
    theme: {
      primaryColor: "#dc2626",
      secondaryColor: "#fbbf24",
      bgGradientFrom: "#1a0a0a",
      bgGradientTo: "#2d1810",
      style: "vibrant",
    },
    contact: {
      phone: "(11) 99999-1234",
      whatsapp: "5511999991234",
      email: "contato@bellanapoli.com.br",
      address: "Rua das Pizzas, 123 - Centro, São Paulo - SP",
    },
    links: [
      { title: "📋 Cardápio Completo", url: "#", type: "menu", icon: "menu" },
      { title: "🛵 Peça pelo iFood", url: "https://ifood.com.br", type: "delivery", icon: "delivery" },
      { title: "📍 Como Chegar", url: "https://maps.google.com", type: "maps", icon: "maps" },
      { title: "📸 Nosso Instagram", url: "https://instagram.com", type: "instagram", icon: "instagram" },
      { title: "💬 Fale Conosco", url: "https://wa.me/5511999991234", type: "whatsapp", icon: "whatsapp" },
      { title: "⭐ Avalie no Google", url: "https://google.com", type: "custom", icon: "custom" },
    ],
    schedule: [
      { day: "Segunda a Quinta", hours: "18:00 - 23:00" },
      { day: "Sexta e Sábado", hours: "18:00 - 00:00" },
      { day: "Domingo", hours: "18:00 - 22:00" },
    ],
    socialMedia: {
      instagram: "bellanapoli",
      facebook: "pizzariabellanapoli",
    },
    features: ["Wi-Fi Grátis", "Estacionamento", "Espaço Kids", "Delivery"],
    promos: [
      {
        title: "Pizza em Dobro",
        description: "Todas as terças-feiras, na compra de uma pizza grande, ganhe outra!",
        badge: "TERÇA DUPLA",
      },
    ],
  },
  "barbearia-classic": {
    slug: "barbearia-classic",
    name: "Barbearia Classic Cut",
    tagline: "Estilo e tradição em cada corte ✂️",
    description: "Barbearia premium com ambiente exclusivo. Cortes clássicos e modernos, barba, tratamentos capilares e muito mais.",
    theme: {
      primaryColor: "#d4a574",
      secondaryColor: "#1a1a2e",
      bgGradientFrom: "#0a0a0a",
      bgGradientTo: "#1a1a2e",
      style: "elegant",
    },
    contact: {
      phone: "(11) 98888-5678",
      whatsapp: "5511988885678",
      address: "Av. Paulista, 1000 - Sala 12, São Paulo - SP",
    },
    links: [
      { title: "📅 Agende seu Horário", url: "#", type: "website", icon: "website" },
      { title: "💈 Nossos Serviços", url: "#", type: "menu", icon: "menu" },
      { title: "📸 Instagram", url: "https://instagram.com", type: "instagram", icon: "instagram" },
      { title: "📍 Localização", url: "https://maps.google.com", type: "maps", icon: "maps" },
      { title: "💬 WhatsApp", url: "https://wa.me/5511988885678", type: "whatsapp", icon: "whatsapp" },
    ],
    schedule: [
      { day: "Segunda a Sexta", hours: "09:00 - 20:00" },
      { day: "Sábado", hours: "09:00 - 18:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    socialMedia: {
      instagram: "classiccut",
    },
    features: ["Wi-Fi Grátis", "Cerveja Artesanal", "TV a Cabo", "Ar Condicionado"],
    promos: [
      {
        title: "Combo Barba + Corte",
        description: "Corte + barba por apenas R$ 59,90",
        badge: "OFERTA",
      },
    ],
  },
  "cafe-aroma": {
    slug: "cafe-aroma",
    name: "Café Aroma & Arte",
    tagline: "Onde cada xícara conta uma história ☕",
    description: "Cafeteria artesanal com grãos selecionados, ambiente acolhedor e opções deliciosas de brunch.",
    theme: {
      primaryColor: "#92400e",
      secondaryColor: "#f5f0e8",
      bgGradientFrom: "#1c1207",
      bgGradientTo: "#2d1f0e",
      style: "modern",
    },
    contact: {
      phone: "(11) 97777-9012",
      whatsapp: "5511977779012",
      email: "ola@cafearoma.com.br",
      address: "Rua Augusta, 500 - Consolação, São Paulo - SP",
    },
    links: [
      { title: "☕ Nosso Menu", url: "#", type: "menu", icon: "menu" },
      { title: "📸 Instagram", url: "https://instagram.com", type: "instagram", icon: "instagram" },
      { title: "📍 Como Chegar", url: "https://maps.google.com", type: "maps", icon: "maps" },
      { title: "💬 WhatsApp", url: "https://wa.me/5511977779012", type: "whatsapp", icon: "whatsapp" },
      { title: "🎵 TikTok", url: "https://tiktok.com", type: "tiktok", icon: "tiktok" },
    ],
    schedule: [
      { day: "Segunda a Sexta", hours: "07:00 - 19:00" },
      { day: "Sábado e Domingo", hours: "08:00 - 17:00" },
    ],
    socialMedia: {
      instagram: "cafearomaarte",
      tiktok: "cafearomaarte",
    },
    features: ["Wi-Fi Grátis", "Tomadas", "Pet Friendly", "Acessível"],
  },
  "pontonet": {
    slug: "pontonet",
    name: "PontoNet",
    tagline: "O seu provedor de internet 🌐",
    description: "Há mais de 7 anos conectando Parauapebas com internet de qualidade. Fibra óptica com velocidade real, suporte humanizado e a melhor experiência de conexão da região.",
    theme: {
      primaryColor: "#0ea5e9",
      secondaryColor: "#6366f1",
      bgGradientFrom: "#020617",
      bgGradientTo: "#0c1a3d",
      style: "modern",
    },
    contact: {
      phone: "(94) 99999-0000",
      whatsapp: "5594999990000",
      email: "contato@pontonetpa.com.br",
      address: "Parauapebas - PA",
    },
    links: [
      { title: "📶 Conheça Nossos Planos", url: "https://pontonetpa.com.br", type: "website", icon: "website" },
      { title: "💬 Assine pelo WhatsApp", url: "https://wa.me/5594999990000", type: "whatsapp", icon: "whatsapp" },
      { title: "📸 Siga no Instagram", url: "https://instagram.com/_pontonett", type: "instagram", icon: "instagram" },
      { title: "🌐 Acesse Nosso Site", url: "https://pontonetpa.com.br", type: "website", icon: "website" },
      { title: "📍 Nossa Localização", url: "https://maps.google.com", type: "maps", icon: "maps" },
      { title: "📞 Central de Atendimento", url: "tel:+5594999990000", type: "phone", icon: "phone" },
      { title: "⭐ Avalie no Google", url: "https://google.com", type: "custom", icon: "custom" },
    ],
    schedule: [
      { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
      { day: "Sábado", hours: "08:00 - 12:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    socialMedia: {
      instagram: "_pontonett",
    },
    features: ["Fibra Óptica", "Suporte 24h", "Sem Fidelidade", "Instalação Grátis"],
    promos: [
      {
        title: "Internet Fibra a partir de R$ 69,90/mês",
        description: "Planos de 100 a 500 Mega com fibra óptica direto na sua casa. Instalação grátis!",
        badge: "FIBRA ÓPTICA",
      },
      {
        title: "Indique um Amigo",
        description: "Indique um amigo e ganhe desconto na sua próxima mensalidade!",
        badge: "PROMOÇÃO",
      },
    ],
  },
};

export function getStore(slug: string): StoreConfig | undefined {
  return stores[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(stores);
}
