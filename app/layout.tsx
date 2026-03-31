import "./globals.css";
import { CartProvider } from "../context/CartContext";

export const metadata = {
  title: "Emerson Imports | Premium Selection",
  description: "A curadoria mais exclusiva de Fortaleza. Tênis e Roupas Importadas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="antialiased bg-[#050505] text-white selection:bg-[#b59410] selection:text-black">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}