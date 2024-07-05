const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


const PORT = 3001;

const corsOptions = {
  origin: 'http://localhost:3000', // URL do seu aplicativo React
  optionsSuccessStatus: 200 // Alguns navegadores podem retornar status 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

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
      from: 'rogerioalmeida@gmail.com',
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
