// Data/Produtos.ts
"use client";

// Define a estrutura de um produto (Tipo)
export type ProdutoLoja = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string; // O link da imagem genérica temática
};

// --- BANCO DE DADOS COM PRODUTOS EM PT-BR E IMAGENS TEMÁTICAS ---
// Usando o Lorem Picsum com sementes temáticas para garantir a coerência.
export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    nome: "Camiseta Oversized Streetwear Preta",
    preco: 180.00,
    categoria: "Camisetas",
    // Gera uma imagem aleatória, mas sempre focada em "shirt" (camiseta)
    imagem: "https://picsum.photos/seed/emerson_shirt_black/600/600?clothing=shirt", 
  },
  {
    id: 2,
    nome: "Tênis Casual Premium Branco",
    preco: 850.00,
    categoria: "Calçados",
    // Gera uma imagem aleatória, mas sempre focada em "shoes" (tênis)
    imagem: "https://picsum.photos/seed/emerson_shoes_white/600/600?footwear=shoes", 
  },
  {
    id: 3,
    nome: "Conjunto Moletom Tech Fleece Cinza",
    preco: 450.00,
    categoria: "Conjuntos",
    // Gera uma imagem de vestuário completo
    imagem: "https://picsum.photos/seed/emerson_outfit_grey/600/600?fashion=outfit", 
  },
  {
    id: 4,
    nome: "Boné Aba Curva Snapback Preto",
    preco: 120.00,
    categoria: "Acessórios",
    // Gera uma imagem focada em acessórios de cabeça
    imagem: "https://picsum.photos/seed/emerson_hat_black/600/600?accessory=hat", 
  },
  {
    id: 5,
    nome: "Camiseta Estonada Vintage",
    preco: 195.00,
    categoria: "Camisetas",
    imagem: "https://picsum.photos/seed/emerson_shirt_vintage/600/600?clothing=shirt", 
  },
  {
    id: 6,
    nome: "Tênis Cano Alto Skateboard",
    preco: 590.00,
    categoria: "Calçados",
    imagem: "https://picsum.photos/seed/emerson_shoes_skate/600/600?footwear=shoes", 
  }
];