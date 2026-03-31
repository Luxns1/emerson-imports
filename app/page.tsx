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
    <main className="min-h-screen bg-black text-white p-4 md:p-12 relative selection:bg-[#b59410] selection:text-black">
      {/* Header */}
      <header className="flex flex-col items-center mb-16">
        <img src="/Logo.png" alt="Logo" className="h-24 mb-6" />
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-center">
          EMERSON<span className="text-[#b59410]">IMPORTS</span>
        </h1>
        <div className="w-32 h-1 bg-[#b59410] mt-4 shadow-[0_0_20px_#b59410]"></div>
      </header>

      {/* Banner Drop (Recuperado) */}
      <section className="relative w-full max-w-7xl mx-auto rounded-3xl bg-neutral-900 mb-16 p-10 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-10 shadow-2xl overflow-hidden">
         <div className="relative z-10 flex flex-col gap-5 flex-grow text-center md:text-left">
             <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight max-w-2xl leading-tight">
                O MELHOR DO <span className="text-[#b59410]">STREETWEAR</span> GLOBAL
             </h3>
             <p className="text-neutral-500 text-[11px] leading-relaxed max-w-lg font-medium">
                CURADORIA EXCLUSIVA DE PEÇAS IMPORTADAS. QUALIDADE PREMIUM GARANTIDA.
             </p>
             <div className="bg-black/50 px-6 py-3 rounded-full border border-white/10 mt-4 self-center md:self-start">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em]">ENVIOS PARA TODO O BRASIL</p>
             </div>
         </div>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32">
        {filtrados.map((item, i) => (
          <ProductCard key={item.id} product={item} index={i} />
        ))}
      </div>

      <CartDrawer />

      {/* Footer (Recuperado) */}
      <footer className="w-full max-w-7xl mx-auto pt-20 pb-10 border-t border-neutral-900 text-neutral-500">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
             <div>
                 <h4 className="text-[11px] font-black uppercase text-[#b59410] mb-4">ATENDIMENTO</h4>
                 <p className="text-[13px]">Segunda a Sábado | 09:00 às 19:00</p>
             </div>
             <div>
                 <h4 className="text-[11px] font-black uppercase text-[#b59410] mb-4">LOCALIZAÇÃO</h4>
                 <p className="text-[13px]">Fortaleza, Ceará | Enviamos via Sedex</p>
             </div>
             <div>
                 <h4 className="text-[11px] font-black uppercase text-[#b59410] mb-4">SIGA-NOS</h4>
                 <p className="text-[13px]">@emersonimports</p>
             </div>
         </div>
      </footer>
    </main>
  );
}