"use client";
import { useState } from "react";
import { Produtos } from "../Data/Produtos";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [cat, setCat] = useState("TUDO");
  const categorias = ["TUDO", "CAMISETAS", "CALÇADOS", "CONJUNTOS", "ACESSÓRIOS"];

  const filtrados = cat === "TUDO" ? Produtos : Produtos.filter(p => p.categoria.toUpperCase() === cat);

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-12">
      {/* Header Estilo Drop */}
      <header className="flex flex-col items-center mb-20">
        <img src="/Logo.png" alt="Emerson Imports" className="h-24 mb-6" />
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          EMERSON<span className="text-[#b59410]">IMPORTS</span>
        </h1>
        <div className="w-24 h-1 bg-[#b59410] mt-4 shadow-[0_0_15px_#b59410]"></div>
      </header>

      {/* Filtros Premium */}
      <nav className="flex flex-wrap justify-center gap-3 mb-16">
        {categorias.map(c => (
          <button 
            key={c}
            onClick={() => setCat(c)}
            className={`px-6 py-2 rounded-md text-[10px] font-bold tracking-widest transition-all ${cat === c ? 'bg-[#b59410] text-black scale-105 shadow-lg' : 'bg-neutral-900 text-neutral-500 hover:text-white'}`}
          >
            {c}
          </button>
        ))}
      </nav>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filtrados.map((item, i) => (
          <ProductCard key={item.id} product={item} index={i} />
        ))}
      </div>

      <CartDrawer />
    </main>
  );
}