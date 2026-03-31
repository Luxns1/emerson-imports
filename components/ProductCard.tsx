// components/ProductCard.tsx
"use client";

import { ProdutoLoja } from "../Data/Produtos";

interface Props {
  product: ProdutoLoja;
}

export default function ProductCard({ product }: Props) {
  // Formata o preço para Real (R$)
  const precoFormatado = product.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Mensagem automática para o WhatsApp
  const mensagemZap = encodeURIComponent(
    `Olá Emerson! Vi o catálogo e tenho interesse no produto: ${product.nome} (${precoFormatado}).`
  );
  
  // Link para o WhatsApp (Altere o número 5585... para o real do Emerson)
  const linkZap = `https://wa.me/5585999999999?text=${mensagemZap}`;

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#b59410]/50 hover:shadow-[0_0_25px_rgba(181,148,16,0.15)] flex flex-col h-full">
      
      {/* Container da Imagem */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-950 flex items-center justify-center relative">
        {/* Overlay sutil para dar profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Detalhes do Produto */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
           <span className="w-2 h-2 rounded-full bg-[#b59410]"></span>
           <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold">
            {product.categoria}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-white group-hover:text-[#b59410] transition-colors line-clamp-1">
          {product.nome}
        </h3>
        
        <div className="flex-grow"></div>

        <div className="mt-4 flex flex-col gap-4">
          <p className="text-xl font-extrabold text-white">
            {precoFormatado}
          </p>

          <a
            href={linkZap}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-white text-black py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#b59410] hover:text-white active:scale-95"
          >
            Falar com Vendedor
          </a>
        </div>
      </div>
    </div>
  );
}