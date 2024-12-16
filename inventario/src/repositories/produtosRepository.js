/**
 * Funções para manipulação dos dados de produtos.
 * - getProdutos: Retorna todos os produtos cadastrados.
 * - addProduto: Adiciona um novo produto ao banco de dados.
 * - findProduto: Busca um produto pelo ID.
 * - atualizarQuantidade: Atualiza a quantidade de um produto existente.
 * - removerProduto: Remove um produto pelo ID.
 */

import { database } from './database.js';

// Retorna todos os produtos cadastrados
export const getProdutos = () => database.produtos;

// Adiciona um novo produto ao banco de dados
export const addProduto = (produto) => {
  database.produtos.push(produto);
};

// Busca um produto pelo ID
export const findProduto = (id) => database.produtos.find(produto => produto.id === id);

// Atualiza a quantidade de um produto existente
export const atualizarQuantidade = (id, novaQuantidade) => {
  const produto = findProduto(id);
  if (produto) {
    produto.quantidade = novaQuantidade;
  }
};

// Remove um produto pelo ID
export const removerProduto = (id) => {
  const index = database.produtos.findIndex(produto => produto.id === id);
  if (index !== -1) {
    database.produtos.splice(index, 1);
  }
};
