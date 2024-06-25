const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'
app.use(bodyParser.json()); // Habilita parsing de JSON

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/agendamento.html'); // Serve o arquivo agendamento.html
});

app.post('/agendamento', (req, res) => {
  const { cidade, predio, andar, diaEscolhido, ocupacao } = req.body;
  console.log(`Recebido: ${cidade}, ${predio}, ${andar}, ${diaEscolhido}, ${ocupacao}`);
  res.send(`Dados recebidos com sucesso!`);
});

app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});