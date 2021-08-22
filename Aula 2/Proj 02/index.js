const express = require('express');
const app = express();

app.use(express.json()); 

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
};

function frase(num){
    return msgInicio[num];
};
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
    res.send("Bem vindo a lista de Jogos!");
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

app.post('/jogos', (req, res) =>{
    const jogo = req.body.jogo;
    const id = jogos.length;
    jogos.push(jogo);

    res.send (`Filme add com sucesso: ${jogo}.
    O ID do filme é ${id}`);
});

app.put('/jogos/:id', (req, res) => {
    const id = req.params.id -1;
    const jogo = req.body.jogos;
    const nomeAnterior = jogos[id];
    jogos[id] = jogo;
    res.send(`Filme anterior ${nomeAnterior} atualizado com sucesso para ${jogo}.`);
});

app.delete('/jogos/:id', (req, res) =>{
    const id = req.params.id -1;
    delete jogos[id];
    res.send('Jogo deletado com sucesso!');
});


app.listen(port, function(){
    console.info(`App rodando  na porta http://localhost:${port}/`);
});

