import React, { useState } from 'react';
import Formulario from '../formulario/form'
// import logo from './cafezinho.png';
import './App.css';
import Bttn from "../Bttn/bttn"

const App = ()=>{
    
  const [cafezinhos,setCafezinhos] = useState([
      {
          id: 1,
          nome: "Café com leite",
          imagemUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/cafecomleite.gif",
          descricao: "Trata-se do café filtrado com leite aquecido ou fervido. Também pode apresentar-se como café expresso com leite vaporizado e uma fina camada de espuma de leite."
      },
      {
          id: 2,
          nome: "Mocha",
          imagemUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/mocha.gif",
          descricao: "Drink que conta com uma calda de chocolate, leite vaporizado, espuma de leite e uma dose de expresso. A mistura pode ser tri-fásica ou uma mistura de café com a calda de chocolate com a crema do leite por cima. Pode também ser conhecido pelo nome de Mocaccino, termo utilizado e criado por uma rede de cafeterias internacional."
      },
      {
          id: 3,
          nome: "Cappuccino",
          imagemUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/capuccinno.gif",
          descricao: "O verdadeiro cappuccino apresenta 1/3 de expresso, 1/3 de leite vaporizado, 1/3 de espuma de leite na xícara de 150 a 180 ml. A espuma do cappuccino deve ser densa e cremosa, com temperatura de no máximo 60º para se tomar em goles. No Brasil, há o hábito de acrescentar canela ou chocolate."
      },
      {
        id: 4,
        nome: "Cappuccino Italiano",
        imagemUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/capuccinno-italiano.gif",
        descricao: "Compreende em: 1/3 de expresso; 1/3 de leite vaporizado e 1/3 de espuma de leite na xícara de 150 a 180 ml."
      },
      {
        id: 5,
        nome: "Pingado",
        imagemUrl: "https://www.mexidodeideias.com.br/wp-content/uploads/2011/04/PINGADO.gif",
        descricao: "Um copo de leite quente que recebe uma pequena quantidade de café, ou seja, somente um pingo de café. Bebida bastante popular em botecos e padarias do Brasil e é, geralmente, servido no copo americano."
      },
   ])
  
  const handleDelete = (id)=>{
      setCafezinhos(cafezinhos.filter((e)=> id !=e.id ))

  }

  const handleSubmit =e=>{
      e.preventDefault()
  }
  
  
  
  return(
  <div className="App">
      
          <Formulario cafezinhos = {cafezinhos} setCafezinhos ={setCafezinhos} />
          <div className ="container-card">
              <ul className="container-card__ul">
              {cafezinhos.map((f)=>(
                  <li key={f.id} className="container-card__movie-list"> 
                      <button>{f.id}</button>
                      <div>
                        <h2 className ="movie-title">{f.nome}</h2>
                        <p className="movie-desc">{f.descricao}</p>
                      </div>
                      <div className="imagem">
                        <img src={f.imagemUrl} alt= {f.nome}/>
                        <Bttn texto ="Excluir"onClick ={()=>(handleDelete(f.id))}/>
                        <Bttn texto="Editar"/>
                      </div>
                  </li>
                  ))}
                      
              </ul>
          </div>
  </div>
      
  );
}

export default App;
