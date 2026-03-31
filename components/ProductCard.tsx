"use client";
import { ProdutoLoja } from "../Data/Produtos";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, index }: { product: ProdutoLoja, index: number }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-[#0a0a0a] border border-neutral-900 rounded-[1rem] overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-[#b59410]/50 shadow-2xl">
      <div className="aspect-square relative bg-neutral-950 overflow-hidden">
        <img 
          src={product.imagem} 
          alt={product.nome}
          // 'eager' força o navegador a baixar AGORA, não depois.
          loading="eager" 
          fetchPriority={index < 4 ? "high" : "low"}
          decoding="sync" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-[#b59410] font-bold mb-2 italic">
          ● {product.categoria}
        </span>
        <h3 className="text-[14px] font-bold uppercase italic mb-4 leading-tight text-white/90">
          {product.nome}
        </h3>
        <p className="text-xl font-black italic mb-6">R$ {product.preco.toFixed(2)}</p>
        
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-white text-black py-3 rounded-lg text-[11px] font-black uppercase tracking-tighter hover:bg-[#b59410] transition-all active:scale-95"
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
}