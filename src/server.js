const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos da pasta 'public'
app.use(bodyParser.json()); // Habilita parsing de JSON

// Rotas para as páginas HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cadastro.html'));
});

app.get('/agendamento', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'agendamento.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/reservas', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'reservas.html'));
});

// Variável para armazenar os dados de agendamento
let agendamentos = [];

// Endpoint para receber os dados de agendamento
app.post('/agendamento', (req, res) => {
  console.log('Request Body:', req.body);
  const data = req.body;
  const {
    cidade,
    predio,
    andar,
    area,
    diaEscolhido,
    horario
  } = req.body;

  console.log(`Recebido: ${cidade}, ${predio}, ${andar}, ${area}, ${diaEscolhido}, ${horario}`);

  // Armazena o agendamento
  agendamentos.push({
    cidade,
    predio,
    andar,
    area,
    diaEscolhido,
    horario
  });

  res.send('Dados recebidos com sucesso!');
});

// Endpoint para enviar os dados de agendamento para a página de reservas
app.get('/obter-agendamentos', (req, res) => {
  res.json(agendamentos);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});