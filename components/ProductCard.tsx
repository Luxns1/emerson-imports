// components/ProductCard.tsx
"use client";

import { ProdutoLoja } from "../Data/Produtos";

interface Props {
  product: ProdutoLoja;
}

export default function ProductCard({ product }: Props) {
  const precoFormatado = product.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const mensagemZap = encodeURIComponent(
    `Olá Emerson! Vi seu catálogo e quero o produto: ${product.nome} (${precoFormatado}).`
  );
  
  // Troque pelo número real do Emerson (Ex: 5585999999999)
  const linkZap = `https://wa.me/5585999999999?text=${mensagemZap}`;

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#b59410]/50 hover:shadow-[0_0_30px_rgba(181,148,16,0.1)] flex flex-col h-full">
      
      {/* Imagem do Produto */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-950 flex items-center justify-center relative border-b border-neutral-900/50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Info do Produto */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
           <span className="w-1.5 h-1.5 rounded-full bg-[#b59410] animate-pulse"></span>
           <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-black">
            {product.categoria}
          </span>
        </div>

        <h3 className="text-sm font-bold text-white group-hover:text-[#b59410] transition-colors line-clamp-2 leading-tight">
          {product.nome}
        </h3>
        
        <div className="flex-grow"></div>

        <div className="mt-6">
          <p className="text-xl font-black text-white tracking-tighter">
            {precoFormatado}
          </p>

          <a
            href={linkZap}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center w-full bg-white text-black py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#b59410] hover:text-white active:scale-95"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}