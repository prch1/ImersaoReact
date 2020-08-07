import {useState} from 'react';

function useForm(valoresIniciais){
    const [values,setValues] =  useState(valoresIniciais);
    
    function setValue(chave, valor){
      // chave: nome, descrição, em fim objeto que for alterar
       setValues({
          ...values,
          [chave]: valor, // nome:'valor' do input         
       })
    }
  
  function handleChange(infosDoEvento){
     setValue(infosDoEvento.target.getAttribute('name'), 
     infosDoEvento.target.value,
     );
     } 
  
     function clearForm(){
        setValue(valoresIniciais);
     }
  
     return {
       values,
      handleChange,
      clearForm,
     };
  }

export default useForm;