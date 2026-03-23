import { StoreConfig } from "@/lib/types";

export const stores: Record<string, StoreConfig> = {
  "pizzaria-bella": {
    slug: "pizzaria-bella",
    name: "Pizzaria Bella Napoli",
    tagline: "A verdadeira pizza napolitana em suas mãos",
    description:
      "Desde 2015 trazendo o melhor da culinária italiana para você. Massa artesanal, ingredientes selecionados e muito amor em cada fatia.",
    profileImage:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop&crop=center",
    coverImage:
      "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=800&h=400&fit=crop&crop=center",
    theme: {
      primaryColor: "#dc2626",
      secondaryColor: "#fbbf24",
      bgColor: "#fef7f5",
      fontFamily: "DM Sans",
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
      { title: "Cardápio Completo", url: "#", type: "menu", icon: "menu" },
      {
        title: "Peça pelo iFood",
        url: "https://ifood.com.br",
        type: "delivery",
        icon: "delivery",
      },
      {
        title: "Como Chegar",
        url: "https://maps.google.com",
        type: "maps",
        icon: "maps",
      },
      {
        title: "Fale Conosco",
        url: "https://wa.me/5511999991234",
        type: "whatsapp",
        icon: "whatsapp",
      },
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
        description:
          "Todas as terças-feiras, na compra de uma pizza grande, ganhe outra!",
        badge: "TERÇA DUPLA",
      },
    ],
    products: [
      {
        title: "Margherita",
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop",
        price: "R$ 42,90",
        description: "Molho de tomate, mussarela e manjericão fresco",
      },
      {
        title: "Pepperoni",
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop",
        price: "R$ 49,90",
        description: "Pepperoni artesanal com mussarela especial",
      },
      {
        title: "Quatro Queijos",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop",
        price: "R$ 52,90",
        description: "Mussarela, gorgonzola, parmesão e provolone",
      },
      {
        title: "Calabresa",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop",
        price: "R$ 39,90",
        description: "Calabresa fatiada com cebola e azeitonas",
      },
    ],
    textBlock: {
      title: "Sobre Nós",
      content:
        "A Bella Napoli nasceu da paixão pela autêntica pizza napolitana. Nosso forno a lenha atinge 485°C, criando a crocância perfeita em cada fatia. Venha nos visitar!",
    },
  },
  "barbearia-classic": {
    slug: "barbearia-classic",
    name: "Barbearia Classic Cut",
    tagline: "Estilo e tradição em cada corte",
    description:
      "Barbearia premium com ambiente exclusivo. Cortes clássicos e modernos, barba, tratamentos capilares e muito mais.",
    profileImage:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=200&h=200&fit=crop&crop=center",
    coverImage:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=400&fit=crop&crop=center",
    theme: {
      primaryColor: "#78552b",
      secondaryColor: "#1a1a2e",
      bgColor: "#faf8f5",
      fontFamily: "DM Sans",
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
      {
        title: "Agende seu Horário",
        url: "#",
        type: "website",
        icon: "website",
      },
      { title: "Nossos Serviços", url: "#", type: "menu", icon: "menu" },
      {
        title: "WhatsApp",
        url: "https://wa.me/5511988885678",
        type: "whatsapp",
        icon: "whatsapp",
      },
      {
        title: "Localização",
        url: "https://maps.google.com",
        type: "maps",
        icon: "maps",
      },
    ],
    schedule: [
      { day: "Segunda a Sexta", hours: "09:00 - 20:00" },
      { day: "Sábado", hours: "09:00 - 18:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    socialMedia: {
      instagram: "classiccut",
    },
    features: [
      "Wi-Fi Grátis",
      "Cerveja Artesanal",
      "TV a Cabo",
      "Ar Condicionado",
    ],
    promos: [
      {
        title: "Combo Barba + Corte",
        description: "Corte + barba por apenas R$ 59,90",
        badge: "OFERTA",
      },
    ],
    products: [
      {
        title: "Corte Clássico",
        image:
          "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&h=300&fit=crop",
        price: "R$ 45,00",
        description: "Corte tesoura e máquina com acabamento",
      },
      {
        title: "Barba Completa",
        image:
          "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=300&h=300&fit=crop",
        price: "R$ 35,00",
        description: "Modelagem com toalha quente e hidratação",
      },
      {
        title: "Combo Premium",
        image:
          "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=300&h=300&fit=crop",
        price: "R$ 59,90",
        description: "Corte + barba + sobrancelha",
      },
      {
        title: "Pigmentação",
        image:
          "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=300&h=300&fit=crop",
        price: "R$ 80,00",
        description: "Pigmentação capilar e de barba",
      },
    ],
    textBlock: {
      title: "O Espaço",
      content:
        "Um refúgio masculino no coração da Paulista. Ambiente com decoração vintage, cerveja artesanal gelada e som ambiente. Aqui você relaxa enquanto cuida do visual.",
    },
  },
  "cafe-aroma": {
    slug: "cafe-aroma",
    name: "Café Aroma & Arte",
    tagline: "Onde cada xícara conta uma história",
    description:
      "Cafeteria artesanal com grãos selecionados, ambiente acolhedor e opções deliciosas de brunch.",
    profileImage:
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=200&h=200&fit=crop&crop=center",
    coverImage:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=400&fit=crop&crop=center",
    theme: {
      primaryColor: "#92400e",
      secondaryColor: "#f5f0e8",
      bgColor: "#faf6f1",
      fontFamily: "DM Sans",
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
      { title: "Nosso Menu", url: "#", type: "menu", icon: "menu" },
      {
        title: "Peça pelo WhatsApp",
        url: "https://wa.me/5511977779012",
        type: "whatsapp",
        icon: "whatsapp",
      },
      {
        title: "Como Chegar",
        url: "https://maps.google.com",
        type: "maps",
        icon: "maps",
      },
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
    products: [
      {
        title: "Espresso Duplo",
        image:
          "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=300&fit=crop",
        price: "R$ 12,00",
        description: "Grãos especiais torrados na casa",
      },
      {
        title: "Cappuccino",
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=300&fit=crop",
        price: "R$ 16,00",
        description: "Com leite vaporizado e canela",
      },
      {
        title: "Brunch Completo",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=300&h=300&fit=crop",
        price: "R$ 49,90",
        description: "Ovos, pães artesanais, frutas e café",
      },
      {
        title: "Bolo de Cenoura",
        image:
          "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=300&fit=crop",
        price: "R$ 14,00",
        description: "Receita da casa com cobertura de chocolate",
      },
    ],
    textBlock: {
      title: "Nossa História",
      content:
        "Começamos como um sonho entre duas amigas apaixonadas por café. Hoje, nossos grãos vêm direto de pequenos produtores de Minas Gerais e são torrados aqui mesmo, toda semana.",
    },
  },
  "pontonet": {
    slug: "pontonet",
    name: "PontoNet",
    tagline: "O seu provedor de internet",
    description:
      "Há mais de 7 anos conectando Parauapebas com internet de qualidade. Fibra óptica com velocidade real, suporte humanizado e a melhor experiência de conexão da região.",
    profileImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=200&h=200&fit=crop&crop=center",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center",
    theme: {
      primaryColor: "#0ea5e9",
      secondaryColor: "#6366f1",
      bgColor: "#f0f9ff",
      fontFamily: "DM Sans",
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
      {
        title: "Conheça Nossos Planos",
        url: "https://pontonetpa.com.br",
        type: "website",
        icon: "website",
      },
      {
        title: "Assine pelo WhatsApp",
        url: "https://wa.me/5594999990000",
        type: "whatsapp",
        icon: "whatsapp",
      },
      {
        title: "Acesse Nosso Site",
        url: "https://pontonetpa.com.br",
        type: "website",
        icon: "website",
      },
      {
        title: "Central de Atendimento",
        url: "tel:+5594999990000",
        type: "phone",
        icon: "phone",
      },
    ],
    schedule: [
      { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
      { day: "Sábado", hours: "08:00 - 12:00" },
      { day: "Domingo", hours: "Fechado" },
    ],
    socialMedia: {
      instagram: "_pontonett",
    },
    features: [
      "Fibra Óptica",
      "Suporte 24h",
      "Sem Fidelidade",
      "Instalação Grátis",
    ],
    promos: [
      {
        title: "Internet Fibra a partir de R$ 69,90/mês",
        description:
          "Planos de 100 a 500 Mega com fibra óptica direto na sua casa. Instalação grátis!",
        badge: "FIBRA ÓPTICA",
      },
      {
        title: "Indique um Amigo",
        description:
          "Indique um amigo e ganhe desconto na sua próxima mensalidade!",
        badge: "PROMOÇÃO",
      },
    ],
    products: [
      {
        title: "100 Mega",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=300&fit=crop",
        price: "R$ 69,90/mês",
        description: "Ideal para uso básico e streaming",
      },
      {
        title: "300 Mega",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=300&fit=crop",
        price: "R$ 99,90/mês",
        description: "Perfeito para home office e jogos",
      },
      {
        title: "500 Mega",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=300&fit=crop",
        price: "R$ 129,90/mês",
        description: "Máxima velocidade para toda a família",
      },
    ],
    textBlock: {
      title: "Por que PontoNet?",
      content:
        "Somos o provedor mais bem avaliado de Parauapebas. Fibra óptica real até a sua casa, sem compartilhamento. Suporte local que atende em minutos, não em dias.",
    },
  },
};

export function getStore(slug: string): StoreConfig | undefined {
  return stores[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(stores);
}
