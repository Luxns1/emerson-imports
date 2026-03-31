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
    <main className="min-h-screen bg-black text-white p-4 md:p-12 relative">
      {/* Header com Destaque Dourado */}
      <header className="flex flex-col items-center mb-20">
        <img src="/Logo.png" alt="Emerson Imports" className="h-24 mb-6" />
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-center">
          EMERSON<span className="text-[#b59410]">IMPORTS</span>
        </h1>
        {/* Linha de Destaque Abaixo do Nome */}
        <div className="w-32 h-1 bg-[#b59410] mt-4 shadow-[0_0_20px_#b59410]"></div>
        <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-500 font-bold mt-6">High Quality Lifestyle</p>
      </header>

      {/* Navegação de Categorias */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
        {filtrados.map((item, i) => (
          <ProductCard key={item.id} product={item} index={i} />
        ))}
      </div>

      <CartDrawer />

      {/* Botão de WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5585999999999" // Coloque o número do Emerson aqui
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[160] bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256">
          <path d="M187.58,154.84c-2.15-1.08-12.47-6.15-14.39-6.84s-3.33-1-4.73,1-5.44,6.84-6.67,8.23-2.45,1.54-4.6.46a58.05,58.05,0,0,1-17.1-10.55c-13.3-11.85-22.27-26.48-24.88-31s-.27-7,1.06-9.14l1.39-2.07a3.42,3.42,0,0,0,.46-1.54c.15-1.08-.08-2-.39-3s-3.33-8.23-4.56-11.23c-1.2-2.92-2.41-2.52-3.33-2.57l-2.85-.05a5.48,5.48,0,0,0-4,1.84c-1.38,1.54-5.29,5.17-5.29,12.61s5.4,14.63,6.17,15.66c.77,1,10.63,16.22,25.75,22.72,3.6,1.55,6.41,2.47,8.59,3.17a20.57,20.57,0,0,0,9.54.6c2.61-.38,12.47-5.09,14.23-10s1.77-9.14,1.23-10S189.73,155.92,187.58,154.84ZM128,24A104,104,0,0,0,36.83,176.91L24,220a12,12,0,0,0,15.11,14.8l44.34-13A104,104,0,1,0,128,24Zm0,192a87.76,87.76,0,0,1-44.89-12.32,6,6,0,0,0-5.11-.46l-35,10.25,10.09-34.15a6,6,0,0,0-.73-5.33A88,88,0,1,1,128,216Z"></path>
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Falar com Vendedor
        </span>
      </a>
    </main>
  );
}