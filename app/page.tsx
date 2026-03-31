// app/page.tsx
"use client";
import { useState } from "react";
import { Produtos } from "../Data/Produtos"; 
import ProductCard from "../components/ProductCard";
import CartDrawer from "../components/CartDrawer"; // Importar aqui
import WhatsappFloat from "../components/WhatsappFloat";

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Tudo");
  const categorias = ["Tudo", ...new Set(Produtos.map((p) => p.categoria))];
  const filtrados = categoriaAtiva === "Tudo" ? Produtos : Produtos.filter(p => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* ... seu header e filtros aqui ... */}
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filtrados.map(item => <ProductCard key={item.id} product={item} />)}
      </div>

      <CartDrawer /> {/* <<< Sacola aqui */}
      <WhatsappFloat />
    </main>
  );
}