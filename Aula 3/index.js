const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); 

const filmes = [
    'Capitã Marvel',
    'Vingadores',
    'Capitão América',
    'Homem Formiga e Vespa',
    'Guardiões da Galáxia',
];

app.listen(port, function(){
    console.log(`App rodando na porta http://localhost:${port}/`);
})

//primeira rota, retorna apenas msg  hello

// app.get('/', function)