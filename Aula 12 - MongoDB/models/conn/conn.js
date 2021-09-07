const mongoose = require('mongoose');
//url de conexao -> mongodb://servidor:porta/nome do banco
//useNewUrlParser -> Para que o Mongoose use o novo sistema de URL
//useUnifiedTopology -> Mecanismos de monitoramento de Banco de Dados

function Conn(url, user, pass,banco){
    mongoose.connect(`${url}/${banco}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;