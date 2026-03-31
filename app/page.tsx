"use client";
import { useState } from "react";
import { Produtos } from "../Data/Produtos";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");
  const categorias = ["Tudo", ...new Set(Produtos.map((p) => p.categoria))];

  const produtosFiltrados = categoriaAtiva === "Tudo" 
    ? Produtos 
    : Produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-20">
      <header className="flex flex-col items-center mb-24">
        <img src="/Logo.png" alt="Logo" className="h-32 mb-8" />
        <h1 className="text-6xl md:text-8xl font-black uppercase italic text-center">
          Emerson<span className="text-[#b59410]">Imports</span>
        </h1>
        <p className="text-[10px] uppercase tracking-[0.8em] text-neutral-600 font-bold mt-4">Premium Selection 2026</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-4 mb-20">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all
              ${categoriaAtiva === cat ? "bg-[#b59410] text-black shadow-lg" : "bg-neutral-900/50 text-neutral-500 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtosFiltrados.map((item, index) => (
          <ProductCard key={item.id} product={item} index={index} />
        ))}
      </div>

      <CartDrawer />
    </main>
  );
}