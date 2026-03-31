// Data/Produtos.ts

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
    nome: "Camiseta Street Black",
    preco: 180.00,
    categoria: "Camisetas",
    imagem: "/Logo.png", 
  },
  {
    id: 2,
    nome: "Tênis Jordan Retro",
    preco: 850.00,
    categoria: "Calçados",
    imagem: "/Logo.png", 
  },
  {
    id: 3,
    nome: "Conjunto Nike Tech",
    preco: 450.00,
    categoria: "Conjuntos",
    imagem: "/Logo.png", 
  },
  {
    id: 4,
    nome: "Boné New Era",
    preco: 120.00,
    categoria: "Acessórios",
    imagem: "/Logo.png", 
  }
];