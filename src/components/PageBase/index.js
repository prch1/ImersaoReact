import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled,{css} from 'styled-components';

const Main = styled.main`
background-color: var(--black);
color : var(--white);
flex:1;
padding-top : 50px;
padding-left: 5%;
padding-right: 5%;
${({paddingAll})  => paddingAll & css `
      padding : ${paddingAll};
  `}
`;

function PageBase({ children, paddingAll }){
  
    return (
      <React.Fragment>
        <Menu/>
          <Main paddingAll={paddingAll}>
            {children}
          </Main>
       <Footer/>
     </React.Fragment>
    );
}

export default PageBase;