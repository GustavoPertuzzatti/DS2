const express = require('express');
const cosign = require('consign');
const bodyParser = require('body-parser');

const app  = express();

app.use(bodyParser.json());

cosign()
    .include('routes')
    .into(app)

app.listen(3000, () => {});