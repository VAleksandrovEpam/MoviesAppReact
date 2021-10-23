import "./Movie.css";
import { setMovieId } from '../../../../../../../redux';
import { useDispatch } from 'react-redux'

function Movie(props) {
  const dispatch = useDispatch();
  const setId = () => {
    dispatch(setMovieId(props.id))
    props.toggleDeleteMovieModal();
  }
  let showMenu = true;
  let buttonContainer = (
    <>
      <button
        onClick={
          (() => props.selectedMovie(props), props.toggleDeleteMovieModal)
        }
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
            onClick={() => props.selectedMovie(props)}
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
