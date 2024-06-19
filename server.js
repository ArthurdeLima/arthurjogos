// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

// Carregar variáveis de ambiente
dotenv.config();

// Criar uma instância do servidor Express
const app = express();

// Middleware para permitir requisições de diferentes origens (CORS), se necessário
app.use(cors());

// Middleware para parsear o corpo das requisições em JSON
app.use(bodyParser.json());

// Importar as rotas
const avaliacoesRouter = require('./routes/avaliacoes');
const jogosRouter = require('./routes/jogos');
const plataformasRouter = require('./routes/plataformas');
const desenvolvedoresRouter = require('./routes/desenvolvedores');
const generosRouter = require('./routes/generos');

// Usar as rotas no servidor Express
app.use('/api/avaliacoes', avaliacoesRouter);
app.use('/api/jogos', jogosRouter);
app.use('/api/plataformas', plataformasRouter);
app.use('/api/desenvolvedores', desenvolvedoresRouter);
app.use('/api/generos', generosRouter);

// Porta do servidor
const PORT = process.env.PORT || 3001;

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
