"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Search, FileText } from "lucide-react";
import { stores } from "@/data/stores";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const storeList = Object.values(stores).filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 text-neutral-500 text-xs hover:text-neutral-300 transition-colors mb-3">
              <ArrowLeft size={12} />
              Voltar ao site
            </Link>
            <h1 className="text-2xl font-semibold">Painel Admin</h1>
            <p className="text-neutral-500 text-sm mt-1">Gerencie as lojas cadastradas</p>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold text-neutral-200">{storeList.length}</div>
            <div className="text-neutral-600 text-xs">lojas ativas</div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-600" />
          <input
            type="text"
            placeholder="Buscar loja..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 pl-9 pr-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 text-sm placeholder-neutral-600 focus:outline-none focus:border-neutral-600 transition-colors"
          />
        </div>

        {/* Store list */}
        <div className="grid gap-2">
          {storeList.map((store) => (
            <div
              key={store.slug}
              className="flex items-center justify-between p-4 rounded-xl border border-neutral-800/60 hover:border-neutral-700 hover:bg-neutral-900/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold text-white shrink-0"
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
                <div>
                  <h3 className="text-sm font-medium">{store.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-neutral-600">/{store.slug}</span>
                    <span className="text-xs text-neutral-700">&middot;</span>
                    <span className="text-xs text-neutral-600">{store.links.length} links</span>
                    {store.contact.phone && (
                      <>
                        <span className="text-xs text-neutral-700">&middot;</span>
                        <span className="text-xs text-neutral-600">{store.contact.phone}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <Link
                href={`/${store.slug}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 text-neutral-400 text-xs font-medium hover:bg-neutral-800 hover:text-neutral-200 transition-colors shrink-0"
              >
                <ExternalLink size={11} />
                Visualizar
              </Link>
            </div>
          ))}
        </div>

        {storeList.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-600 text-sm">Nenhuma loja encontrada</p>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-10 p-5 rounded-xl border border-neutral-800/60 bg-neutral-900/30">
          <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
            <FileText size={14} className="text-neutral-500" />
            Como adicionar uma nova loja
          </h3>
          <ol className="text-neutral-500 text-xs space-y-2 list-decimal list-inside leading-relaxed">
            <li>
              Abra o arquivo <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-[11px]">src/data/stores.ts</code>
            </li>
            <li>Adicione uma nova entrada no objeto <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-[11px]">stores</code> seguindo o modelo existente</li>
            <li>Use o slug como chave (ex: <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-[11px]">&quot;nome-da-loja&quot;</code>)</li>
            <li>A página ficará disponível em <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded text-[11px]">seusite.com/nome-da-loja</code></li>
            <li>Configure o NFC do cartão para apontar para essa URL</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
