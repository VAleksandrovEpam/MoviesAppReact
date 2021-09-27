import Navbar from './components/navbar/Navbar';
import MovieList from './components/movieList/MovieList';
import './Movies.css';


let genres = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

let movies = [
    {cover: 'pulpFiction', title: 'Pulp Fiction', genre: 'Action & Adventure', year: '2004'},
    {cover: 'bohemian', title: 'Bohemian Rhapsody', genre: 'Drama, Biography, Music', year: '2003'},
    {cover: 'killBill', title: 'Kill Bill: Vol 2', genre: 'Oscar winning movie', year: '1994'},
    {cover: 'avengers', title: 'Avengers: War of Infinity', genre: 'Action & Adventure', year: '2004'},
    {cover: 'incveption', title: 'Inception', genre: 'Action & Adventure', year: '2003'},
    {cover: 'dogs', title: 'Reservoir dogs', genre: 'Oscar winning movie', year: '1994'}
]


function Movies() {
    return (
        <>
        <main className="main_container">
            <Navbar genres={genres}></Navbar>
           <MovieList movies={movies}></MovieList>
        </main>
        </>
    )
}

export default Movies;