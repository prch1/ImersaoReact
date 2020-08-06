import React from 'react';
import PageBase from '../../../components/PageBase';
import {Link} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';

function CadastroVideo(){

  const {handleChange,values} = useForm({

  });

    return (
      <PageBase>
         <h1>Cadastro de Video</h1>

          <form>
              <FormField
                  label ="Nome da Categoria :"
                  type="text"
                  name ="titulo"
                  value ={values.titulo}
                  onChange ={handleChange} 
                />
          </form>
  
           <Link to="/cadastro/categoria">
             Cadastrar Categoria
           </Link>
      </PageBase>
    )
  }

  export default CadastroVideo;