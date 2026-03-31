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
    nome: "Tênis Dunk Low Retro",
    preco: 899.90,
    categoria: "Calçados",
    // Use links diretos da internet para testar, ou o caminho começando com / se estiver no public
    imagem: "https://images.tcdn.com.br/img/img_prod/1125219/tenis_nike_dunk_low_retro_white_black_panda_7143_1_86409618f80456108151525287e07a3c.jpg",
  },
  {
    id: 2,
    nome: "Camiseta Oversized Street",
    preco: 159.90,
    categoria: "Roupas",
    imagem: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h6e/h8d/h00/1123456789.jpg", 
  },
];