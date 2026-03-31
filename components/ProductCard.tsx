"use client";
import { ProdutoLoja } from "../Data/Produtos";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: ProdutoLoja }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-[#0a0a0a] border border-neutral-900 rounded-[2.5rem] overflow-hidden flex flex-col h-full transition-all hover:border-[#b59410]/50 shadow-2xl">
      <div className="aspect-square relative overflow-hidden bg-neutral-950">
        <img 
          src={product.imagem} 
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600/0a0a0a/b59410?text=Premium+Item"; }}
        />
      </div>
      <div className="p-8 flex flex-col flex-grow text-center">
        <span className="text-[9px] uppercase tracking-[0.4em] text-[#b59410] font-bold mb-3 italic">● {product.categoria}</span>
        <h3 className="text-[13px] font-black uppercase italic mb-6 leading-tight min-h-[40px]">{product.nome}</h3>
        <p className="text-3xl font-black italic mb-8">R$ {product.preco.toFixed(2)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-white text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#b59410] transition-all active:scale-95"
        >
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
}