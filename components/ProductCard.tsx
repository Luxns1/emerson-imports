"use client";

import { ProdutoLoja } from "../Data/Produtos";

interface Props {
  product: ProdutoLoja;
}

export default function ProductCard({ product }: Props) {
  const handleZap = () => {
    // Coloque seu número real aqui (DDI + DDD + Numero)
    const telefone = "5585999999999"; 
    
    // Mensagem formatada
    const mensagem = `🔥 * NOVO PEDIDO * 🔥\n\nQuero garantir este item:\n\n*Item:* ${product.name}\n*Valor:* R$ ${product.price.toFixed(2)}\n*Categoria:* ${product.categoria}\n\nPor favor, me confirme a disponibilidade!`;
    
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-[#0a0a0a] rounded-3xl overflow-hidden border border-neutral-800 shadow-lg hover:border-[#b59410]/50 transition-all duration-500 flex flex-col">
      {/* Container da Imagem com Aspect Ratio fixo 3:4 (estilo moda) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        {/* Badge de Destaque (opcional) */}
        <div className="absolute top-4 left-4 bg-[#b59410] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {product.categoria}
        </div>
      </div>

      {/* Detalhes do Produto */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-neutral-100 mb-2 tracking-tight group-hover:text-[#b59410] transition-colors">
            {product.name}
          </h3>
          <p className="text-neutral-500 text-sm mb-6 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Preço e Botão */}
        <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-neutral-800">
          <span className="text-3xl font-black text-[#b59410]">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>

          <button 
            onClick={handleZap}
            className="bg-neutral-900 hover:bg-[#b59410] text-neutral-100 hover:text-black p-4 rounded-2xl shadow-xl transition-all duration-300 active:scale-95 group/btn"
          >
            {/* Ícone de Sacola de Compras */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover/btn:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 11h14l1 12H4L5 11z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}