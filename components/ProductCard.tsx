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
    `Olá! Tenho interesse no produto: ${product.nome} (${precoFormatado}) que vi no site.`
  );
  
  // Substitua o número abaixo pelo do Emerson
  const linkZap = `https://wa.me/5585999999999?text=${mensagemZap}`;

  return (
    <div className="group relative bg-[#0a0a0a] border border-neutral-900 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#b59410]/50 hover:shadow-[0_0_20px_rgba(181,148,16,0.1)]">
      
      {/* Imagem do Produto */}
      <div className="aspect-square w-full overflow-hidden bg-neutral-900">
        <img
          src={product.imagem}
          alt={product.nome}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info do Produto */}
      <div className="p-4">
        <span className="text-[10px] uppercase tracking-widest text-[#b59410] font-bold">
          {product.categoria}
        </span>
        <h3 className="mt-1 text-sm font-medium text-white truncate">
          {product.nome}
        </h3>
        <p className="mt-2 text-lg font-black text-white">
          {precoFormatado}
        </p>

        {/* Botão de Compra */}
        <a
          href={linkZap}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center w-full bg-white text-black py-2.5 rounded-lg text-xs font-bold uppercase tracking-tighter transition-colors hover:bg-[#b59410] hover:text-white"
        >
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
}