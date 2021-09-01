const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); //fala para as requisições do express para trabalhar com o json

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

app.get('/', (req, res) => {
    res.send("Olá Visitante!");
});

// rota para listagem dos filmes pré cadastrados na const filmes

app.get('/filmes', (req, res) => {
    res.send(filmes);
});

//rota do filme individual por ID 
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filmes = filmes[id];

    if(!filmes) {
        res.send('Filme não encontrado');
    }
    res.send(filme);
});

//Rota para cadastrar um novo filme CRUD
//CREATE - POST
//READ - GET
//UPDATE - PUT
//DELETE - DELETE

app.post('/filmes', (req, res) =>{
    const filme = req.body.filme;
    const id = filmes.length;
    filmes.push(filme);

    res.send (`Filme add com sucesso: ${filme}.
    O ID do filme é ${id}`);
});

app.put('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = req.body.filmes;
    const nomeAnterior = filmes[id];
    filmes[id] = filme;
    res.send(`Filme anterior ${nomeAnterior} atualizado com sucesso para ${filme}.`);
});

app.delete('/filmes/:id', (req, res) =>{
    const id = req.params.id -1;
    delete filmes[id];
    res.send('Filme deletado com sucesso!');
});

// app.delete('/filmes/:id', (req, res) =>)

app.listen(port, function(){
    console.info(`App rodando  na porta http://localhost:${port}/`);
});
