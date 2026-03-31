"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, totalPrice, totalItems, showToast } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Função para enviar o pedido formatado para o WhatsApp da IG IMPORTS
  const finalizarPedido = () => {
    if (cart.length === 0) return alert("Sua sacola está vazia!");

    const itensTexto = cart
      .map((item) => `• ${item.quantity}x ${item.nome} - R$ ${(item.preco * item.quantity).toFixed(2)}`)
      .join("%0A");

    const mensagemFinal = `Olá! Gostaria de finalizar meu pedido na *IG IMPORTS*:%0A%0A${itensTexto}%0A%0A*Total: R$ ${totalPrice.toFixed(2)}*%0A%0A Aguardo o retorno para combinar a entrega!`;
    
    // Substitua pelo seu número de WhatsApp real (DDI + DDD + Número)
    window.open(`https://wa.me/5585999999999?text=${mensagemFinal}`, "_blank");
  };

  return (
    <>
      {/* Toast de Confirmação (Aparece ao adicionar item) */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[250] transition-all duration-500 ${showToast ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <div className="bg-[#b59410] text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest shadow-[0_0_30px_rgba(181,148,16,0.4)]">
          Item Adicionado à Sacola
        </div>
      </div>

      {/* Botão do Carrinho (Fixo no canto superior direito) */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed top-8 right-8 z-[100] bg-[#b59410] text-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all border border-white/10 active:scale-95"
      >
        <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#b59410]">
          {totalItems}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
        </svg>
      </button>

      {/* Drawer Lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex justify-end">
          {/* Overlay Escuro */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Conteúdo do Drawer */}
          <div className="relative w-full max-w-md bg-[#080808] h-full p-8 md:p-12 flex flex-col border-l border-white/5 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">
                Sua <span className="text-[#b59410]">Sacola</span>
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                Fechar
              </button>
            </div>

            {/* Lista de Itens */}
            <div className="flex-grow overflow-y-auto space-y-8 pr-2 custom-scrollbar">
              {cart.length === 0 ? (
                <p className="text-neutral-600 text-center mt-20 uppercase text-[10px] tracking-[0.3em]">A sacola está vazia</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 items-center group">
                    <div className="w-20 h-20 bg-neutral-900 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-[11px] font-black uppercase italic leading-tight text-white/90 mb-1">
                        {item.nome}
                      </p>
                      <p className="text-[#b59410] font-black text-sm italic">
                        {item.quantity}x R$ {item.preco.toFixed(2)}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-neutral-700 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Rodapé do Drawer */}
            <div className="mt-auto pt-10 border-t border-white/5">
              <div className="flex justify-between items-end mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 italic">Subtotal</span>
                <span className="text-4xl font-black italic text-white leading-none">
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>
              
              <button 
                onClick={finalizarPedido}
                disabled={cart.length === 0}
                className="w-full bg-white text-black py-5 rounded-xl font-black uppercase text-[11px] tracking-widest hover:bg-[#b59410] transition-all active:scale-95 disabled:opacity-50 disabled:hover:bg-white"
              >
                Finalizar via WhatsApp
              </button>
              
              <p className="text-[9px] text-center text-neutral-700 uppercase tracking-widest mt-6">
                IG IMPORTS &bull; Fortaleza, CE
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}