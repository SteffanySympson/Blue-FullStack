const express = require('express');
const app = express();
const port = 3000;

app. use(express.json());

const modelos = [];
const marcas = [];
const categorias = [];
const tipoDeCombustiveis = [];
const anos = [];

const msgInicio = [
    'Bem vindo!',
    'Olá!!! Seja Bem Vindo!',
    'Servidor de carros',
    'Este é meu servidor',
];

function random(){
    return Math.floor(Math.random()*msgInicio.length);
    };
    console.log(random());
app.get("/", (req, res) =>{
    res.send(msgInicio[random]);
});

app.get("/carros", (req, res) =>{
    res.send(`
    Modelo: ${modelos},
    Marca: ${marcas},
    Categoria: ${categorias},
    Combustível: ${tipoDeCombustiveis},
    Ano: ${anos}`);
});

app.get("/carros/:id", (req, res) =>{
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoDeCombustiveis[id] || !anos[id]){
        res.send("Veículo não encontrado, tente novamente!");
    }
    res.send(`
    Modelo: ${modelos[id]},
    Marca: ${marcas[id]},
    Categoria: ${categorias[id]},
    Combustível: ${tipoDeCombustivel[id]},
    Ano: ${ano[id]}`);
});

app.post('/carros', (req, res) =>{
    const modelo = req.body.modelo;
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoDeCombustivel = req.body.tipoDeCombustivel;
    const ano = req.body.ano;

    const id = modelos.length;

    modelos[id]=modelo;
    marcas[id]=marca;
    categorias[id]=categoria;
    tipoDeCombustiveis[id]=tipoDeCombustivel;
    anos[id]=ano;

    res.send(`Veículo adicionado com sucesso: ${modelo}.
    O ID do veículo é ${id+1}`); 
});

app.put("/carros/:id", (req, res) =>{
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoDeCombustiveis[id] || !anos[id]){
        res.send("Veículo não encontrado, tente novamente!");
    }

    const modelo = req.body.modelo;
    const modeloAnterior = modelos[id];
    const marca = req.body.marca;
    const categoria = req.body.categoria;
    const tipoDeCombustiveis = req.body.tipoDeCombustiveis;
    const ano = req.body.ano;

    modelos[id]=modelo;
    marcas[id]=marca;
    categorias[id]=categoria;
    tipoDeCombustiveis[id]=tipoDeCombustivel;
    anos[id]=ano;
    res.send(`Veículo atualizado com sucesso, veículo anterior: ${modeloAnterior}, Substituído por: ${modelo}`)
});

app.delete('/carros/:id', (req, res) =>{
    const id = req.params.id -1;

    if(!modelos[id] || !marcas[id] || !categorias[id] || !tipoDeCombustiveis[id] || !anos[id]){
        res.send("Veículo não encontrado, tente novamente!");
    }

    delete modelos[id];
    delete marcas[id];
    delete categorias[id];
    delete tipoDeCombustiveis[id];
    delete anos[id];
    res.send("Veículo excluído com sucesso!")
});

app.listen(port, function(){
    console.info(`App rodando  na porta http://localhost:${port}/`)`;`
});