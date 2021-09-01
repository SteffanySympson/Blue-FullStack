import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cafezinhos: [
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
      ],
    };
  };
  render() {
    const { cafezinhos } = this.state;
    
    return (
      <div className="container">
        <h1>Cafezinhos que bebemos...</h1>
        <ul>
          {cafezinhos.map((cafe) => ( //map é o forEach -- for filme em filmes
            <li key={cafe.id}>
              <h3>{cafe.nome}</h3>
              <img src={cafe.imagemUrl} alt={cafe.name} />
              <p> {cafe.descricao} </p>
            </li>
          ))}
        </ul>
      </div>  
    );
  };
};
