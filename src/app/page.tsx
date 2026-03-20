import Link from "next/link";
import { CreditCard, Smartphone, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { getAllSlugs, getStore } from "@/data/stores";

export default function HomePage() {
  const slugs = getAllSlugs();

  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-24 pb-20">
          <p className="text-sm font-medium text-neutral-400 tracking-wide uppercase mb-4">
            Cartões NFC Inteligentes
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50 mb-4">
            NFC Card
          </h1>
          <p className="text-lg text-neutral-400 max-w-md mb-3">
            Seu negócio na palma da mão do cliente.
          </p>
          <p className="text-sm text-neutral-500 max-w-md mb-10">
            Cartões de visita com NFC que redirecionam para uma página exclusiva
            do seu negócio. Um toque. Todas as informações.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-50 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              Ver Demonstrações
              <ArrowRight size={14} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 text-neutral-300 text-sm font-medium hover:bg-neutral-900 hover:border-neutral-700 transition-colors"
            >
              Como Funciona?
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800/60" />

        {/* How it works */}
        <section id="como-funciona" className="py-20">
          <h2 className="text-2xl font-semibold text-neutral-50 mb-10">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Cartão NFC",
                desc: "Entregamos um cartão de visita elegante com chip NFC integrado para o seu negócio.",
                Icon: CreditCard,
              },
              {
                step: "02",
                title: "Página Exclusiva",
                desc: "Criamos uma página personalizada com todas as informações, links e promoções do seu negócio.",
                Icon: Smartphone,
              },
              {
                step: "03",
                title: "Um Toque",
                desc: "Seus clientes aproximam o celular do cartão e acessam tudo sobre seu negócio instantaneamente.",
                Icon: Zap,
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-xl border border-neutral-800/60 bg-neutral-900/50"
              >
                <item.Icon size={20} className="text-neutral-400 mb-4" />
                <p className="text-[11px] font-medium text-neutral-500 tracking-wider uppercase mb-2">
                  Passo {item.step}
                </p>
                <h3 className="text-sm font-semibold text-neutral-100 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800/60" />

        {/* Demo stores */}
        <section id="demo" className="py-20">
          <h2 className="text-2xl font-semibold text-neutral-50 mb-2">Demonstrações</h2>
          <p className="text-sm text-neutral-500 mb-10">
            Veja como ficaria a página do seu negócio
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {slugs.map((slug) => {
              const store = getStore(slug)!;
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-semibold text-white shrink-0"
                    style={{ backgroundColor: store.theme.primaryColor }}
                  >
                    {store.name
                      .split(" ")
                      .filter((w) => w.length > 2)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")
                      .toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-xs text-neutral-500 truncate">{store.tagline.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "").trim()}</p>
                  </div>
                  <ArrowRight size={14} className="text-neutral-600 group-hover:text-neutral-400 transition-colors shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-neutral-800/60" />

        {/* CTA */}
        <section className="py-20">
          <h2 className="text-2xl font-semibold text-neutral-50 mb-3">
            Quer um cartão para o seu negócio?
          </h2>
          <p className="text-sm text-neutral-500 mb-8 max-w-md">
            Entre em contato e tenha seu cartão NFC personalizado com uma página
            exclusiva para seus clientes.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle size={16} />
            Fale Conosco no WhatsApp
          </a>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-neutral-800/60">
          <p className="text-neutral-600 text-xs">
            &copy; 2026 NFC Card. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
