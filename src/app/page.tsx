import Link from "next/link";
import {
  CreditCard,
  Smartphone,
  Zap,
  ArrowRight,
  MessageCircle,
  Nfc,
  Eye,
  MousePointerClick,
  BarChart3,
  Palette,
  Clock,
  Shield,
} from "lucide-react";
import { getAllSlugs, getStore } from "@/data/stores";

function NFCCardMockup() {
  return (
    <div className="perspective relative">
      {/* Tap pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-32 h-32 rounded-full border border-gold-500/20 animate-pulse-ring" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="w-32 h-32 rounded-full border border-gold-500/15 animate-pulse-ring delay-700" />
      </div>

      {/* Card */}
      <div className="nfc-card animate-float relative z-10">
        <div className="w-72 h-44 md:w-80 md:h-48 rounded-2xl bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900 border border-neutral-700/50 glow-gold-strong p-6 flex flex-col justify-between overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer pointer-events-none" />

          {/* Top row */}
          <div className="flex items-start justify-between relative z-10">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold-400/80">
                TopFind
              </p>
              <p className="text-[10px] text-neutral-500 mt-0.5">
                NFC Smart Card
              </p>
            </div>
            <Nfc size={18} className="text-gold-500/60" />
          </div>

          {/* NFC chip visual */}
          <div className="relative z-10">
            <div className="w-10 h-7 rounded-md bg-gradient-to-br from-gold-400/30 to-gold-500/10 border border-gold-500/20 flex items-center justify-center">
              <div className="w-5 h-3.5 rounded-sm border border-gold-500/30" />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between relative z-10">
            <p className="text-xs text-neutral-400 tracking-wide">
              Seu Negócio
            </p>
            <div className="flex gap-0.5">
              <div className="w-4 h-4 rounded-full bg-gold-500/20" />
              <div className="w-4 h-4 rounded-full bg-gold-400/10 -ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  icon: Icon,
  delay,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
}) {
  return (
    <div
      className={`animate-fade-up ${delay} group relative p-6 md:p-8 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-neutral-700/60 transition-all duration-500`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors duration-500">
          <Icon size={18} className="text-gold-400" />
        </div>
        <span className="font-display text-2xl italic text-gold-500/40">
          {number}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-neutral-100 mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-lg bg-neutral-800/80 border border-neutral-700/40 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gold-400/80" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-200">{title}</h4>
        <p className="text-sm text-neutral-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const slugs = getAllSlugs();

  return (
    <main className="min-h-screen bg-neutral-950 grain relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/[0.02] blur-[100px]" />
      </div>

      {/* ── Nav ── */}
      <nav className="relative z-20 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
            <Nfc size={16} className="text-neutral-950" />
          </div>
          <span className="font-display text-xl text-neutral-50">
            TopFind
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#demo"
            className="hidden sm:inline text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            Demonstrações
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium hover:bg-gold-500/20 transition-all duration-300"
          >
            Quero Meu Cartão
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-28 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left — copy */}
          <div>
            <p className="animate-fade-up text-xs font-medium tracking-[0.25em] uppercase text-gold-500/70 mb-6">
              Cartão de Visita NFC
            </p>
            <h1 className="animate-fade-up delay-100 font-display text-5xl md:text-6xl lg:text-7xl text-neutral-50 leading-[1.05] mb-6">
              Um toque.
              <br />
              <span className="text-gradient-gold italic">Todo seu</span>
              <br />
              negócio.
            </h1>
            <p className="animate-fade-up delay-200 text-base md:text-lg text-neutral-400 max-w-md mb-10 leading-relaxed">
              Cartão de visita inteligente com NFC. Seu cliente aproxima o
              celular e acessa uma página exclusiva com tudo sobre o seu negócio.
            </p>
            <div className="animate-fade-up delay-300 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-neutral-950 text-sm font-semibold hover:opacity-90 transition-opacity glow-gold"
              >
                Comece Agora
                <ArrowRight size={15} />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300"
              >
                Como Funciona
              </a>
            </div>
          </div>

          {/* Right — card mockup */}
          <div className="animate-fade-in delay-400 flex justify-center md:justify-end">
            <NFCCardMockup />
          </div>
        </div>
      </section>

      {/* ── Social proof bar ── */}
      <div className="relative z-10 border-y border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "500+", label: "Cartões Entregues" },
            { value: "98%", label: "Satisfação" },
            { value: "24h", label: "Entrega da Página" },
            { value: "0", label: "Mensalidade" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl md:text-3xl text-neutral-50">
                {stat.value}
              </p>
              <p className="text-xs text-neutral-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <section
        id="como-funciona"
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32"
      >
        <div className="max-w-md mb-14">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500/60 mb-3">
            Simples e Rápido
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-neutral-50 mb-4">
            Do cartão ao <span className="italic text-gradient-gold">digital</span>{" "}
            em 3 passos
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Sem complicação. Cuidamos de tudo para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <StepCard
            number="01"
            title="Envie suas Informações"
            description="Nome do negócio, links de redes sociais, horários, promoções — tudo que seus clientes precisam saber."
            icon={CreditCard}
            delay="delay-100"
          />
          <StepCard
            number="02"
            title="Sua Página é Criada"
            description="Montamos uma página personalizada com design exclusivo, otimizada para celular e pronta para impressionar."
            icon={Smartphone}
            delay="delay-200"
          />
          <StepCard
            number="03"
            title="Toque e Conecte"
            description="Entregamos seu cartão NFC. O cliente aproxima o celular e acessa sua página instantaneamente."
            icon={Zap}
            delay="delay-300"
          />
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500/60 mb-3">
              Por que TopFind?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-50 mb-4">
              Mais que um cartão.
              <br />
              <span className="italic text-gradient-gold">Uma experiência.</span>
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              Seu cartão de visita não vai parar na gaveta. Com NFC, seu cliente
              tem acesso instantâneo a tudo sobre seu negócio — sempre
              atualizado, sempre acessível.
            </p>
          </div>

          <div className="grid gap-6">
            <FeatureItem
              icon={Palette}
              title="Design Exclusivo"
              description="Cada página é única, com cores e estilo que combinam com seu negócio."
            />
            <FeatureItem
              icon={MousePointerClick}
              title="Links Ilimitados"
              description="Instagram, WhatsApp, cardápio, delivery, site — tudo em um lugar."
            />
            <FeatureItem
              icon={Clock}
              title="Pronto em 24 Horas"
              description="Envie suas informações e receba sua página no mesmo dia."
            />
            <FeatureItem
              icon={Eye}
              title="Otimizado para Celular"
              description="100% responsivo. Perfeito na tela de qualquer smartphone."
            />
            <FeatureItem
              icon={BarChart3}
              title="Sem Mensalidade"
              description="Pagamento único. Sua página fica no ar sem custos recorrentes."
            />
            <FeatureItem
              icon={Shield}
              title="Atualizações Gratuitas"
              description="Mudou o horário? Novo link? Atualizamos sua página sem custo."
            />
          </div>
        </div>
      </section>

      {/* ── Demo stores ── */}
      <section
        id="demo"
        className="relative z-10 border-t border-neutral-800/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center mb-14">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500/60 mb-3">
              Veja na Prática
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-50 mb-3">
              Páginas de <span className="italic text-gradient-gold">clientes reais</span>
            </h2>
            <p className="text-sm text-neutral-500 max-w-md mx-auto">
              Cada negócio ganha uma página personalizada. Veja alguns exemplos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {slugs.map((slug) => {
              const store = getStore(slug)!;
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group relative p-5 rounded-2xl border border-neutral-800/60 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-neutral-700/60 transition-all duration-500 overflow-hidden"
                >
                  {/* Accent gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${store.theme.primaryColor}10, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-4 transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundColor: store.theme.primaryColor,
                        boxShadow: `0 8px 24px ${store.theme.primaryColor}30`,
                      }}
                    >
                      {store.name
                        .split(" ")
                        .filter((w) => w.length > 2)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()}
                    </div>

                    <h3 className="text-sm font-semibold text-neutral-100 mb-1 group-hover:text-white transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-4 line-clamp-2">
                      {store.tagline
                        .replace(
                          /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
                          ""
                        )
                        .trim()}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-gold-500/70 font-medium group-hover:text-gold-400 transition-colors">
                      <span>Ver página</span>
                      <ArrowRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contato"
        className="relative z-10 border-t border-neutral-800/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="relative rounded-3xl border border-neutral-800/60 bg-gradient-to-br from-neutral-900/80 to-neutral-950 p-10 md:p-16 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/[0.04] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-lg">
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-gold-500/60 mb-3">
                Comece Hoje
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-neutral-50 mb-4">
                Pronto para{" "}
                <span className="italic text-gradient-gold">transformar</span>
                <br />
                seu cartão de visita?
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-8 max-w-md">
                Fale conosco pelo WhatsApp e tenha seu cartão NFC com página
                exclusiva. Sem mensalidade, sem complicação.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 text-neutral-300 text-sm font-medium hover:bg-neutral-900 hover:border-neutral-600 transition-all duration-300"
                >
                  Ver Exemplos Primeiro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-neutral-800/50">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
              <Nfc size={12} className="text-neutral-950" />
            </div>
            <span className="font-display text-sm text-neutral-400">
              TopFind
            </span>
          </div>
          <p className="text-neutral-600 text-xs">
            &copy; 2026 TopFind. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
