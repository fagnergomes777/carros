/**
 * Interface para interação com o usuário para geração de relatórios.
 * - Exibe o menu de relatórios.
 * - Mostra os relatórios gerados.
 */

import * as relatoriosController from '../controllers/relatoriosController.js';

// Exibe o menu de relatórios
export const exibirMenuRelatorios = () => {
  console.log('Menu de Relatórios:');
  console.log('1. Gerar Relatório de Valor Total do Inventário');
  console.log('2. Listar Produtos com Baixa Quantidade');
  console.log('3. Voltar');
};

// Exibe o Relatório de Valor Total do Inventário
export const gerarRelatorioValorTotal = () => {
  const valorTotal = relatoriosController.gerarRelatorioValorTotal();
  console.log(`Valor Total do Inventário: R$ ${valorTotal.toFixed(2)}`);
};

// Exibe os Produtos com Baixa Quantidade
export const listarProdutosBaixaQuantidade = () => {
  const produtosBaixaQuantidade = relatoriosController.listarProdutosBaixaQuantidade();
  if (produtosBaixaQuantidade.length === 0) {
    console.log('Nenhum produto com baixa quantidade no estoque.');
  } else {
    console.log('Produtos com baixa quantidade em estoque:');
    produtosBaixaQuantidade.forEach(produto => {
      console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Quantidade: ${produto.quantidade}`);
    });
  }
};
