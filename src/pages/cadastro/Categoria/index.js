import React,{ useState } from 'react';
import PageBase from '../../../components/PageBase';
import {Link} from 'react-router-dom';

function CadastroCategoria(){
             
  const  valoresIniciais ={
          nome:'',
          descricao :'',
          cor:'',
       }

  const [values,setValues] =  useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

    function setValue(chave, valor){
         // chave: nome, descrição, em fim objeto que for alterar
          setValues({
             ...values,
             [chave]: valor, // nome:'valor' do input         
          })
       }

   function handleChange(infosDoEvento){
        setValue(infosDoEvento.target.getAttribute('name'), 
        infosDoEvento.target.value
        );
      } 
  
    return (
      <PageBase>
         <h1>Cadastro de Categoria : {values.nome}</h1>
    
    <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValue(valoresIniciais)
       }}>

    <div>
      <label>
          Nome da Categoria:
          <input
          type="text"
          name ="nome"
          value ={values.nome}
          onChange ={ handleChange}
          />
      </label>
    </div>


    <div>
      <label>
          Descrição :
          <textarea
          type="text"
          name ="descricao"
          value ={values.descricao}
          onChange ={handleChange} 
          />
      </label>
      </div>

      <div>
      <label>
          Cor :
          <input
          type="color"
          name ="cor"
          value ={values.cor}
          onChange ={handleChange}           
          />
      </label>
    </div>


      <button>
        Cadastrar
      </button>
    </form>

        <ul>
          {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )})}
        </ul>
    
           <Link to="/">
             Ir para Home
           </Link>
      </PageBase>
    )
  }

  export default CadastroCategoria;