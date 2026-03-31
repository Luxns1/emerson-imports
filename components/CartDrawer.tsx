"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const finalizarPedido = () => {
    const itensTexto = cart
      .map((item) => `• ${item.quantity}x ${item.nome} (R$ ${item.preco.toFixed(2)})`)
      .join("%0A");
    const msg = `Olá Emerson! Gostaria de encomendar:%0A%0A${itensTexto}%0A%0A*Total: R$ ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/5585999999999?text=${msg}`, "_blank");
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[100] bg-[#b59410] text-black w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#b59410]">
          {totalItems}
        </span>
        🛒
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md bg-[#080808] h-full p-10 border-l border-white/5 flex flex-col">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-black italic uppercase">Minha <span className="text-[#b59410]">Sacola</span></h2>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 uppercase text-[10px] font-bold tracking-widest">Fechar ✕</button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <p className="text-center text-neutral-700 mt-20 uppercase text-[10px] font-black tracking-widest">Sua sacola está vazia</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 items-center border-b border-white/5 pb-6">
                    <img src={item.imagem} className="w-20 h-20 object-cover rounded-2xl" />
                    <div className="flex-grow">
                      <h4 className="text-[11px] font-black uppercase italic mb-1">{item.nome}</h4>
                      <p className="text-[#b59410] font-black italic">R$ {item.preco.toFixed(2)}</p>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase mt-1">Qtd: {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-900/50 hover:text-red-600 transition-colors">✕</button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex justify-between items-end mb-8">
                <span className="text-neutral-500 uppercase text-[10px] font-bold tracking-widest">Total Geral</span>
                <span className="text-4xl font-black italic text-white">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                onClick={finalizarPedido}
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] hover:bg-[#b59410] transition-all disabled:opacity-10 shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
              >
                Finalizar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}