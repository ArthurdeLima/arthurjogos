'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Avaliacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // Definir os outros campos da tabela 'Avaliacoes'
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
      // Adicionar outros campos conforme necessário
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Avaliacoes');
  }
};
