import React from 'react';
import PageBase from '../../../components/PageBase';
import {Link} from 'react-router-dom';


function CadastroVideo(){
    return (
      <PageBase>
         <h1>Cadastro de Video</h1>

           <Link to="/cadastro/categoria">
             Cadastrar Categoria
           </Link>
      </PageBase>
    )
  }

  export default CadastroVideo;