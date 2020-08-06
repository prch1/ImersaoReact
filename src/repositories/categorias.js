import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos(){
       return  fetch(`${URL_CATEGORIAS}?_embed=videos`)
         .then(async(respotaDoServidor) => {      
           if(respotaDoServidor.ok){
               const resposta = await respotaDoServidor.json();
            return resposta;
           }
           
           throw new Error('Não foi possivel obter os dados :(');           
           });   
}

export default{
    getAllWithVideos,
};



