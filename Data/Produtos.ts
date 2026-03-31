// Data/Produtos.ts
"use client";

// Define a estrutura de um produto (Tipo)
export type ProdutoLoja = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string; // O link da imagem coerente do Unsplash
};

// --- BANCO DE DADOS COM PRODUTOS EM PT-BR E IMAGENS COERENTES ---
// Usando Unsplash para garantir fotos de alta qualidade e temas corretos.
export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    nome: "Camiseta Oversized Streetwear Preta",
    preco: 180.00,
    categoria: "Camisetas",
    // Busca uma imagem de alta qualidade de uma camiseta preta
    imagem: "https://source.unsplash.com/random/600x600?tshirt,black,streetwear", 
  },
  {
    id: 2,
    nome: "Tênis Casual Premium Branco",
    preco: 850.00,
    categoria: "Calçados",
    // Busca uma imagem de alta qualidade de um tênis branco
    imagem: "https://source.unsplash.com/random/600x600?sneaker,white,fashion", 
  },
  {
    id: 3,
    nome: "Moletom Tech Fleece Canguru Preto",
    preco: 450.00,
    categoria: "Conjuntos",
    // Busca uma imagem de alta qualidade de um moletom
    imagem: "https://source.unsplash.com/random/600x600?hoodie,black,clothing", 
  },
  {
    id: 4,
    nome: "Boné Aba Curva Snapback Preto",
    preco: 120.00,
    categoria: "Acessórios",
    // Busca uma imagem de alta qualidade de um boné
    imagem: "https://source.unsplash.com/random/600x600?cap,black,hat", 
  },
  {
    id: 5,
    nome: "Regata Estonada Vintage Gym",
    preco: 155.00,
    categoria: "Camisetas",
    // Busca uma imagem de alta qualidade de uma regata
    imagem: "https://source.unsplash.com/random/600x600?tanktop,clothing,fitness", 
  },
  {
    id: 6,
    nome: "Sneaker Cano Alto Retro",
    preco: 590.00,
    categoria: "Calçados",
    // Busca uma imagem de alta qualidade de um tênis retro cano alto
    imagem: "https://source.unsplash.com/random/600x600?retro,sneaker,high-top", 
  }
];