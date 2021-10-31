import "./Navbar.css";
import { getMovieBy, getAllMovies } from "../../../../../../redux";
import { useDispatch } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  let path = location.pathname
  let { searchParam, searchGenre } = useParams();

  const filterByGenre = (e, genre) => {
    if(location.pathname.includes('genre')) {
        let index = path.indexOf('genre');
        path = path.slice(0,index + 5);
        history.replace({ pathname: `${path}/${genre}`, state:{isActive: true}});
    } else {
        history.replace({ pathname: `${location.pathname}/${searchParam ? searchParam + '/' : ''}genre/${genre}`, state:{isActive: true}});
    }
  };

  console.log(searchParam, ' searchParam ', searchGenre, ' genre')

  const getMovieByGenre = (url) => {
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
  }

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
            <li onClick={(event) => filterByGenre(event, genre)} key={index}>
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
