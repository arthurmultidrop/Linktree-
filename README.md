# TopFind Hub

Plataforma de cartão de visita digital via NFC. O cliente compra um cartão NFC e recebe uma página web personalizada no estilo Linktree/Sandwich.me com todas as informações do seu negócio.

## O que é

O TopFind Hub gera páginas web personalizadas para empresas, acessíveis através de cartões NFC. Ao aproximar o cartão em um celular, o cliente é redirecionado para a página do negócio contendo:

- Links para redes sociais, delivery, cardápio, site, etc.
- Informações de contato (WhatsApp, telefone, email, endereço)
- Horário de funcionamento
- Promoções e ofertas
- Características e diferenciais do negócio

## Como funciona

1. **Empresa contrata** — escolhe o plano e envia as informações do negócio
2. **Página é criada** — uma página personalizada é gerada com tema, cores e conteúdo exclusivos
3. **Cartão NFC é entregue** — o cartão físico redireciona para a página da empresa

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS 4
- **Ícones:** Lucide React
- **Deploy:** Vercel (SSG - Static Site Generation)

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx            # Landing page (homepage)
│   ├── [slug]/page.tsx     # Página dinâmica da loja
│   ├── admin/page.tsx      # Painel admin
│   └── not-found.tsx       # Página 404
├── components/
│   ├── StoreHeader.tsx     # Nome, tagline, descrição
│   ├── StoreLinks.tsx      # Botões de ação (site, Instagram, etc.)
│   ├── StorePromos.tsx     # Promoções e ofertas
│   ├── StoreSchedule.tsx   # Horário de funcionamento
│   ├── StoreFeatures.tsx   # Tags de características
│   └── StoreFooter.tsx     # Endereço, redes sociais, branding
├── data/
│   └── stores.ts           # Dados das lojas cadastradas
└── lib/
    └── types.ts            # Interfaces TypeScript
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page com apresentação do produto e lojas demo |
| `/[slug]` | Página personalizada da loja (ex: `/pizzaria-bella`) |
| `/admin` | Painel para visualizar e buscar lojas cadastradas |

## Lojas Demo

- **Pizzaria Bella** (`/pizzaria-bella`) — Pizzaria italiana
- **Barbearia Classic** (`/barbearia-classic`) — Barbearia premium
- **Café Aroma** (`/cafe-aroma`) — Cafeteria artesanal
- **PontoNet** (`/pontonet`) — Provedor de internet (Parauapebas/PA)

## Modelo de Dados

Cada loja (`StoreConfig`) possui:

- `slug` — URL única da loja
- `name`, `tagline`, `description` — Informações básicas
- `theme` — Cores e estilo visual personalizado
- `contact` — Telefone, WhatsApp, email, endereço
- `links` — Links para plataformas (website, Instagram, WhatsApp, delivery, etc.)
- `schedule` — Horário de funcionamento
- `socialMedia` — Redes sociais
- `features` — Diferenciais do negócio
- `promos` — Promoções ativas

## Roadmap

- [ ] Dashboard para clientes editarem suas próprias páginas
- [ ] Integração com banco de dados (substituir arquivo estático)
- [ ] Sistema de pagamento e planos
- [ ] Analytics por página (visualizações, cliques nos links)
- [ ] Temas adicionais e personalização avançada
- [ ] QR Code como alternativa ao NFC
