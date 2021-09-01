import React,{ useState } from "react";

const Formulario = ({ cafezinhos , setCafezinhos }) => {
  
    const [nomeCafe,setNome] = useState('');
    const [urlImg,setUrl]= useState('');
    const [descCafe,setDesc]= useState('');
    
    
   
    const handleChangeName = (e)=>{
        setNome(e.target.value)
    }
  
    const handleChangeUrl = (e)=>{
        setUrl(e.target.value)
    }
    
    const handleChangeDesc = (e)=>{
        setDesc(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const ultimoCafezinho = cafezinhos[cafezinhos.length-1] 
        setCafezinhos([
            ...cafezinhos,
            {
                id: ultimoCafezinho.id+1,
                nome: nomeCafe,
                imagem: urlImg,
                descricao: descCafe
            }
        ])
    }
  
  
    return (
    <div className="container-form">
      <form onSubmit={HandleSubmit}>
        <label>Nome </label>
        <input value={nomeCafe} onChange={handleChangeName} required></input>
        <br></br>

        <label>Imagem </label>
        <input value ={urlImg} onChange ={handleChangeUrl} required></input>
        <br></br>

        <label>Descrição </label>
        <input value ={descCafe} onChange={handleChangeDesc} required></input>
        <br></br>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
