'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plataformas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // Definir os outros campos da tabela 'Plataformas'
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
    await queryInterface.dropTable('Plataformas');
  }
};
