import "./App.css";
import HomeHeader from "./components/homepage/components/header/HeaderHome";
import Movies from "./components/homepage/components/Movies/Movies";
import Footer from "./components/homepage/components/Footer/Footer";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import React, { useState } from "react";
import AddMovie from "./components/homepage/components/Movies/components/addMovie/AddMovie";
import DeleteMovie from "./components/homepage/components/Movies/components/deleteMovie/DeleteMovie";
import EditMovie from "./components/homepage/components/Movies/components/editMovie/EditMovie";
import { useHttp } from './components/hooks/http';

const App = (props) => {

  const [movies] = useHttp('FakeURL', []);
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
      <HomeHeader selectedMovie = {selectedMovie} toggleAddMovieModal={addHandler} choosenMovie = {choosenMovie}></HomeHeader>
      <ErrorBoundary>
        <Movies
          movies={movies}
          genres={genres}
          toggleEditMovieModal={editHandler}
          toggleDeleteMovieModal={deleteHandler}
          selectedMovie = {selectedMovie}
        ></Movies>
      </ErrorBoundary>
      {showingAddMovieModal && (
        <AddMovie toggleAddMovieModal={addHandler}></AddMovie>
      )}
      {showingDeleteMovieModal && (
        <DeleteMovie
          toggleDeleteMovieModal={deleteHandler}
        ></DeleteMovie>
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
