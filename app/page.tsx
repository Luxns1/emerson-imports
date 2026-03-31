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
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#b59410] selection:text-black">
      
      {/* Background Decorativo - O Tempero Visual */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#b59410]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] bg-[#b59410]/5 blur-[100px] rounded-full rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Header com Atitude */}
        <header className="flex flex-col items-center mb-20">
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-[#b59410] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <img src="/Logo.png" alt="Emerson Imports" className="h-32 md:h-40 object-contain relative drop-shadow-[0_0_15px_rgba(181,148,16,0.3)]" />
          </div>

          <div className="text-center">
             <h1 className="text-6xl md:text-8xl font-[900] tracking-tighter leading-none mb-2 uppercase italic">
                Emerson<span className="text-[#b59410] stroke-text">Imports</span>
             </h1>
             <div className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-12 bg-neutral-800"></span>
                <p className="text-[10px] uppercase tracking-[0.8em] text-neutral-500 font-bold">
                  High Quality Lifestyle
                </p>
                <span className="h-[1px] w-12 bg-neutral-800"></span>
             </div>
          </div>
        </header>

        {/* Banner de Impacto Rápido */}
        <section className="mb-20 bg-neutral-900/40 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-md overflow-hidden relative">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic leading-none mb-4">
                    O Melhor do <br/> <span className="text-[#b59410]">Streetwear Global</span>
                </h2>
                <p className="text-neutral-400 text-sm max-w-md mb-6 uppercase tracking-wider">
                    Curadoria exclusiva de peças importadas. Qualidade premium garantida para quem não aceita o básico.
                </p>
                <div className="flex gap-4">
                    <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                        🚚 Envios para todo o Brasil
                    </div>
                </div>
            </div>
            {/* Elemento Decorativo no fundo do banner */}
            <div className="absolute -right-20 -bottom-20 text-[15rem] font-black italic opacity-[0.03] select-none pointer-events-none">
                DROP
            </div>
        </section>

        {/* Menu de Filtros "Cyberpunk" */}
        <nav className="flex flex-wrap justify-center gap-4 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`relative px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-500
                ${categoriaAtiva === cat 
                  ? "bg-[#b59410] text-black shadow-[0_0_30px_rgba(181,148,16,0.3)] scale-110" 
                  : "bg-neutral-900/50 text-neutral-500 hover:text-white border border-white/5"
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Grid de Itens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {produtosFiltrados.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Footer com Links Úteis */}
        <footer className="mt-40 pb-10 border-t border-neutral-900 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 opacity-60">
                <div>
                    <h4 className="text-[#b59410] text-xs font-black uppercase mb-4 tracking-widest">Atendimento</h4>
                    <p className="text-sm text-neutral-400">Segunda a Sábado <br/> 09:00 às 19:00</p>
                </div>
                <div>
                    <h4 className="text-[#b59410] text-xs font-black uppercase mb-4 tracking-widest">Localização</h4>
                    <p className="text-sm text-neutral-400">Fortaleza, Ceará <br/> Enviamos via Sedex</p>
                </div>
                <div>
                    <h4 className="text-[#b59410] text-xs font-black uppercase mb-4 tracking-widest">Siga-nos</h4>
                    <p className="text-sm text-neutral-400 italic">@emersonimports</p>
                </div>
            </div>
          <p className="text-[9px] uppercase tracking-[0.5em] text-center text-neutral-700">
            &copy; 2026 Emerson Imports &bull; Developed for Excellence
          </p>
        </footer>
      </div>

      <WhatsappFloat />

      {/* Estilo extra para o texto vazado (Stroke) */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px #b59410;
          color: transparent;
        }
      `}</style>
    </main>
  );
}