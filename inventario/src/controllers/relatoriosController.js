/**
 * Funções para geração de relatórios.
 * - gerarRelatorioValorTotal: Calcula o valor total do inventário.
 * - listarProdutosBaixaQuantidade: Lista produtos com quantidade menor que 10.
 */

import * as produtosRepository from '../repositories/produtosRepository.js';

// Calcula o valor total do inventário
export const gerarRelatorioValorTotal = () => {
  const produtos = produtosRepository.getProdutos();
  return produtos.reduce((total, produto) => {
    return total + (produto.quantidade * produto.preco);
  }, 0);
};

// Lista produtos com baixa quantidade (menor que 10)
export const listarProdutosBaixaQuantidade = () => {
  const produtos = produtosRepository.getProdutos();
  return produtos.filter(produto => produto.quantidade < 10);
};
