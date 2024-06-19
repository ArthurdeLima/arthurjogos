// models/Avaliacao.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Avaliacao = sequelize.define('Avaliacao', {
  // Definição dos campos da tabela Avaliacoes
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Avaliacoes', // Nome da tabela no banco de dados
  timestamps: true // Adicionar campos createdAt e updatedAt automaticamente
});

module.exports = Avaliacao;
