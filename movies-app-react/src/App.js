import './App.css';
import HomeHeader from './components/homepage/components/header/HeaderHome';
import Movies from './components/homepage/components/Movies/Movies';
import Footer from './components/homepage/components/Footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import React , { Component } from 'react';
import AddMovie from './components/homepage/components/Movies/components/addMovie/AddMovie'
import DeleteMovie from './components/homepage/components/Movies/components/deleteMovie/DeleteMovie';

class App extends Component {

  constructor() {
    super();
    this.state = {
      genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
      movies: [
      {cover: 'pulpFiction', title: 'Pulp Fiction', genre: 'Action & Adventure', year: '2004', rating: 7.2, runtime: "1h 47min"},
      {cover: 'bohemian', title: 'Bohemian Rhapsody', genre: 'Drama, Biography, Music', year: '2003', rating: 6.2, runtime: "2h 12min"},
      {cover: 'killBill', title: 'Kill Bill: Vol 2', genre: 'Oscar winning movie', year: '1994', rating: 5.3, runtime: "1h 15min"},
      {cover: 'avengers', title: 'Avengers: War of Infinity', genre: 'Action & Adventure', year: '2004', rating: 8.4, runtime: "2h 51min"},
      {cover: 'incveption', title: 'Inception', genre: 'Action & Adventure', year: '2003', rating: 3.8, runtime: "3h 02min"},
      {cover: 'dogs', title: 'Reservoir dogs', genre: 'Oscar winning movie', year: '1994', rating: 4.2, runtime: "2h 20min"}
      ],
      showingAddMovieModal: false,
      showingEditMovieModal: false,
      showingDeleteMovieModal: false
    } 
  }

  toggleAddMovieModal = (e) => {
    this.setState(prevState => ({
        showingAddMovieModal: !prevState.showingAddMovieModal
    }))
  }
  toggleEditMovieModal = (e) => {
    this.setState(prevState => ({
      showingEditMovieModal: !prevState.showingEditMovieModal
    }))
  }
  toggleDeleteMovieModal = (e) => {
      this.setState(prevState => ({
        showingDeleteMovieModal: !prevState.showingDeleteMovieModal
      }))
    }

  render() {
    const { movies, genres} = this.state;
    return (
      <>
        <HomeHeader toggleAddMovieModal={this.toggleAddMovieModal}></HomeHeader>
        <ErrorBoundary>
          <Movies movies={movies}  genres={genres} toggleDeleteMovieModal={this.toggleDeleteMovieModal} ></Movies>
        </ErrorBoundary>
        {this.state.showingAddMovieModal && <AddMovie toggleAddMovieModal={this.toggleAddMovieModal}></AddMovie>}
        {this.state.showingDeleteMovieModal && <DeleteMovie toggleDeleteMovieModal={this.toggleDeleteMovieModal}></DeleteMovie>}
        <Footer></Footer>
      </>
    );
  }
}

export default App;
