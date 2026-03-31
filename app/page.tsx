"use client";

import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Container com largura máxima para não espalhar no monitor */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        <header className="flex flex-col items-center mb-12 text-center">
          <img 
            src="/Logo.png" 
            alt="Emerson Imports" 
            className="h-32 md:h-44 object-contain mb-6" 
          />
          <h1 className="text-3xl font-black italic tracking-tighter text-[#b59410]">
            EMERSON<span className="text-white font-light">IMPORTS</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mt-4">
            Est. 2026 • Fortaleza, CE
          </p>
        </header>

        {/* Grid: 2 colunas no celular, 4 no monitor. O 'gap-8' separa as fotos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {Produtos.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <footer className="mt-20 py-10 border-t border-neutral-900 text-center text-neutral-800 text-[10px] uppercase tracking-widest">
          &copy; 2026 Emerson Imports
        </footer>
      </div>
    </main>
  );
}