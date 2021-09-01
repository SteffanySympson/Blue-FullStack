// inportar o express
const express = require('express');
//importar o mongoose
const mongoose = require('mongoose');

//importar o mosulo usuario
const usuarioModel = require('./models/usuarios');

mongoose.connect('mongodb://localhost:27017/usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Usuario = mongoose.model('Usuario', usuarioModel);

const usuario1 = new Usuario({
    nome: 'Ivonaldo',
    CPF: '000000000000',
    idade: 1995-03-08,
    senha: 'blue123'
})

// usuario1.save()
// .then(() => {
//     console.log('Usuario Salvo!');
// })
// .catch((err) => {
//     console.error(err);
// })

//listar usuário pelo id 

Usuario.find({ _id: ""})
.then((usuarios) => {
    console.log('Retorna por ID', usuarios)
})
.catch((err) => {
    console.log(err)
})



//indica que o app vai usar express
const app = express();
//seta a porta para o servidor node
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Bem vindo à aula de <b>MONGODB</b>');
})


app.listen(port, () =>{
    console.info(`App rodando em: http://localhost:${3000}`);
});
