import React from 'react';
import Menu from '../../components/Menu/index';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from'styled-components';


const AppWrapper = styled.div`
   background-color: var(--grayDark);

   padding-top:5px; /**94px*/

@media (max-width:800px){
  padding-top:5px; /**40px*/
}

@media (max-width:800px){
  padding-top:50px;
}


`;

function Home() {
  return (

  <AppWrapper>
      <Menu />
      <BannerMain
         videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
         url ={dadosIniciais.categorias[0].videos[0].url}
         videoDescription ={"Welcome to The New Age"}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
      </AppWrapper>
  );
}

export default Home;
