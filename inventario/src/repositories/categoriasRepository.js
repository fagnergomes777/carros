/**
 * Funções para manipulação dos dados de categorias.
 * - getCategorias: Retorna todas as categorias cadastradas.
 * - addCategoria: Adiciona uma nova categoria ao banco de dados.
 */

import { database } from './database.js';

// Retorna todas as categorias cadastradas
export const getCategorias = () => database.categorias;

// Adiciona uma nova categoria ao banco de dados
export const addCategoria = (categoria) => {
  database.categorias.push(categoria);
};
