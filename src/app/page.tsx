import Link from "next/link";
import { getAllSlugs, getStore } from "@/data/stores";

export default function HomePage() {
  const slugs = getAllSlugs();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 text-white">
      {/* Decorative bg */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
          <div className="animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Cartões NFC Inteligentes
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                NFC Card
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-lg mx-auto mb-4">
              Seu negócio na palma da mão do cliente.
            </p>
            <p className="text-sm text-white/40 max-w-md mx-auto mb-10">
              Cartões de visita com NFC que redirecionam para uma página exclusiva
              do seu negócio. Um toque. Todas as informações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25"
              >
                Ver Demonstrações
              </a>
              <a
                href="#como-funciona"
                className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:scale-105 active:scale-95"
              >
                Como Funciona?
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up opacity-0" style={{ animationFillMode: "forwards" }}>
            Como Funciona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Cartão NFC",
                desc: "Entregamos um cartão de visita elegante com chip NFC integrado para o seu negócio.",
                icon: "💳",
              },
              {
                step: "02",
                title: "Página Exclusiva",
                desc: "Criamos uma página personalizada com todas as informações, links e promoções do seu negócio.",
                icon: "📱",
              },
              {
                step: "03",
                title: "Um Toque",
                desc: "Seus clientes aproximam o celular do cartão e acessam tudo sobre seu negócio instantaneamente.",
                icon: "✨",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-indigo-400 text-xs font-bold tracking-widest mb-2">
                  PASSO {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo stores */}
        <section id="demo" className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Demonstrações</h2>
          <p className="text-white/50 text-center mb-12">
            Veja como ficaria a página do seu negócio
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {slugs.map((slug, i) => {
              const store = getStore(slug)!;
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all hover:scale-[1.02] animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${store.theme.primaryColor}, ${store.theme.secondaryColor})`,
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
                  <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {store.name}
                  </h3>
                  <p className="text-white/40 text-sm mt-1">{store.tagline}</p>
                  <div className="mt-4 text-indigo-400 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver página →
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Quer um cartão para o seu negócio?
            </h2>
            <p className="text-white/50 mb-8">
              Entre em contato e tenha seu cartão NFC personalizado com uma página
              exclusiva para seus clientes.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-xl shadow-green-500/25"
            >
              💬 Fale Conosco no WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center border-t border-white/5">
          <p className="text-white/20 text-sm">
            © 2026 NFC Card. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
