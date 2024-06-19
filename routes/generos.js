// routes/generos.js
const express = require('express');
const router = express.Router();
const Genero = require('../models/Genero');

// Rota para listar todos os gêneros
router.get('/', async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.json(generos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
