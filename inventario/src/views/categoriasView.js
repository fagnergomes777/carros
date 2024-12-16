/**
 * Interface para interação com o usuário para gerenciamento de categorias.
 * - Exibe o menu de opções.
 * - Recebe dados do usuário para listar ou cadastrar categorias.
 */

import * as categoriasController from '../controllers/categoriasController.js';

// Exibe o menu de categorias
export const exibirMenuCategorias = () => {
  console.log('Menu de Categorias:');
  console.log('1. Listar Categorias');
  console.log('2. Cadastrar Categoria');
  console.log('3. Voltar');
};

// Recebe dados para cadastrar uma nova categoria
export const cadastrarCategoria = () => {
  const categoria = {
    nome: prompt('Nome da categoria:')
  };
  try {
    categoriasController.cadastrarCategoria(categoria);
    console.log('Categoria cadastrada com sucesso!');
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
};
