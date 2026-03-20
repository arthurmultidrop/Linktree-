import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-neutral-800 mb-4">404</h1>
        <h2 className="text-lg font-medium text-neutral-100 mb-2">
          Página não encontrada
        </h2>
        <p className="text-neutral-500 text-sm mb-8">
          Essa loja ainda não existe ou o link está incorreto.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-50 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors"
        >
          <ArrowLeft size={14} />
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}
