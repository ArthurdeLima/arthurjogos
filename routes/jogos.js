// routes/avaliacoes.js
const express = require('express');
const router = express.Router();
const Jogo = require('../models/Jogo');

// Rota para listar todas as avaliações
router.get('/', async (req, res) => {
  try {
    const jogos = await Jogo.findAll();
    res.json(jogos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
