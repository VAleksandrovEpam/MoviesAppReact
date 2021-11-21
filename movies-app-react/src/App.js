import './App.css';
import HomeHeader from './components/homepage/components/header/HeaderHome';
import Movies from './components/homepage/components/Movies/Movies';
import Footer from './components/homepage/components/Footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import React , { useState } from 'react';
import AddMovie from './components/homepage/components/Movies/components/addMovie/AddMovie'
import DeleteMovie from './components/homepage/components/Movies/components/deleteMovie/DeleteMovie';
import EditMovie from './components/homepage/components/Movies/components/editMovie/EditMovie';

const App = props => {

  const [showingAddMovieModal, toogleAddModal] = useState(false);
  const [showingEditMovieModal, toogleEditModal] =  useState(false);
  const [showingDeleteMovieModal, toogleDeleteModal] = useState(false);
  const [choosenMovie, setChoosenMovie] = useState(null);

  const [genres, setGenres] = useState(['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']);

  const  [movies, setMovies] = useState([
    {cover: 'pulpFiction', title: 'Pulp Fiction', genre: 'Action & Adventure', year: '2004', rating: 7.2, runtime: "1h 47min", description: 'Great Movie'},
    {cover: 'bohemian', title: 'Bohemian Rhapsody', genre: 'Drama, Biography, Music', year: '2003', rating: 6.2, runtime: "2h 12min", description: 'Great Movie'},
    {cover: 'killBill', title: 'Kill Bill: Vol 2', genre: 'Oscar winning movie', year: '1994', rating: 5.3, runtime: "1h 15min", description: 'Great Movie'},
    {cover: 'avengers', title: 'Avengers: War of Infinity', genre: 'Action & Adventure', year: '2004', rating: 8.4, runtime: "2h 51min", description: 'Great Movie'},
    {cover: 'incveption', title: 'Inception', genre: 'Action & Adventure', year: '2003', rating: 3.8, runtime: "3h 02min", description: 'Great Movie'},
    {cover: 'dogs', title: 'Reservoir dogs', genre: 'Oscar winning movie', year: '1994', rating: 4.2, runtime: "2h 20min", description: 'Great Movie'}
    ]);


    const editHandler = () => {
      toogleEditModal(!showingEditMovieModal);
    }

    const addHandler = () => {
      toogleAddModal(!showingAddMovieModal);
    }

    const deleteHandler = () => {
      toogleDeleteModal(!showingDeleteMovieModal)
    }

    const selectedMovie = event => {
      setChoosenMovie(event);
      editHandler();
    }

    return (
      <>
        <HomeHeader toggleAddMovieModal={addHandler}></HomeHeader>
        <ErrorBoundary>
          <Movies movies={movies} selectMovie={selectedMovie}  genres={genres} toggleEditMovieModal={editHandler} toggleDeleteMovieModal={deleteHandler} ></Movies>
        </ErrorBoundary>
        {showingAddMovieModal && <AddMovie toggleAddMovieModal={addHandler}></AddMovie>}
        {showingDeleteMovieModal && <DeleteMovie toggleDeleteMovieModal={deleteHandler}></DeleteMovie>}
        {showingEditMovieModal && <EditMovie choosenMovie={choosenMovie} toggleEditMovieModal={editHandler}></EditMovie>}
        <Footer></Footer>
      </>
    );
  }

export default App;
