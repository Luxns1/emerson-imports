// Data/Produtos.ts
"use client";

// Define o que é um produto (Tipo)
export type ProdutoLoja = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string; 
};

// --- BANCO DE DADOS COM IMAGENS GENÉRICAS ---
// Usando o Lorem Picsum para gerar fotos aleatórias de moda/produtos
export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    nome: "Camiseta Street Premium",
    preco: 180.00,
    categoria: "Camisetas",
    imagem: "https://picsum.photos/seed/shirt1/600/600", 
  },
  {
    id: 2,
    nome: "Tênis Esportivo Pro",
    preco: 850.00,
    categoria: "Calçados",
    imagem: "https://picsum.photos/seed/shoes1/600/600", 
  },
  {
    id: 3,
    nome: "Conjunto Moletom Tech",
    preco: 450.00,
    categoria: "Conjuntos",
    imagem: "https://picsum.photos/seed/outfit1/600/600", 
  },
  {
    id: 4,
    nome: "Boné Aba Curva Luxo",
    preco: 120.00,
    categoria: "Acessórios",
    imagem: "https://picsum.photos/seed/hat1/600/600", 
  },
  {
    id: 5,
    nome: "Camiseta Oversized White",
    preco: 195.00,
    categoria: "Camisetas",
    imagem: "https://picsum.photos/seed/shirt2/600/600", 
  },
  {
    id: 6,
    nome: "Sneaker Casual Black",
    preco: 590.00,
    categoria: "Calçados",
    imagem: "https://picsum.photos/seed/shoes2/600/600", 
  }
];