import './MovieList.css';
import Movie from './components/Movie';

function MovieList(props) {
    return (
        <>
            <h5 className="movies_count"><span className="counter">{props.movies.length}</span> movies found</h5>
            {props.movies.map((movie, index) => (
                <Movie key={index} cover={movie.cover}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                toggleDeleteMovieModal={props.toggleDeleteMovieModal}>
                </Movie>
            ))}
        </>
    )
}

export default MovieList;