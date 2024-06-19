// models/Desenvolvedor.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Desenvolvedor = sequelize.define('Desenvolvedor', {
  // Definição dos campos da tabela Desenvolvedores
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais_origem: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Desenvolvedores', // Nome da tabela no banco de dados
  timestamps: true // Adicionar campos createdAt e updatedAt automaticamente
});

module.exports = Desenvolvedor;
