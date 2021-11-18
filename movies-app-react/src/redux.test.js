import { reducer, initialState,showMenu,selectGenre, setMovie, setMovieId, getAllMovies, getGenres, addMovie, getMovieBy} from './redux';

fdescribe("Reducer", () => {
    it("has a default state", () => {
        expect(reducer(initialState, {type: 'default'})).toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("set movie id", () => {
        expect(reducer(initialState, setMovieId('123'))).toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: '123',
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("get all movies", () => {
        expect(reducer(initialState, getAllMovies([{name: 'test'}]))).toEqual({
            movies: [{name: 'test'}],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes genres", () => {
        expect(reducer(initialState, getGenres(['Action'])))
        .toEqual({
            movies: [],
            genres: ['Action'],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes sortBy", () => {
        expect(reducer(initialState, getMovieBy("Action")))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "Action",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes selectedMovie", () => {
        expect(reducer(initialState, setMovie({name: "test"})))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: {name: "test"},
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes showMenu", () => {
        expect(reducer(initialState, showMenu(true)))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: true,
            selectedGenre: ""
        })
    });
    it("changes selectedGenre", () => {
        expect(reducer(initialState, selectGenre("Action")))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: "Action"
        })
    });
    it("adds movie", () => {
        expect(reducer(initialState, addMovie({name: 'addedMovie'})))
        .toEqual({
            movies: [{name: 'addedMovie'}],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    })
})