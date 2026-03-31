// components/CartDrawer.tsx
"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const finalizarPedido = () => {
    const itensTexto = cart
      .map((item) => `${item.quantity}x ${item.nome}`)
      .join("%0A");
    const msg = `Olá! Pedido Emerson Imports:%0A${itensTexto}%0A*Total: R$ ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/5585999999999?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Botão da Sacola - Ajustado posição */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-5 right-5 z-[100] bg-[#b59410] text-black w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-all"
      >
        <span className="absolute -top-1 -left-1 bg-white text-black text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#b59410]">
          {totalItems}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md bg-[#0a0a0a] h-full p-8 flex flex-col border-l border-white/5">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-black uppercase italic">Sacola</h2>
              <button onClick={() => setIsOpen(false)} className="text-neutral-500 uppercase text-xs">Fechar ✕</button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-neutral-900/50 p-4 rounded-2xl">
                  <img src={item.imagem} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-grow">
                    <p className="text-xs font-bold uppercase">{item.nome}</p>
                    <p className="text-[#b59410] font-black">R$ {item.preco.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-neutral-700">✕</button>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex justify-between mb-6">
                <span className="uppercase text-[10px] font-bold text-neutral-500">Total</span>
                <span className="text-2xl font-black italic">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button onClick={finalizarPedido} className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-[10px] tracking-widest">
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}