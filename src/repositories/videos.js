import config from '../config';

const URL_VIDEOS= `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo){
       return  fetch(`${URL_VIDEOS}?_embed=videos`,{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify(objetoDoVideo),
       })
         .then(async(respotaDoServidor) => {      
           if(respotaDoServidor.ok){
               const resposta = await respotaDoServidor.json();
            return resposta;
           }
           
           throw new Error('Não foi possivel obter os dados :(');           
           });   
}

export default{
    create,
};