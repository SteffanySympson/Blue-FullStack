const express = require('express');
const app = express();

const port = 3000;

const jogos = [
    'Matador de Noob',
    'Noob Supremo',
    '100%Rox',
    '20Matar',
    'Fear',
    'Striker',
    'Ragnarok',
    'Minecraft',
    'The Sims',
    'Mortal Kombat',
    'Super Mario World',
];

const msgInicio = [
    'Bem vindo!',
    'Olá!!! Seja Bem Vindo!',
    'Servidor de jogos',
    'Este é meu servidor',
];

function randomMinMax(min, max){
    return Math.floor(Math.random()*(max - min))+min;
}

function frase(num){
    return msgInicio[num];
}
console.log(frase(randomMinMax(0,3)));

//GET / HOME

app.get('/',(req, res) =>{
    res.send(`<h1>${frase(randomMinMax(0,msgInicio.length))}</h1>`);
});

jogos.forEach(function (item, indice){
    console.log(item, indice);
});

console.log (jogos.length);

app.get('/', (req, res) =>{
    res.send("Bem vindo a lista de Jogos!")
});

app.get('/jogos',(req, res) =>{
    res.send(jogos);
});

app.get('/jogo-aleatorio', (req, res) =>{
    let jogoRandom = jogos[Math.floor(Math.random()*jogos.length)];
    res.send(jogoRandom);
});

app.get('/jogos/:id', (req, res) =>{
    const id = req.params.id -1;
    const jogo = jogos[id];
    if (jogo == undefined) {
        res.send("Id Inválido, tente novamente!")
    }
    else{
        res.send(jogo);
    };
    
});

app.listen(port, () =>{
    console.info(`Servidor rodando! http://localhost:${port}/`);
});