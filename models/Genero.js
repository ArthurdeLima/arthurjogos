// models/Genero.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Genero = sequelize.define('Genero', {
  ID_Genero: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Generos', // Nome da tabela no banco de dados
  timestamps: true // Adicionar campos createdAt e updatedAt automaticamente
});

module.exports = Genero;
