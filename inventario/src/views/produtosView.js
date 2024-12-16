/**
 * Interface para interação com o usuário para gerenciamento de produtos.
 * - Exibe o menu de opções.
 * - Recebe dados do usuário para listar, cadastrar, atualizar ou remover
 *   produtos.
 */

import * as produtosController from '../controllers/produtosController.js';

// Exibe o menu de produtos
export const exibirMenuProdutos = () => {
  console.log('Menu de Produtos:');
  console.log('1. Listar Produtos');
  console.log('2. Cadastrar Produto');
  console.log('3. Atualizar Produto');
  console.log('4. Remover Produto');
  console.log('5. Voltar');
};

// Recebe dados para cadastrar um novo produto (carro)
export const cadastrarProduto = () => {
  const produto = {
    id: prompt('ID do carro:'),
    nome: prompt('Nome do carro:'),
    categoria: 'carro',  // Categoria fixa para "carro"
    quantidade: parseInt(prompt('Quantidade:')),
    preco: parseFloat(prompt('Preço do carro:'))
  };
  try {
    produtosController.cadastrarProduto(produto);
    console.log('Carro cadastrado com sucesso!');
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
};

// Exibe todos os produtos cadastrados
export const listarProdutos = () => {
  const produtos = produtosController.listarProdutos();
  if (produtos.length === 0) {
    console.log('Nenhum produto cadastrado.');
  } else {
    produtos.forEach(produto => {
      console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}, Quantidade: ${produto.quantidade}, Preço: R$ ${produto.preco.toFixed(2)}`);
    });
  }
};
