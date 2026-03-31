"use client";
import { useState } from "react";
import { Produtos } from "../Data/Produtos";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [catAtiva, setCatAtiva] = useState("TUDO");
  const categorias = ["TUDO", "CAMISETAS", "CALÇADOS", "CONJUNTOS", "ACESSÓRIOS"];

  const filtrados = catAtiva === "TUDO" 
    ? Produtos 
    : Produtos.filter(p => p.categoria.toUpperCase() === catAtiva);

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-12 relative">
      {/* Header Premium */}
      <header className="flex flex-col items-center mb-16">
        <img src="/Logo.png" alt="Logo" className="h-24 mb-6" />
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-center">
          EMERSON<span className="text-[#b59410]">IMPORTS</span>
        </h1>
        <div className="w-32 h-1 bg-[#b59410] mt-4 shadow-[0_0_20px_#b59410]"></div>
      </header>

      {/* Banner de Boas-vindas (Recuperado) */}
      <section className="relative w-full max-w-7xl mx-auto rounded-3xl bg-neutral-900 mb-16 p-10 md:p-16 border border-white/5 flex flex-col md:flex-row items-center gap-10 shadow-2xl overflow-hidden">
         <div className="relative z-10 flex flex-col gap-5 flex-grow text-center md:text-left">
             <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight max-w-2xl leading-tight">
                O MELHOR DO <span className="text-[#b59410]">STREETWEAR</span> GLOBAL
             </h3>
             <p className="text-neutral-500 text-[11px] font-medium uppercase tracking-wider">
                Curadoria exclusiva de peças importadas. Qualidade premium garantida.
             </p>
             <div className="bg-black/50 px-6 py-3 rounded-full border border-white/10 mt-4 self-center md:self-start">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em]">🚚 Envios para todo o Brasil</p>
             </div>
         </div>
      </section>

      {/* Navegação por Categorias (Recuperado) */}
      <nav className="flex flex-wrap justify-center gap-3 mb-16">
        {categorias.map(c => (
          <button 
            key={c}
            onClick={() => setCatAtiva(c)}
            className={`px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all 
            ${catAtiva === c ? 'bg-[#b59410] text-black scale-105 shadow-xl' : 'bg-neutral-900 text-neutral-500 hover:text-white'}`}
          >
            {c}
          </button>
        ))}
      </nav>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-32">
        {filtrados.map((item, i) => (
          <ProductCard key={item.id} product={item} index={i} />
        ))}
      </div>

      <CartDrawer />

      {/* Botão WhatsApp Flutuante (Recuperado) */}
      <a 
        href="https://wa.me/5585999999999" 
        target="_blank"
        className="fixed bottom-8 right-8 z-[160] bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all border-2 border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256">
          <path d="M187.58,154.84c-2.15-1.08-12.47-6.15-14.39-6.84s-3.33-1-4.73,1-5.44,6.84-6.67,8.23-2.45,1.54-4.6.46a58.05,58.05,0,0,1-17.1-10.55c-13.3-11.85-22.27-26.48-24.88-31s-.27-7,1.06-9.14l1.39-2.07a3.42,3.42,0,0,0,.46-1.54c.15-1.08-.08-2-.39-3s-3.33-8.23-4.56-11.23c-1.2-2.92-2.41-2.52-3.33-2.57l-2.85-.05a5.48,5.48,0,0,0-4,1.84c-1.38,1.54-5.29,5.17-5.29,12.61s5.4,14.63,6.17,15.66c.77,1,10.63,16.22,25.75,22.72,3.6,1.55,6.41,2.47,8.59,3.17a20.57,20.57,0,0,0,9.54.6c2.61-.38,12.47-5.09,14.23-10s1.77-9.14,1.23-10S189.73,155.92,187.58,154.84ZM128,24A104,104,0,0,0,36.83,176.91L24,220a12,12,0,0,0,15.11,14.8l44.34-13A104,104,0,1,0,128,24Zm0,192a87.76,87.76,0,0,1-44.89-12.32,6,6,0,0,0-5.11-.46l-35,10.25,10.09-34.15a6,6,0,0,0-.73-5.33A88,88,0,1,1,128,216Z"></path>
        </svg>
      </a>

      {/* Footer Detalhado (Recuperado) */}
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