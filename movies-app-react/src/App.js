import "./App.css";
import HomeHeader from "./components/homepage/components/header/HeaderHome";
import MovieDetails from "./components/homepage/components/header/MovieDetails";
import Movies from "./components/homepage/components/Movies/Movies";
import Footer from "./components/homepage/components/Footer/Footer";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import React, { useState } from "react";
import AddMovie from "./components/homepage/components/Movies/components/addMovie/AddMovie";
import DeleteMovie from "./components/homepage/components/Movies/components/deleteMovie/DeleteMovie";
import EditMovie from "./components/homepage/components/Movies/components/editMovie/EditMovie";
import { useHttp } from "./components/hooks/http";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

const App = (props) => {
  let url = "http://localhost:4000/movies";
  const movies = useSelector((state) => state.movies);
  const sortBy = useSelector((state) => state.sortBy);
  if (sortBy) {
    url = `http://localhost:4000/movies?sortBy=${sortBy}`;
  }
  useHttp(url, [sortBy]);
  const [showingAddMovieModal, toogleAddModal] = useState(false);
  const [showingEditMovieModal, toogleEditModal] = useState(false);
  const [showingDeleteMovieModal, toogleDeleteModal] = useState(false);
  const [choosenMovie, setChoosenMovie] = useState({});

  const [genres, setGenres] = useState([
    "ALL",
    "DOCUMENTARY",
    "COMEDY",
    "HORROR",
    "CRIME",
  ]);

  const editHandler = () => {
    toogleEditModal(!showingEditMovieModal);
  };

  const addHandler = () => {
    toogleAddModal(!showingAddMovieModal);
  };

  const deleteHandler = () => {
    toogleDeleteModal(!showingDeleteMovieModal);
  };

  const selectedMovie = (event) => {
    setChoosenMovie(event);
  };

  

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/search">
            <HomeHeader
              selectedMovie={selectedMovie}
              toggleAddMovieModal={addHandler}
              choosenMovie={choosenMovie}
            ></HomeHeader>
          </Route>
        </Switch>
        {/* <Switch>
          <Route path="/add"> */}
            <ErrorBoundary>
              <Movies
                movies={movies}
                genres={genres}
                toggleAddMovieModal={addHandler}
                toggleEditMovieModal={editHandler}
                toggleDeleteMovieModal={deleteHandler}
                selectedMovie={selectedMovie}
              ></Movies>
            </ErrorBoundary>
          {/* </Route>
        </Switch> */}
      </BrowserRouter>
      {/* <HomeHeader selectedMovie = {selectedMovie} toggleAddMovieModal={addHandler} choosenMovie = {choosenMovie}></HomeHeader>
      <ErrorBoundary>
        <Movies
          movies={movies}
          genres={genres}
          toggleEditMovieModal={editHandler}
          toggleDeleteMovieModal={deleteHandler}
          selectedMovie = {selectedMovie}
        ></Movies>
      </ErrorBoundary> */}
      {showingAddMovieModal && (
        <AddMovie toggleAddMovieModal={addHandler}></AddMovie>
      )}
      {showingDeleteMovieModal && (
        <DeleteMovie toggleDeleteMovieModal={deleteHandler}></DeleteMovie>
      )}
      {showingEditMovieModal && (
        <EditMovie
          choosenMovie={choosenMovie}
          toggleEditMovieModal={editHandler}
        ></EditMovie>
      )}
      <Footer></Footer>
    </>
  );
};

export default App;
