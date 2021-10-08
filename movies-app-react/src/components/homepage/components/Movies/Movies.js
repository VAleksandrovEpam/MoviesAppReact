import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import "./Movies.css";

const Movies = (props) => {
  return (
    <>
      <main className="main_container">
        <Navbar genres={props.genres}></Navbar>
        <MovieList
          selectedMovie={props.selectedMovie}
          toggleEditMovieModal={props.toggleEditMovieModal}
          toggleDeleteMovieModal={props.toggleDeleteMovieModal}
          movies={props.movies}
        ></MovieList>
      </main>
    </>
  );
};

export default Movies;
