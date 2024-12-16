/**
 * Funções de lógica de negócio para categorias.
 * - listarCategorias: Retorna todas as categorias.
 * - cadastrarCategoria: Valida e adiciona uma nova categoria.
 */

import * as categoriasRepository from '../repositories/categoriasRepository.js';

// Lista todas as categorias
export const listarCategorias = () => categoriasRepository.getCategorias();

// Valida e cadastra uma nova categoria
export const cadastrarCategoria = (categoria) => {
  if (!categoria.nome) {
    throw new Error('O nome da categoria é obrigatório!');
  }
  categoriasRepository.addCategoria(categoria);
};
