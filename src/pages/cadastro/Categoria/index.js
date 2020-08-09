import React,{ useState, useEffect } from 'react';
import PageBase from '../../../components/PageBase';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function CadastroCategoria(){
             
  const  valoresIniciais ={
          titulo:'',
          descricao :'',
          cor:'',
       };

  const { handleChange,values, clearForm} = useForm(valoresIniciais);     

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8000/categorias'
      : 'https://prflix.herokuapp.com/categorias';
    // E a ju ama variáveis
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    }, []);

    return (
      <PageBase>
         <h1>Cadastro de Categoria : {values.titulo}</h1>
    
    <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        clearForm();
       }}>

    <FormField
          label ="Nome da Categoria :"
          type="text"
          name ="titulo"
          value ={values.titulo}
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
                <li key={`${categoria.titulo}${indice}`}>
                  {categoria.titulo}
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