"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Produtos } from "../Data/Produtos";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  
  // Pegamos as categorias únicas diretamente do array de produtos
  const categoriasUnicas = ["Todos", ...new Set(Produtos.map(p => p.categoria))];

  const produtosFiltrados = categoriaAtiva === "Todos" 
    ? Produtos 
    : Produtos.filter(p => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-black text-neutral-200">
      
      {/* Header Centralizado com Logo */}
      <header className="py-12 px-6 border-b border-neutral-800 text-center flex flex-col items-center">
        <img src="/logo.png" alt="Emerson Imports Logo" className="h-24 md:h-32 mb-6 object-contain" />
        <h2 className="text-xs uppercase tracking-[0.4em] text-[#b59410] mb-4 font-bold">Importados Premium • 2026</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-100 mb-8 tracking-tighter">Coleção Exclusiva</h1>
        
        {/* Filtros Estilizados */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {categoriasUnicas.map(cat => (
            <button 
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase transition-all duration-300 tracking-wider ${
                categoriaAtiva === cat 
                ? 'bg-[#b59410] text-black shadow-lg shadow-[#b59410]/30' 
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Grid de Produtos Premium */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {produtosFiltrados.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-600">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}
      </div>

      {/* Footer Minimalista */}
      <footer className="text-center py-16 border-t border-neutral-800 text-neutral-600 text-sm">
        &copy; {new Date().getFullYear()} Emerson Imports. Todos os direitos reservados.<br/>
        Fortaleza - CE | Importando o Melhor para Você.
      </footer>
    </main>
  );
}