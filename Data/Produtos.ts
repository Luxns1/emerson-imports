// data/Produtos.ts
import { Product } from "../Types/Produtos";

// Criamos um tipo local que estende o Product básico
export type ProdutoLoja = Product & { 
  categoria: string;
};

export const Produtos: ProdutoLoja[] = [
  {
    id: 1,
    name: "T-Shirt Oversized Premium Black",
    price: 189.90,
    categoria: "Masculino",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600",
    description: "Algodão Pima egípcio, toque de seda. Caimento perfeito."
  },
  {
    id: 2,
    name: "Sneaker Importado 'Gold Edition'",
    price: 899.00,
    categoria: "Calçados",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
    description: "Edição limitada. Detalhes em dourado metálico."
  },
  {
    id: 3,
    name: "Relógio Minimalist Gold Dial",
    price: 1200.00,
    categoria: "Acessórios",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600",
    description: "Caixa em aço escovado, mostrador dourado escuro."
  },
  {
    id: 4,
    name: "Jaqueta Corta Vento Techwear",
    price: 450.50,
    categoria: "Masculino",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
    description: "Material impermeável e refletivo. Importação exclusiva."
  }
];