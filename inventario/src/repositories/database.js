/**
 * Banco de dados do sistema.
 * Contém arrays de produtos e categorias para armazenamento de
 * informações.
 */

export const database = {
    produtos: [
      // Exemplo de produtos (carros)
      {
        id: '1',
        nome: 'Fusca',
        categoria: 'carro',
        quantidade: 5,
        preco: 25000.00
      },
      {
        id: '2',
        nome: 'Civic',
        categoria: 'carro',
        quantidade: 3,
        preco: 90000.00
      }
    ],
    categorias: [
      // Exemplo de categorias
      'carro',
      'moto',
      'bicicleta'
    ]
  };
  