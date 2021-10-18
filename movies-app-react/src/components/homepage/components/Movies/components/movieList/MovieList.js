import "./MovieList.css";
import Movie from "./components/Movie";

const MovieList = (props) => {
  let content = <p className="loadMovies">Loading Movies....</p>

  if(props.movies && props.movies.length > 0) {
    content = ( <>
      <h5 className="movies_count">
        <span className="counter">{props.movies.length}</span> movies found
      </h5>
      <main className="movie_list_container">
        {props.movies.map((movie, index) => (
          <Movie
            key={index}
            cover={movie.poster_path}
            title={movie.title}
            genres={movie.genres}
            year={movie.release_date}
            rating={movie.vote_average}
            runtime={movie.runtime}
            description={movie.overview}
            toggleEditMovieModal={props.toggleEditMovieModal}
            toggleDeleteMovieModal={props.toggleDeleteMovieModal}
            selectedMovie={props.selectedMovie}
          ></Movie>
        ))}
      </main>
    </>)
  }
  return (
   content
  );
};

export default MovieList;
