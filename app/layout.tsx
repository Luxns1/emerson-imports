import "./globals.css";

export const metadata = {
  title: "Emerson Imports",
  description: "Luxury Streetwear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="black">
      <body className="bg-black text-white antialiased">
        {/* Trava global de largura para o site não explodir no monitor */}
        <div className="min-h-screen w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}