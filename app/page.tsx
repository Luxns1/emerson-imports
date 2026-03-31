// app/page.tsx
"use client";
import { useState } from "react";
// Usando caminhos relativos para garantir que funcione na Vercel
import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";
import WhatsappFloat from "../components/WhatsappFloat";
import CartDrawer from "../components/CartDrawer";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");

  // Geração automática das categorias baseada nos produtos existentes
  const categorias = ["Tudo", ...new Set(Produtos.map((p) => p.categoria))];

  // Lógica de filtragem dos produtos
  const produtosFiltrados = categoriaAtiva === "Tudo" 
    ? Produtos 
    : Produtos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#b59410] selection:text-black overflow-x-hidden relative">
      
      {/* 1. Background Decorativo (Manchas de Dourado Premium) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#b59410]/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[50%] bg-[#b59410]/5 blur-[100px] rounded-full rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* ==========================================================
           A CABEÇA DO SITE (Header) - REATIVADA AQUI
        ========================================================== */}
        <header className="flex flex-col items-center mb-24 md:mb-32">
          {/* Logo Centralizada com efeito de luz dourada */}
          <div className="mb-10 relative group">
            {/* Certifique-se de que a imagem Logo.png está dentro da pasta 'public' na raiz */}
            <img 
              src="/Logo.png" 
              alt="Emerson Imports Logo" 
              className="h-32 md:h-40 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(181,148,16,0.2)] group-hover:drop-shadow-[0_0_30px_rgba(181,148,16,0.4)] transition-all duration-500" 
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-2 bg-[#b59410] rounded-full blur-sm"></div>
          </div>

          {/* Título Principal com efeito de transparência (Stroke) */}
          <div className="text-center px-4">
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-3 uppercase italic">
                Emerson<span className="text-[#b59410] stroke-text">Imports</span>
             </h1>
             {/* Subtítulo Premium */}
             <div className="flex items-center justify-center gap-3 mt-4">
                <span className="h-px w-8 bg-neutral-800"></span>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.8em] text-neutral-600 font-bold">Premium Selection 2026</p>
                <span className="h-px w-8 bg-neutral-800"></span>
             </div>
          </div>
        </header>

        {/* ==========================================================
           MENU DE FILTROS (Categoria Activa)
        ========================================================== */}
        <nav className="flex flex-wrap justify-center gap-3 mb-20 md:mb-28 p-2 bg-[#0a0a0a]/50 backdrop-blur-sm rounded-3xl border border-white/5 max-w-3xl mx-auto">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border relative group
                ${categoriaAtiva === cat 
                  ? "bg-[#b59410] border-[#b59410] text-black shadow-[0_0_30px_rgba(181,148,16,0.3)] active:scale-95" 
                  : "bg-transparent border-white/5 text-neutral-500 hover:text-white hover:border-white/10"
                }`}
            >
              {cat}
              {/* Efeito de luz sutil no hover das categorias não ativas */}
              {categoriaAtiva !== cat && (
                 <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#b59410]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              )}
            </button>
          ))}
        </nav>

        {/* ==========================================================
           GRID DE ITENS (Produtos) - A parte que já estava aparecendo
        ========================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10 mb-32">
          {produtosFiltrados.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Footer Sutil */}
        <footer className="mt-40 pb-10 border-t border-neutral-900 pt-20 text-center opacity-30">
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-700 italic">
            &copy; 2026 Emerson Imports &bull; Developed for High-End Streetwear
          </p>
        </footer>
      </div>

      {/* ==========================================================
           COMPONENTES FLUTUANTES (Sacola e WhatsApp)
        ========================================================== */}
      <CartDrawer />
      <WhatsappFloat />

      {/* Estilos Globais específicos da página (Efeito Stroke no Título) */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px #b59410;
          color: transparent;
        }
        /* Customizando a barra de rolagem da sacola */
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #b59410;
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
}