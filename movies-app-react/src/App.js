import './App.css';
import HomeHeader from './components/homepage/components/header/HeaderHome';
import Movies from './components/homepage/components/Movies/Movies';
import Footer from './components/homepage/components/Footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import React , { Component } from 'react';
import AddMovie from './components/homepage/components/Movies/components/addMovie/AddMovie'
import DeleteMovie from './components/homepage/components/Movies/components/deleteMovie/DeleteMovie';
import EditMovie from './components/homepage/components/Movies/components/editMovie/EditMovie';

class App extends Component {

  constructor() {
    super();
    this.state = {
      genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
      movies: [
      {cover: 'pulpFiction', title: 'Pulp Fiction', genre: 'Action & Adventure', year: '2004', rating: 7.2, runtime: "1h 47min", description: 'Great Movie'},
      {cover: 'bohemian', title: 'Bohemian Rhapsody', genre: 'Drama, Biography, Music', year: '2003', rating: 6.2, runtime: "2h 12min", description: 'Great Movie'},
      {cover: 'killBill', title: 'Kill Bill: Vol 2', genre: 'Oscar winning movie', year: '1994', rating: 5.3, runtime: "1h 15min", description: 'Great Movie'},
      {cover: 'avengers', title: 'Avengers: War of Infinity', genre: 'Action & Adventure', year: '2004', rating: 8.4, runtime: "2h 51min", description: 'Great Movie'},
      {cover: 'incveption', title: 'Inception', genre: 'Action & Adventure', year: '2003', rating: 3.8, runtime: "3h 02min", description: 'Great Movie'},
      {cover: 'dogs', title: 'Reservoir dogs', genre: 'Oscar winning movie', year: '1994', rating: 4.2, runtime: "2h 20min", description: 'Great Movie'}
      ],
      showingAddMovieModal: false,
      showingEditMovieModal: false,
      showingDeleteMovieModal: false,
      choosenMovie: null
    } 
  }

  toggleAddMovieModal = (e) => {
    this.setState(prevState => ({
        showingAddMovieModal: !prevState.showingAddMovieModal
    }))
  }
  toggleEditMovieModal = (e) => {
    let movie;

    movie = e ? this.state.movies.find((el) => el.title === e.title) : null;
    
    this.setState(prevState => ({
      showingEditMovieModal: !prevState.showingEditMovieModal,
      choosenMovie: movie
    }));

  }
  toggleDeleteMovieModal = (e) => {
      this.setState(prevState => ({
        showingDeleteMovieModal: !prevState.showingDeleteMovieModal
      }))
  }

  render() {
    const { movies, genres, choosenMovie} = this.state;
    return (
      <>
        <HomeHeader toggleAddMovieModal={this.toggleAddMovieModal}></HomeHeader>
        <ErrorBoundary>
          <Movies movies={movies}  genres={genres} toggleEditMovieModal={this.toggleEditMovieModal} toggleDeleteMovieModal={this.toggleDeleteMovieModal} ></Movies>
        </ErrorBoundary>
        {this.state.showingAddMovieModal && <AddMovie toggleAddMovieModal={this.toggleAddMovieModal}></AddMovie>}
        {this.state.showingDeleteMovieModal && <DeleteMovie toggleDeleteMovieModal={this.toggleDeleteMovieModal}></DeleteMovie>}
        {this.state.showingEditMovieModal && <EditMovie choosenMovie={choosenMovie} toggleEditMovieModal={this.toggleEditMovieModal}></EditMovie>}
        <Footer></Footer>
      </>
    );
  }
}

export default App;
