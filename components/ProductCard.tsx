// components/ProductCard.tsx
"use client";
import { ProdutoLoja } from "../Data/Produtos"; // Caminho ajustado para sua pasta Data
import { useCart } from "../context/CartContext"; // Caminho ajustado para sua pasta context

interface Props {
  product: ProdutoLoja;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  // Formatação de preço para o padrão brasileiro
  const precoFormatado = product.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#b59410]/40 hover:shadow-[0_0_40px_rgba(181,148,16,0.05)] flex flex-col h-full active:scale-[0.98]">
      
      {/* Container da Imagem */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-950 flex items-center justify-center relative border-b border-neutral-900/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={product.imagem} 
          alt={product.nome} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          loading="lazy" 
        />
      </div>

      {/* Informações do Produto */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-2.5 mb-4">
           <span className="w-1.5 h-1.5 rounded-full bg-[#b59410]/70 animate-pulse shadow-[0_0_8px_#b59410]"></span>
           <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold group-hover:text-[#b59410] transition-colors">
             {product.categoria}
           </span>
        </div>

        <h3 className="text-[12px] md:text-[13px] font-black uppercase italic text-white/90 group-hover:text-white transition-colors line-clamp-2 leading-tight mb-2">
          {product.nome}
        </h3>
        
        <div className="flex-grow"></div>

        <div className="mt-6 flex flex-col gap-4">
          <p className="text-2xl font-black text-white italic tracking-tighter">
            {precoFormatado}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-neutral-900 text-white py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-white/5 hover:bg-[#b59410] hover:text-black hover:border-[#b59410] active:scale-95 shadow-xl"
          >
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  );
}