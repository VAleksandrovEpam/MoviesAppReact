import { reducer, initialState } from './redux';

describe("Reducer", () => {
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
    it("changes movies", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: [{name: 'movie'}]}))
        .toEqual({
            movies: [{name: 'movie'}],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes genres", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: ['Action']}))
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
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: "Action"}))
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
    it("changes movieId", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: 123}))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: 123,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: ""
        })
    });
    it("changes selectedMovie", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: {name: "test"}}))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: {name: "test"},
            showMenu: false,
            selectedGenre: ""
        })
    });it("changes showMenu", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: true}))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: true,
            selectedGenre: ""
        })
    });it("changes selectedGenre", () => {
        expect(reducer(initialState, {type: "GET_ALL_MOVIES", payload: "Action"}))
        .toEqual({
            movies: [],
            genres: [],
            sortBy: "",
            movieId: null,
            selectedMovie: null,
            showMenu: false,
            selectedGenre: "Action"
        })
    })
})