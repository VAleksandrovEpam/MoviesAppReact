import { createStore } from "redux";

const initialState = {
  movies: [],
  sortBy: "",
  movieId: null,
  selectedMovie: null,
  showMenu: false,
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state, action) {
  switch (action.type) {
    case "GET_ALL_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "GET_MOVIES_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "EDIT_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case "SET_MOVIE_ID":
      return {
        ...state,
        movieId: action.payload,
      };
    case "SET_MOVIE":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: action.payload,
      };
    default:
      return state;
  }
}

export const getAllMovies = (movies) => ({
  type: "GET_ALL_MOVIES",
  payload: movies,
});

export const addMovie = (movie) => ({
  type: "ADD_MOVIE",
  payload: movie,
});

export const getMovieBy = (sortBy) => ({
  type: "GET_MOVIES_BY",
  payload: sortBy,
});

export const editMovie = (movie) => ({
  type: "EDIT_MOVIE",
  payload: movie,
});

export const setMovieId = (movieId) => ({
  type: "SET_MOVIE_ID",
  payload: movieId,
});

export const setMovie = (movie) => ({
  type: "SET_MOVIE",
  payload: movie,
});

export const deleteMovie = (movieId) => ({
  type: "DELETE_MOVIE",
  payload: movieId,
});

export const showMenu = (isShowing) => ({
  type: "SHOW_MENU",
  payload: isShowing,
});
