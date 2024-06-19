// routes/avaliacoes.js
const express = require('express');
const router = express.Router();
const Plataforma = require('../models/Plataforma');

// Rota para listar todas as avaliações
router.get('/', async (req, res) => {
  try {
    const plataformas = await Plataforma.findAll();
    res.json(plataformas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
