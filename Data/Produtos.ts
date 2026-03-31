// Data/Produtos.ts
"use client";

export type ProdutoLoja = {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string; 
};

export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    nome: "Camiseta Streetwear Oversized Preta",
    preco: 180.00,
    categoria: "Camisetas",
    imagem: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 2,
    nome: "Tênis Air Jordan Style Luxo",
    preco: 850.00,
    categoria: "Calçados",
    imagem: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 3,
    nome: "Conjunto Moletom Tech Fleece",
    preco: 450.00,
    categoria: "Conjuntos",
    imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 4,
    nome: "Boné Snapback Classic Black",
    preco: 120.00,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 5,
    nome: "Tênis Sneaker Cano Alto",
    preco: 590.00,
    categoria: "Calçados",
    imagem: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 6,
    nome: "Camiseta Vintage Estonada",
    preco: 165.00,
    categoria: "Camisetas",
    imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop", 
  }
];