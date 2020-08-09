import React, { useEffect, useState} from 'react';
//import Menu from '../../components/Menu/index';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import Footer from '../../components/Footer';
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
    <PageBase paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que"
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
      /> */}

    </PageBase>
  );
}

export default Home;
