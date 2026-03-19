"use client";

import { useState } from "react";
import Link from "next/link";
import { stores } from "@/data/stores";

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const storeList = Object.values(stores).filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="text-indigo-400 text-sm hover:underline mb-2 inline-block">
              ← Voltar ao site
            </Link>
            <h1 className="text-3xl font-bold">Painel Admin</h1>
            <p className="text-white/50 mt-1">Gerencie as lojas cadastradas</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-400">{storeList.length}</div>
            <div className="text-white/40 text-xs">lojas ativas</div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar loja..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Store list */}
        <div className="grid gap-4">
          {storeList.map((store) => (
            <div
              key={store.slug}
              className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg shrink-0"
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
                <div>
                  <h3 className="font-semibold">{store.name}</h3>
                  <p className="text-white/40 text-sm">{store.tagline}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-white/30">/{store.slug}</span>
                    <span className="text-xs text-white/30">•</span>
                    <span className="text-xs text-white/30">{store.links.length} links</span>
                    {store.contact.phone && (
                      <>
                        <span className="text-xs text-white/30">•</span>
                        <span className="text-xs text-white/30">{store.contact.phone}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/${store.slug}`}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 text-sm font-medium hover:bg-indigo-600/30 transition-colors"
                >
                  Visualizar
                </Link>
              </div>
            </div>
          ))}
        </div>

        {storeList.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">Nenhuma loja encontrada</p>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="font-semibold mb-3">📝 Como adicionar uma nova loja</h3>
          <ol className="text-white/50 text-sm space-y-2 list-decimal list-inside">
            <li>
              Abra o arquivo <code className="text-indigo-300 bg-white/5 px-1 rounded">src/data/stores.ts</code>
            </li>
            <li>Adicione uma nova entrada no objeto <code className="text-indigo-300 bg-white/5 px-1 rounded">stores</code> seguindo o modelo existente</li>
            <li>Use o slug como chave (ex: <code className="text-indigo-300 bg-white/5 px-1 rounded">&quot;nome-da-loja&quot;</code>)</li>
            <li>A página ficará disponível em <code className="text-indigo-300 bg-white/5 px-1 rounded">seusite.com/nome-da-loja</code></li>
            <li>Configure o NFC do cartão para apontar para essa URL</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
