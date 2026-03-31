"use client";
import { useState } from "react";
import { ProdutoLoja } from "../Data/Produtos";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: ProdutoLoja }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  return (
    <div className="group bg-[#0a0a0a] border border-neutral-900 rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-[#b59410]/50 hover:shadow-[0_0_50px_rgba(181,148,16,0.1)] active:scale-[0.98]">
      {/* Imagem com Skeleton Load */}
      <div className="aspect-square relative overflow-hidden bg-neutral-900 flex items-center justify-center">
        {loading && (
          <div className="absolute inset-0 bg-neutral-800 animate-pulse z-10" />
        )}
        <img 
          src={product.imagem} 
          alt={product.nome}
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${loading ? 'blur-2xl opacity-0' : 'blur-0 opacity-100'}`}
          onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/0a0a0a/b59410?text=Premium+Selection"; }}
        />
        {/* Badge de Destaque */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <p className="text-[8px] font-black uppercase text-[#b59410] tracking-widest">New Arrival</p>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-8 flex flex-col flex-grow text-center">
        <span className="text-[9px] uppercase tracking-[0.5em] text-neutral-600 font-bold mb-4 group-hover:text-[#b59410] transition-colors italic">
          {product.categoria}
        </span>
        <h3 className="text-[13px] font-black uppercase italic mb-6 leading-tight min-h-[40px] tracking-tighter">
          {product.nome}
        </h3>
        
        <div className="flex-grow"></div>

        <div className="mt-4 flex flex-col gap-6">
          <p className="text-3xl font-black italic text-white tracking-tighter drop-shadow-lg">
            R$ {product.preco.toFixed(2)}
          </p>
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-white text-black py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#b59410] hover:text-black transition-all duration-300 transform"
          >
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  );
}