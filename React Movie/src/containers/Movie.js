import React,{Component} from 'react';
import {connect} from 'react-redux';


class Movie extends Component{


renderMovies()
{

const MovieData=this.props.movies;

if(MovieData.length==0)
{
    console.log('heya');
   console.log(MovieData);
    return(

        <div>To get details just type the name of movie above ! Happy Searching :)</div>
    );
}
console.log(MovieData);
const results=MovieData.results[0];
const popularity=results.popularity;
const overview=results.overview;

console.log(popularity);
console.log(overview);
return(

<div>

<p1> IMDB ratings :  {popularity}<br/></p1>
<p1><br/>Desription :   {overview}</p1>

</div>


);
}

render()
{



return(
<div>
<div>
<h2>hey there ! Welcome to the best movie site on the web ..:)</h2>
</div>

<div>{this.renderMovies()}</div>

</div>



);
}
}


function mapStateToProps(state)
{
return {movies:state.movies};



}
export default connect(mapStateToProps)(Movie);

