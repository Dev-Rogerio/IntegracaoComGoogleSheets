const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
const PORT = 3001;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.get('/producao', (req, res) => {
  res.send('Hello from producao!');
});
// Dados simulados para demonstração
const clients = [
  { cpf: '123.456.789-00', client: 'client 1' },
  { cpf: '987.654.321-00', client: 'client 2' },
];
// Rota para salvar dados recebidos
app.post('/medidas', (req, res) => {
  // Lógica para salvar os dados recebidos
  res.status(200).send('Dados recebidos com sucesso!');
});
// Rota para buscar cliente pelo CPF
app.get('/medidas/client/:cpf', (req, res) => {
  const cpf = req.params.cpf;
  const clientData = clients.find((client) => client.cpf === cpf);
  if (clientData) {
    res.json(clientData);
  } else {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
});
// Rota para enviar email
app.post('/send-email', async (req, res) => {
  console.log('Recebida requisição POST em /send-email');
  const { email, subject, text, image } = req.body;
  try {
    // Configurar o transporter para enviar o email usando nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rogerioalmeida.tech@gmail.com', // Coloque seu email do Gmail aqui
        pass: 'ka@657Za' // Coloque sua senha do Gmail aqui
      }
    });
    // Opções do email
    let mailOptions = {
      from: 'rogerioalmeida.tech@gmail.com',
      to: email,
      subject: subject,
      text: text,
      attachments: [
        {
          filename: 'image.png',
          content: image.split('base64,')[1],
          encoding: 'base64'
        }
      ]
    };
    // Enviar email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: %s', info.messageId);
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ error: 'Erro ao enviar o email' });
  }
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});





























