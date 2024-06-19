// models/Plataforma.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Plataforma = sequelize.define('Plataforma', {
  // Definição dos campos da tabela Plataformas
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Plataformas', // Nome da tabela no banco de dados
  timestamps: true // Adicionar campos createdAt e updatedAt automaticamente
});

module.exports = Plataforma;
