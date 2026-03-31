"use client";
import { useState } from "react";
import { ProdutoLoja } from "../Data/Produtos";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index }: { product: ProdutoLoja, index: number }) {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);

  return (
    <div className="group bg-[#0a0a0a] border border-neutral-900 rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-[#b59410]/50 hover:shadow-[0_0_40px_rgba(181,148,16,0.1)]">
      <div className="aspect-square relative bg-neutral-950 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 bg-neutral-900 animate-pulse z-10" />
        )}
        <img 
          src={product.imagem} 
          alt={product.nome}
          // Prioriza o carregamento das 4 primeiras imagens (acima da dobra)
          loading={index < 4 ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loading ? 'scale-110 blur-xl opacity-0' : 'scale-100 blur-0 opacity-100'}`}
        />
      </div>

      <div className="p-8 flex flex-col flex-grow text-center">
        <span className="text-[9px] uppercase tracking-[0.5em] text-neutral-600 font-bold mb-3 italic group-hover:text-[#b59410]">
          {product.categoria}
        </span>
        <h3 className="text-[13px] font-black uppercase italic mb-6 leading-tight min-h-[40px]">
          {product.nome}
        </h3>
        
        <div className="flex-grow"></div>
        <p className="text-3xl font-black italic mb-8">R$ {product.preco.toFixed(2)}</p>
        
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-white text-black py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#b59410] transition-all active:scale-95"
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
}