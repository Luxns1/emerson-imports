// Data/Produtos.ts
export interface ProdutoLoja {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
  imagem: string;
}

export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    nome: "Nike Dunk Low Retro Panda",
    preco: 899.90,
    categoria: "Calçados",
    imagem: "https://static.nike.com/a/images/t_PDP_640_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+JORDAN+1+LOW.png",
  },
  {
    id: 2,
    nome: "Camiseta Oversized Street Black",
    preco: 159.90,
    categoria: "Roupas",
    imagem: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80&auto=format&fit=crop", 
  },
  {
    id: 3,
    nome: "Moletom Essential Gold Edition",
    preco: 349.90,
    categoria: "Roupas",
    imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80&auto=format&fit=crop",
  }
];