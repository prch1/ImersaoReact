const URL_BACKEND  = window.location.hostname.includes('localhost')
? 'http://localhost:8000' 
: 'https://prflix.herokuapp.com';

export default {
    URL_BACKEND,
};