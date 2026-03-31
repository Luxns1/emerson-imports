// components/ProductCard.tsx
"use client";
import { ProdutoLoja } from "../Data/Produtos";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: ProdutoLoja }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#0a0a0a] border border-neutral-900 rounded-[2rem] overflow-hidden flex flex-col h-full transition-all hover:border-[#b59410]/50 shadow-2xl">
      <div className="aspect-square relative overflow-hidden bg-neutral-950">
        <img 
          src={product.imagem} 
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/000000/FFFFFF?text=Imagem+Nao+Encontrada"; }}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#b59410] font-bold mb-2 italic">● {product.categoria}</p>
        <h3 className="text-[11px] font-black uppercase italic mb-6 leading-tight h-8">{product.nome}</h3>
        <p className="text-2xl font-black italic mb-6 italic">R$ {product.preco.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#b59410] hover:text-black transition-all active:scale-95 shadow-lg"
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
}