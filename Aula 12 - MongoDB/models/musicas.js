const mongoose = require('mongoose');

const musicaModel = new mongoose.Schema({
    nome: { type: String, requires: true},
    autor: { type: String, requires: true},
    genero: { type: String, requires: true},
    capa: { type: String },
    letra: { type: String },
    duracao: { type: Number, requires: true },
    dataCriacao: { type: Date, default: Date.now }
});

const Musica = mongoose.model("musicas", musicaModel);
module.exports = Musica;