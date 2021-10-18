import './Navbar.css';
import { getMovieBy } from '../../../../../../redux';
import { useDispatch } from 'react-redux';
import { useHttp } from '../../../../../hooks/http';

const Navbar = props => {
    const dispatch = useDispatch();
    let url = 'http://localhost:4000/movies';
    useHttp(url, []);
    // const sortMoviesByRating = () => dispatch(getMovieByRating()) 
    const getMoviesBy = (type) => {
        if(type.target.value === 'release_date') {
           dispatch(getMovieBy('release_date'))
        }
        if(type.target.value === 'title') {
           dispatch(getMovieBy('title'))
        }
        if(type.target.value === 'genre') {
           dispatch(getMovieBy('genre'))
        }
    }
    return (
        <>
        <nav>
            <ul className="navbar_links">
               {props.genres.map((genre, index) => (
                   <li key={index}>{genre}</li>
               ))}
            </ul>
            <form className="sort_movies_form">
                <label htmlFor="sort_movies">SORT BY</label>
                <select onChange={getMoviesBy} name="sort_movies" id="sort_movies">
                    <option value="release_date">RELEASE DATE</option>
                    <option value="title">TITLE</option>
                    <option value="genre">GENRE</option>
                </select>
            </form>
        </nav>
        </>
    )
}

export default Navbar;