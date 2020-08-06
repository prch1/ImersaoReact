import React, { useEffect, useState} from 'react';
import Menu from '../../components/Menu/index';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import styled from'styled-components';
import PageBase from '../../components/PageBase'
import categoriasRepository from '../../repositories/categorias'

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

function Home(){
  const [dadosIniciais, setDadosIniciais] = useState([]);

 useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
         console.log(err.message);
      });
   },[]);


  return (
   <PageBase passing>

      {dadosIniciais.length ===0 && (<div>Loading...</div>)}

      {dadosIniciais.length >=1 && (
       
       <>   
          <BannerMain
            videoTitle = {dadosIniciais[0].videos[0].titulo}
            url ={dadosIniciais[0].videos[0].url}
            videoDescription ={"Welcome to The New Age"}
          />
       
          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />     
       </>
    
    )}

    </PageBase>
  );
}

export default Home;
