'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jogos', {
      ID_Jogo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      Nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ID_Genero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ID_Plataforma: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ID_Desenvolvedor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jogos');
  }
};
