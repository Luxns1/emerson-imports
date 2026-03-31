// components/CartDrawer.tsx
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
      {/* Botão Flutuante que abre a sacola */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-[100] bg-[#b59410] text-black w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#b59410]">
          {totalItems}
        </span>
        🛒
      </button>

      {/* Drawer Lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-md bg-[#080808] h-full p-8 border-l border-white/5 flex flex-col shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-2xl font-black italic uppercase">Minha <span className="text-[#b59410]">Sacola</span></h2>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 uppercase text-[10px] font-bold">Fechar ✕</button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
              {cart.length === 0 ? (
                <p className="text-center text-neutral-600 mt-20 uppercase text-[10px] tracking-widest font-bold">Vazia</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center border-b border-white/5 pb-4">
                    <img src={item.imagem} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-grow">
                      <h4 className="text-[11px] font-bold uppercase">{item.nome}</h4>
                      <p className="text-[#b59410] font-black italic">R$ {item.preco.toFixed(2)}</p>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase">Qtd: {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-900 font-bold text-xs">✕</button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
              <div className="flex justify-between items-end mb-6">
                <span className="text-neutral-500 uppercase text-[10px] font-bold tracking-widest">Total</span>
                <span className="text-3xl font-black italic">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                onClick={finalizarPedido}
                className="w-full bg-white text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#b59410] transition-colors disabled:opacity-20"
              >
                Pedir no WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}