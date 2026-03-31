// app/page.tsx
"use client";

import { useState } from "react";
import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");

  // Gera a lista de filtros dinamicamente
  const categorias = ["Tudo", ...new Set(Produtos.map((p) => p.categoria))];

  const produtosFiltrados = categoriaAtiva === "Tudo" 
    ? Produtos 
    : Produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header Luxo */}
        <header className="flex flex-col items-center mb-16 text-center">
          <div className="relative mb-6">
            <img src="/Logo.png" alt="Emerson Imports" className="h-28 md:h-36 object-contain" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#b59410]"></div>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter text-[#b59410]">
            EMERSON<span className="text-white font-light">IMPORTS</span>
          </h1>
          <p className="text-[9px] uppercase tracking-[0.6em] text-neutral-600 mt-4 font-bold">
            Premium Selection 2026
          </p>
        </header>

        {/* Menu de Filtros */}
        <nav className="flex flex-wrap justify-center gap-3 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300 border
                ${categoriaAtiva === cat 
                  ? "bg-[#b59410] border-[#b59410] text-black scale-105" 
                  : "bg-transparent border-neutral-900 text-neutral-500 hover:border-neutral-700 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid de Itens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
          {produtosFiltrados.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <footer className="mt-32 py-10 border-t border-neutral-900 text-center opacity-30">
          <p className="text-[9px] uppercase tracking-[0.5em]">
            Emerson Imports &bull; Fortaleza - CE
          </p>
        </footer>
      </div>
    </main>
  );
}