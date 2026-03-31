import "./globals.css";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="antialiased bg-black">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}