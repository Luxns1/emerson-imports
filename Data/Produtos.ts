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
    nome: "Camiseta Streetwear Oversized Preta",
    preco: 180.00,
    categoria: "Camisetas",
    imagem: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&q=80", 
  },
  {
    id: 2,
    nome: "Tênis Air Jordan Style Luxo",
    preco: 850.00,
    categoria: "Calçados",
    imagem: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&q=80",
  },
  {
    id: 3,
    nome: "Conjunto Moletom Tech Fleece",
    preco: 450.00,
    categoria: "Conjuntos",
    imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&q=80",
  },
  {
    id: 4,
    nome: "Boné Snapback Classic Black",
    preco: 120.00,
    categoria: "Acessórios",
    imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&q=80",
  }
];