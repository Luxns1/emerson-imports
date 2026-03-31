"use client";

import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* O 'max-w-screen-xl' é a sua cerca de segurança */}
      <div className="max-w-screen-xl mx-auto px-4 py-12 md:px-8">
        
        <header className="flex flex-col items-center mb-16">
          <img 
            src="/Logo.png" 
            alt="Emerson Imports" 
            className="h-24 md:h-32 object-contain mb-4"
            onError={(e) => e.currentTarget.style.display = 'none'} 
          />
          <h1 className="text-3xl font-black italic text-[#b59410] tracking-tighter">
            EMERSON<span className="text-white font-light">IMPORTS</span>
          </h1>
        </header>

        {/* Grid controlado: 2 colunas no celular, 4 no PC */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {Produtos.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <footer className="mt-20 py-10 border-t border-neutral-900 text-center text-neutral-600 text-[10px] uppercase tracking-[0.3em]">
          &copy; 2026 Emerson Imports - Fortaleza, CE
        </footer>
      </div>
    </main>
  );
}