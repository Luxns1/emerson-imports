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
    `Olá Emerson! Vi o seu catálogo premium e tenho interesse no produto: ${product.nome} (${precoFormatado}).`
  );
  
  // Substitua pelo número real do Emerson (55 + DDD + Numero)
  const linkZap = `https://wa.me/5585999999999?text=${mensagemZap}`;

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#b59410]/40 hover:shadow-[0_0_35px_rgba(181,148,16,0.08)] flex flex-col h-full active:scale-[0.98]">
      
      {/* Brilho dourado suave no hover de forma indireta */}
      <div className="absolute -inset-3 bg-[#b59410]/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>

      {/* Container da Imagem com Visual de Vitrine */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-950 flex items-center justify-center relative border-b border-neutral-900/50 z-10">
        {/* Overlay sutil para profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <img
          src={product.imagem}
          alt={product.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Info do Produto - Organização Luxo */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        {/* Categoria com Detalhe em Dourado */}
        <div className="flex items-center gap-2.5 mb-3.5">
           <span className="w-1.5 h-1.5 rounded-full bg-[#b59410]/70 animate-pulse shadow-[0_0_6px_rgba(181,148,16,0.6)]"></span>
           <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold group-hover:text-[#b59410]/70 transition-colors">
            {product.categoria}
          </span>
        </div>

        {/* Nome do Produto - Fonte Premium */}
        <h3 className="text-[13px] md:text-sm font-semibold text-white group-hover:text-white/90 transition-colors line-clamp-2 leading-tight">
          {product.nome}
        </h3>
        
        {/* Espaçador flexível */}
        <div className="flex-grow"></div>

        {/* Preço e Botão */}
        <div className="mt-7 flex flex-col gap-4">
          <p className="text-xl font-extrabold text-white tracking-tighter">
            {precoFormatado}
          </p>

          <a
            href={linkZap}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-white text-black py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#b59410] hover:text-white shadow-xl hover:shadow-[0_10px_20px_rgba(181,148,16,0.1)]"
          >
            Falar com Vendedor
          </a>
        </div>
      </div>
    </div>
  );
}