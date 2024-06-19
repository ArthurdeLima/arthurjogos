// routes/avaliacoes.js
const express = require('express');
const router = express.Router();
const Desenvolvedor = require('../models/Desenvolvedor');

// Rota para listar todas as avaliações
router.get('/', async (req, res) => {
  try {
    const desenvolvedores = await Desenvolvedor.findAll();
    res.json(desenvolvedores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;
