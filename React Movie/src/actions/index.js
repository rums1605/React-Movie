import axios from 'axios';


const API_KEY='876266cc3583ad0d374091aa281d347a';
export const FETCH_MOVIES='FETCH_MOVIES';


export function fetchMovie(movies)
{



console.log(movies);

const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movies}`;

const request=axios.get(url);

console.log(request);


return {

type:FETCH_MOVIES,
payload:request

};

}