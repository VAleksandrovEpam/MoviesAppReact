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
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const App = (props) => {
  const [showingAddMovieModal, toogleAddModal] = useState(false);
  const [showingEditMovieModal, toogleEditModal] = useState(false);
  const [showingDeleteMovieModal, toogleDeleteModal] = useState(false);
  const [choosenMovie, setChoosenMovie] = useState({});

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

  const routes = ["/search/:searchParam?", "/search/:searchParam?/:searchGenre?"]

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
             <Route path={route} key={index}> 
             <HomeHeader
               selectedMovie={selectedMovie}
               toggleAddMovieModal={addHandler}
               choosenMovie={choosenMovie}
             ></HomeHeader>
             <ErrorBoundary>
               <Movies
                 toggleAddMovieModal={addHandler}
                 toggleEditMovieModal={editHandler}
                 toggleDeleteMovieModal={deleteHandler}
                 selectedMovie={selectedMovie}
               ></Movies>
             </ErrorBoundary>
             <Footer></Footer>
           </Route>
          ))}
          <Route path="/">
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>
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
    </>
  );
};

export default App;
