import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link) `

            border: 1px solid var(--white);
            border-radius: 5px;
            color: var(--white);
            font-size: 16px;
            font-weight: bold;
            padding: 16px 24px;
            text-decoration: none;
            transition: opacity .3s;

          /*  color: var(--white);
            border: 1px solid var(--white);
            box-sizing: border-box;
            cursor: pointer;
            padding: 16px 24px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            outline: none;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            transition: opacity .3s;
            &:hover,
            &:focus {
            opacity: .5;
            } */

            &::hover,
            &:focus{
            opacity: .5
            }

        @media (max-width:800px){
            background-color: var(--primary);
            border:0;
            border-radius:0;
            bottom:0;
            color: var(--white);        
            left:0;
            outline : 0;       
            position : fixed;
            right:0;
            text-align:center;
            
        }    
`;

export default Button;