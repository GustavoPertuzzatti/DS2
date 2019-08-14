const express = require('express');
const cosign = require('consign');
const bodyParser = require('body-parser');

// Instancia a aplicação
const app  = express();

// Adiciona o bodyParser à aplicação para poder receber JSON no body da requisição.
app.use(bodyParser.json());

// Padrão
app.get('/', (req, res) => {

    res.send('<h1>Its Working! But Looks like Sheet!</h1>');

});

cosign()
    .include('routes')
    .into(app)

app.listen(3000, () => {});