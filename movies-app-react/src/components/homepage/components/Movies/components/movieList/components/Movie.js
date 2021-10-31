import "./Movie.css";
import { setMovieId, setMovie, showMenu } from '../../../../../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router";

function Movie(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let isShowMenu = useSelector((state) => state.showMenu);
  const setId = () => {
    dispatch(setMovieId(props.id));
    props.toggleDeleteMovieModal();
  }

  const selectinMovie = () => {
    history.push(`/movie/${props.choosenMovie.id}`);
    console.log('change url ', location.pathname)
    dispatch(setMovie(props.choosenMovie))
  }

  const setCurrentMovie = () => {
    console.log('clicked')
    dispatch(setMovie(props.choosenMovie))
    props.toggleEditMovieModal();
  }
  const toogleMenu = () => {
    dispatch(showMenu(!isShowMenu))
  }
  let buttonContainer = (
    <>
      <button
        onClick={setCurrentMovie}
        className="edit_btn"
      >
        EDIT MOVIE
      </button>
      <button onClick={
        setId
        } className="delete_btn">
        DELETE MOVIE
      </button>
    </>
  );
  return (
    <>
      <section className="movie_section">
        <section className="container_img">
          <div onClick={toogleMenu} className="dots"></div>
          <img
            onClick={selectinMovie}
            className="background_image"
            src={props.cover}
            alt="Cover"
          />
          {isShowMenu ? buttonContainer : <></>}
        </section>
        <p className="title">{props.title}</p>
        <div className="year">{props.year}</div>
        {props.genres.map((genre, index) => (
          <span key={index} className="genre">
            {genre}
          </span>
        ))}
      </section>
    </>
  );
}

export default Movie;
