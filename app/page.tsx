// app/page.tsx
"use client";

import { useState } from "react";
import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");
  const categorias = ["Tudo", ...new Set(Produtos.map((p) => p.categoria))];

  const produtosFiltrados = categoriaAtiva === "Tudo" 
    ? Produtos 
    : Produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased relative">
      {/* Overlay sutil de ruído para textura de luxo */}
      <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23a3a3a3\' fill-opacity=\'0.05\' d=\'M1 3h1v1H1V3zm2-2h1v1H2V1z\'%3E%3C/path%3E%3C/svg%3E")' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header Luxo - Novo Visual */}
        <header className="flex flex-col items-center mb-20 text-center">
          <div className="relative mb-10 group">
            {/* Brilho Dourado Suave atrás da logo */}
            <div className="absolute -inset-4 rounded-full bg-[#b59410]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <img src="/Logo.png" alt="Emerson Imports" className="h-32 md:h-44 object-contain relative z-10" />
            
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[#b59410] rounded-full"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold italic tracking-tighter text-[#b59410] flex items-center gap-1.5">
            EMERSON<span className="text-white font-light not-italic">IMPORTS</span>
          </h1>
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.7em] text-neutral-600 mt-5 font-bold">
            Premium Selection &bull; Fortaleza - CE
          </p>
        </header>

        {/* Menu de Filtros - Novo Estilo 'Joia' */}
        <nav className="flex flex-wrap justify-center gap-2 mb-20 bg-black/60 backdrop-blur-sm border border-neutral-900 p-2 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] max-w-lg mx-auto">
          {categorias.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-300 border
                ${categoriaAtiva === cat 
                  ? "bg-[#b59410] border-[#b59410] text-black scale-105 shadow-[0_5px_20px_rgba(181,148,16,0.2)]" 
                  : "bg-transparent border-transparent text-neutral-500 hover:text-white"
                }
                ${index === 0 && 'px-7' /* Mais espaço para o 'Tudo' */}
              `}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid de Produtos - Ajustado para Cartões de Luxo */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {produtosFiltrados.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Rodapé - Mais Clean */}
        <footer className="mt-40 pt-16 border-t border-neutral-900 text-center opacity-40">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            EMERSON IMPORTS &bull; CNPJ 00.000.000/0001-00 &bull; 2026
          </p>
        </footer>
      </div>

      <WhatsappFloat />
    </main>
  );
}