import "./Movie.css";
import { setMovieId, setMovie } from '../../../../../../../redux';
import { useDispatch } from 'react-redux'

function Movie(props) {
  const dispatch = useDispatch();
  const setId = () => {
    dispatch(setMovieId(props.id))
    props.toggleDeleteMovieModal();
  }
  const setCurrentMovie = () => {
    dispatch(setMovie(props.choosenMovie))
    props.toggleEditMovieModal();
  }
  let showMenu = true;
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
          <div onClick={() => showMenu = !showMenu} className="dots"></div>
          <img
            onClick={() => dispatch(setMovie(props.choosenMovie))}
            className="background_image"
            src={props.cover}
            alt="Cover"
          />
          {showMenu ? buttonContainer : <></>}
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
