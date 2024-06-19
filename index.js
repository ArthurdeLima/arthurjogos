const express = require('express');
   const app = express();
   require('dotenv').config();

   // Importação das rotas
   const avaliacoesRouter = require('./routes/avaliacoes');
   const jogosRouter = require('./routes/jogos');
   const plataformasRouter = require('./routes/plataformas');
   const desenvolvedoresRouter = require('./routes/desenvolvedores');
   const generosRouter = require('./routes/generos');

   // Uso das rotas
   app.use('/api/avaliacoes', avaliacoesRouter);
   app.use('/api/jogos', jogosRouter);
   app.use('/api/plataformas', plataformasRouter);
   app.use('/api/desenvolvedores', desenvolvedoresRouter);
   app.use('/api/generos', generosRouter);

   const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}`);
   });