"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, totalPrice, totalItems, showToast } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const finalizarPedido = () => {
    const itensTexto = cart.map((item) => `• ${item.quantity}x ${item.nome}`).join("%0A");
    const msg = `Olá Emerson! Pedido Emerson Imports:%0A%0A${itensTexto}%0A%0A*Total: R$ ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/5585999999999?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Toast Notificação */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-[#b59410] text-black px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl">
          Item Adicionado
        </div>
      </div>

      {/* Botão Sacola */}
      <button onClick={() => setIsOpen(true)} className="fixed top-8 right-8 z-[100] bg-[#b59410] text-black w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
        <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#b59410]">
          {totalItems}
        </span>
        🛒
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[150] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md bg-[#080808] h-full p-10 flex flex-col border-l border-white/5">
            <h2 className="text-2xl font-black uppercase italic mb-12">Sua <span className="text-[#b59410]">Sacola</span></h2>
            <div className="flex-grow overflow-y-auto space-y-8 pr-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 items-center">
                  <img src={item.imagem} className="w-20 h-20 object-cover rounded-2xl border border-white/5" />
                  <div className="flex-grow">
                    <p className="text-[11px] font-black uppercase italic leading-tight">{item.nome}</p>
                    <p className="text-[#b59410] font-black text-lg">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-neutral-700 hover:text-white transition-colors">✕</button>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-white/10 text-center">
               <p className="text-4xl font-black italic mb-8">R$ {totalPrice.toFixed(2)}</p>
               <button onClick={finalizarPedido} className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[11px] hover:bg-[#b59410] transition-all">Finalizar Pedido</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}