const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); 

const filmes = [
    'Matrix',
    'Vingadores',
    'Cinderela',
    'O nome do jogo',
    'Viúva Negra',

];

//GET / HOME

const msgInicio = [
    'Seja Bem vindo!',
    'Olá!!! Seja Bem Vindo!',
    'Lista de Filmes',
    'Este é meu servidor de filmes',
];

function randomMinMax(min, max){
    return Math.floor(Math.random()*(max - min))+min;
};

function frase(num){
    return msgInicio[num];
};
console.log(frase(randomMinMax(0,3)));

//GET / HOME

app.get('/',(req, res) =>{
    res.send(`<h1>${frase(randomMinMax(0,msgInicio.length))}</h1>`);
});

filmes.forEach(function (item, indice){
    console.log(item, indice);
});

console.log (filmes.length);

app.get('/', (req, res) =>{
    res.send("Bem vindo a lista de filmes!");
});

app.get('/filmes',(req, res) =>{
    res.send(filmes);
});

app.get('/filme-aleatorio', (req, res) =>{
    let filmeRandom = filmes[Math.floor(Math.random()*filmes.length)];
    res.send(filmeRandom);
});

app.get('/filmes/:id', (req, res) =>{
    const id = req.params.id -1;
    const filme = filmes[id];
    if (filme == undefined) {
        res.send("Id Inválido, tente novamente!")
    }
    else{
        res.send(filme);
    };
    
});

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


app.listen(port, function(){
    console.info(`App rodando  na porta http://localhost:${port}/`);
});
