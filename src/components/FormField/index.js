import React from 'react';
import styled from "styled-components";


const Input = styled.input`

`;

function FormField({label,type,name,value,onChange})
{
  const isTextArea = type  ==='textarea'; 
  const tag = isTextArea ? 'textarea' : 'input';
  return (
    <div>
        <label>
            {label} :
          <Input
            as={tag}
            type={type}
            name ={name}
            value ={value}
            onChange ={onChange}
          />
        </label>
    </div>
  )
}

export default FormField;