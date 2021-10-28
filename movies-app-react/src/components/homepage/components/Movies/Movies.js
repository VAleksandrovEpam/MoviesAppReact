import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import "./Movies.css";
import { useLocation, useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from '../../../../redux';

const Movies = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  let { searchParam } = useParams();
  // let url = "http://localhost:4000/movies";
  const movies = useSelector((state) => state.movies);
  const sortBy = useSelector((state) => state.sortBy);
  // if (sortBy) {
  //   url = `http://localhost:4000/movies?sortBy=${sortBy}`;
  // }
  // useGetMovies(url, [sortBy]);

  const getMoviesBySearch = (url, search) => {
    const body = {
      search: "",
    };
    fetch(`${url}?search=${search}`)
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

  useEffect(() => {
    if (location.pathname === "/search") {
      getMoviesBySearch("http://localhost:4000/movies", "")
    }
    if(searchParam) {
      console.log(searchParam, ' make req');
      getMoviesBySearch("http://localhost:4000/movies", searchParam)
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
