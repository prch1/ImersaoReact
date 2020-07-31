import React,{ useState, useEffect } from 'react';
import PageBase from '../../../components/PageBase';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';

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

   useEffect(() => {
      console.log('alo alo');
      const url = 'http://localhost:8080/categorias';
      fetch(url)
      .then(async(respotaDoServidor) => {
        const resposta = await respotaDoServidor.json();
        setCategorias([...resposta,]);
      });

      /*setTimeout(() => {
        setCategorias([
            ...categorias,
            {
              id: 1,
              nome: 'XXXXXX',
              descricao: 'YYYYYYY',
              cor: '#cbd1ff',
            },
            {
              id: 2,
              nome: 'bbbbbb',
              descricao: 'fffffff',
              cor: '#cbd1ff',
            },
          ]);
        }, 4 * 1000);*/
        } ,[]);

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

    <FormField
          label ="Nome da Categoria :"
          type="text"
          name ="nome"
          value ={values.nome}
          onChange ={handleChange} 
    />

      <FormField
          label ="Descricao : "
          type="textarea"
          name ="descricao"
          value ={values.descricao}
          onChange ={handleChange} 
      />

      <FormField
            label ="Cor :"
            type="color"
            name ="cor"
            value ={values.cor}
            onChange ={handleChange} 
        />

    <button>
        Cadastrar
      </button>
    </form>

     {categorias.length ===0 && (
     <div>
       {/*Carregando...*/}
       Loading...
     </div> )}

        <ul>
          {categorias.map((categoria, indice) => {
              return(
                <li key={`${categoria.nome}${indice}`}>
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