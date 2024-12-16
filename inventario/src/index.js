/**
 * Arquivo principal do sistema.
 * - Inicia o sistema e exibe o menu principal.
 * - Gerencia a navegação entre os menus de produtos, categorias e relatórios.
 */

import * as produtosController from './controllers/produtosController.js';
import * as categoriasController from './controllers/categoriasController.js';
import * as relatoriosController from './controllers/relatoriosController.js';
import * as produtosView from './views/produtosView.js';
import * as categoriasView from './views/categoriasView.js';
import * as relatoriosView from './views/relatoriosView.js';

const mostrarMenuPrincipal = () => {
  console.log('\nMenu Principal:');
  console.log('1. Gerenciar Produtos');
  console.log('2. Gerenciar Categorias');
  console.log('3. Gerar Relatórios');
  console.log('4. Sair');
  
  const opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      menuProdutos();
      break;
    case '2':
      menuCategorias();
      break;
    case '3':
      menuRelatorios();
      break;
    case '4':
      console.log('Saindo do sistema...');
      process.exit(0); // Encerra o programa
      break;
    default:
      console.log('Opção inválida!');
      mostrarMenuPrincipal();
      break;
  }
};

// Menu de Gerenciamento de Produtos
const menuProdutos = () => {
  produtosView.exibirMenuProdutos();
  const opcaoProduto = prompt('Escolha uma opção: ');

  switch (opcaoProduto) {
    case '1':
      produtosView.listarProdutos(produtosController.listarProdutos());
      menuProdutos();
      break;
    case '2':
      produtosView.cadastrarProduto();
      menuProdutos();
      break;
    case '3':
      produtosView.atualizarProduto();
      menuProdutos();
      break;
    case '4':
      produtosView.removerProduto();
      menuProdutos();
      break;
    case '5':
      mostrarMenuPrincipal();
      break;
    default:
      console.log('Opção inválida!');
      menuProdutos();
      break;
  }
};

// Menu de Gerenciamento de Categorias
const menuCategorias = () => {
  categoriasView.exibirMenuCategorias();
  const opcaoCategoria = prompt('Escolha uma opção: ');

  switch (opcaoCategoria) {
    case '1':
      categoriasView.listarCategorias(categoriasController.listarCategorias());
      menuCategorias();
      break;
    case '2':
      categoriasView.cadastrarCategoria();
      menuCategorias();
      break;
    case '3':
      mostrarMenuPrincipal();
      break;
    default:
      console.log('Opção inválida!');
      menuCategorias();
      break;
  }
};

// Menu de Relatórios
const menuRelatorios = () => {
  relatoriosView.exibirMenuRelatorios();
  const opcaoRelatorio = prompt('Escolha uma opção: ');

  switch (opcaoRelatorio) {
    case '1':
      relatoriosView.gerarRelatorioValorTotal();
      menuRelatorios();
      break;
    case '2':
      relatoriosView.listarProdutosBaixaQuantidade();
      menuRelatorios();
      break;
    case '3':
      mostrarMenuPrincipal();
      break;
    default:
      console.log('Opção inválida!');
      menuRelatorios();
      break;
  }
};

// Inicia o sistema
mostrarMenuPrincipal();
