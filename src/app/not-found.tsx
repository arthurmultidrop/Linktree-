import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white/20 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-white mb-2">
          Página não encontrada
        </h2>
        <p className="text-white/50 mb-8">
          Essa loja ainda não existe ou o link está incorreto.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}
