import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import "./Movies.css";
import { useLocation, useHistory } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from '../../../../redux';

const Movies = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  // let url = "http://localhost:4000/movies";
  const movies = useSelector((state) => state.movies);
  const sortBy = useSelector((state) => state.sortBy);
  // if (sortBy) {
  //   url = `http://localhost:4000/movies?sortBy=${sortBy}`;
  // }
  // useGetMovies(url, [sortBy]);

  useEffect(() => {
    if (location.pathname === "/") {
      history.push("search");
    }
    if (location.pathname === "/search") {
      const body = {
        search: "",
      };
      console.log('get data')
      fetch("http://localhost:4000/movies?search=")
      .then(response => {
        if(!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        dispatch(getAllMovies(data.data))
      })  
      .catch(err => {
        console.log(err)
      })
    }
  }, [location.pathname]);

  return (
    <>
      <main className="main_container">
        <Navbar genres={props.genres}></Navbar>
        <MovieList
          selectedMovie={props.selectedMovie}
          toggleEditMovieModal={props.toggleEditMovieModal}
          toggleDeleteMovieModal={props.toggleDeleteMovieModal}
          movies={movies}
        ></MovieList>
      </main>
    </>
  );
};

export default Movies;
