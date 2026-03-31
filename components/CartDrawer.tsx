"use client";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, totalPrice, totalItems, showToast } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const finalizarPedido = () => {
    const itensTexto = cart.map((item) => `• ${item.quantity}x ${item.nome}`).join("%0A");
    const msg = `Olá Emerson! Tenho interesse nesses itens:%0A%0A${itensTexto}%0A%0A*Total: R$ ${totalPrice.toFixed(2)}*`;
    window.open(`https://wa.me/5585999999999?text=${msg}`, "_blank");
  };

  return (
    <>
      {/* Toast de Sucesso (Aparece no topo) */}
      <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 pointer-events-none ${showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-90'}`}>
        <div className="bg-[#b59410] text-black px-6 py-3 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-[0_20px_50px_rgba(181,148,16,0.3)] flex items-center gap-3 border border-white/20">
           <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
           Item Adicionado à Sacola
        </div>
      </div>

      {/* Botão Flutuante da Sacola */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-[100] bg-[#b59410] text-black w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all hover:rotate-6 group active:scale-95 border-b-4 border-black/20"
      >
        <span className="absolute -top-2 -left-2 bg-white text-black text-[10px] font-black w-7 h-7 flex items-center justify-center rounded-full border-2 border-[#b59410] shadow-lg group-hover:bg-black group-hover:text-white transition-colors">
          {totalItems}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>

      {/* Drawer Lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex justify-end">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md bg-[#050505] h-full p-10 border-l border-white/5 flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Sua <span className="text-[#b59410]">Sacola</span></h2>
              <button onClick={() => setIsOpen(false)} className="text-neutral-700 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.3em]">Fechar ✕</button>
            </div>

            <div className="flex-grow overflow-y-auto space-y-10 custom-scrollbar pr-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 opacity-20">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em]">A sacola está vazia</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 items-center group">
                    <img src={item.imagem} className="w-24 h-24 object-cover rounded-3xl border border-white/5 group-hover:border-[#b59410]/30 transition-all" />
                    <div className="flex-grow">
                      <h4 className="text-[11px] font-black uppercase italic mb-1 text-white/80">{item.nome}</h4>
                      <p className="text-[#b59410] font-black text-lg">R$ {item.preco.toFixed(2)}</p>
                      <p className="text-[9px] text-neutral-600 font-bold uppercase mt-2">Quantidade: {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-neutral-800 hover:text-red-500 p-2 transition-colors">✕</button>
                  </div>
                ))
              )}
            </div>

            <div className="mt-auto pt-10 border-t border-white/10">
              <div className="flex justify-between items-end mb-10">
                <span className="text-neutral-600 uppercase text-[10px] font-black tracking-[0.3em]">Checkout</span>
                <span className="text-4xl font-black italic text-white tracking-tighter">R$ {totalPrice.toFixed(2)}</span>
              </div>
              <button 
                disabled={cart.length === 0}
                onClick={finalizarPedido}
                className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#b59410] transition-all disabled:opacity-5 shadow-2xl active:scale-95"
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