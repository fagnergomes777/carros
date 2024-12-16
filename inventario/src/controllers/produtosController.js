/**
 * Funções de lógica de negócio para produtos.
 * - listarProdutos: Retorna todos os produtos.
 * - cadastrarProduto: Valida e adiciona um novo produto.
 * - atualizarProduto: Valida e atualiza a quantidade de um produto existente.
 * - removerProduto: Valida e remove um produto.
 */

import * as produtosRepository from '../repositories/produtosRepository.js';

// Lista todos os produtos
export const listarProdutos = () => produtosRepository.getProdutos();

// Valida e cadastra um novo produto (carro)
export const cadastrarProduto = (produto) => {
  // Validação simples para garantir que todos os campos sejam preenchidos
  if (!produto.id || !produto.nome || !produto.categoria || !produto.quantidade || !produto.preco) {
    throw new Error('Todos os campos são obrigatórios!');
  }
  // Verifica se o produto é um carro e valida
  if (produto.categoria !== 'carro') {
    throw new Error('Produto deve ser da categoria "carro"');
  }
  produtosRepository.addProduto(produto);
};

// Valida e atualiza a quantidade de um produto existente
export const atualizarProduto = (id, novaQuantidade) => {
  if (novaQuantidade < 0) {
    throw new Error('Quantidade não pode ser negativa!');
  }
  produtosRepository.atualizarQuantidade(id, novaQuantidade);
};

// Valida e remove um produto
export const removerProduto = (id) => {
  produtosRepository.removerProduto(id);
};
