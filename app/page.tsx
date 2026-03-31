// app/page.tsx
"use client";

import { useState } from "react";
import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";

export default function Home() {
  // Estado para controlar qual categoria o cliente clicou
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");

  // Pega todas as categorias do arquivo de Produtos e remove as repetidas
  const categoriasExistentes = Array.from(new Set(Produtos.map((p) => p.categoria)));
  const listaDeCategorias = ["Tudo", ...categoriasExistentes];

  // Filtra os produtos: Se for 'Tudo', mostra tudo. Se não, filtra pela categoria.
  const produtosExibidos = categoriaAtiva === "Tudo" 
    ? Produtos 
    : Produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#b59410] selection:text-black">
      {/* Container Principal com trava de largura (Anti-Gigantismo) */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header / Logo */}
        <header className="flex flex-col items-center mb-16 text-center">
          <img 
            src="/Logo.png" 
            alt="Emerson Imports Logo" 
            className="h-28 md:h-36 object-contain mb-6 drop-shadow-[0_0_15px_rgba(181,148,16,0.3)]" 
          />
          <h1 className="text-3xl md:text-4xl font-black italic tracking-tighter text-[#b59410]">
            EMERSON<span className="text-white font-light">IMPORTS</span>
          </h1>
          <div className="h-[1px] w-20 bg-[#b59410] mt-4 mb-2"></div>
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 font-bold">
            Luxury Streetwear • Fortaleza, CE
          </p>
        </header>

        {/* --- MENU DE CATEGORIAS (Filtros) --- */}
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {listaDeCategorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 border
                ${categoriaAtiva === cat 
                  ? "bg-[#b59410] border-[#b59410] text-black scale-105 shadow-[0_0_10px_rgba(181,148,16,0.5)]" 
                  : "bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* --- VITRINE DE PRODUTOS --- */}
        {/* Grid: 2 colunas no celular (para caber mais coisas) e 4 no PC */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
          {produtosExibidos.map((item) => (
            <div key={item.id} className="animate-in fade-in zoom-in duration-500">
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        {/* Caso a categoria esteja vazia (segurança) */}
        {produtosExibidos.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-neutral-600 italic">Nenhum item disponível em {categoriaAtiva} no momento.</p>
          </div>
        )}

        {/* Rodapé Simples */}
        <footer className="mt-32 py-10 border-t border-neutral-900 text-center">
          <p className="text-neutral-800 text-[9px] uppercase tracking-[0.4em] font-medium">
            &copy; 2026 Emerson Imports - Todos os direitos reservados
          </p>
        </footer>
      </div>
    </main>
  );
}