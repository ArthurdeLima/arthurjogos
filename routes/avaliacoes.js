// routes/avaliacoes.js
const express = require('express');
const router = express.Router();
const Avaliacao = require('../models/Avaliacao');

// Rota para listar todas as avaliações
router.get('/', async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
