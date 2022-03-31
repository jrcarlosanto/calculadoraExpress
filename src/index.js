const express = require('express');
const calcularRoute = require('./routes/calcular.router')

const app = express();
const port = 3000;

// Configurações de Rotas
app.use(calcularRoute);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}. Consulta: http://localhost:3000/soma?a=1&b=1`);
  });