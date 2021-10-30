import "./Navbar.css";
import { getMovieBy, getAllMovies } from "../../../../../../redux";
import { useDispatch } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  let { searchParam } = useParams();

  const filterByGenre = (genre) => {
    let url =
      `http://localhost:4000/movies?search=${searchParam}&filter=${genre}`;
    if(!searchParam) {
        url = `http://localhost:4000/movies?filter=${genre}`
    }
    fetch(url)
    .then(response => {
        if(!response.ok) {
          throw new Error('Failed to fetch.');
        }
        return response.json();
      })
      .then(data => {
        dispatch(getAllMovies(data.data))
      })  
      .catch(err => {
        console.log(err)
      })
  };

  const getMoviesBy = (type) => {
    if (type.target.value === "release_date") {
      dispatch(getMovieBy("release_date"));
    }
    if (type.target.value === "title") {
      dispatch(getMovieBy("title"));
    }
    if (type.target.value === "genre") {
      dispatch(getMovieBy("genre"));
    }
  };
  return (
    <>
      <nav>
        <ul className="navbar_links">
          {props.genres.map((genre, index) => (
            <li onClick={() => filterByGenre(genre)} key={index}>
              {genre}
            </li>
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
  );
};

export default Navbar;
