// models/Jogo.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Jogo = sequelize.define('Jogo', {
  ID_Jogo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ID_Genero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ID_Plataforma: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ID_Desenvolvedor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'Jogos',
  timestamps: true  // Habilita createdAt e updatedAt
});

module.exports = Jogo;
