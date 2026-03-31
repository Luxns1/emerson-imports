import "./globals.css";

export const metadata = {
  title: "Emerson Imports | Premium",
  description: "O melhor em importados em Fortaleza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">
        {/* O 'children' aqui é a sua Page.tsx, sem frescuras de flex ou h-full */}
        {children}
      </body>
    </html>
  );
}