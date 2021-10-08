import "./Movie.css";

function Movie(props) {
  return (
    <>
      <section className="movie_section">
        <section className="container_img">
          <div className="dots"></div>
          <img
            onClick={() => props.selectedMovie(props)}
            className="background_image"
            src={`./${props.cover}.png`}
            alt="Cover"
          />
          {/* <button
            onClick={() => props.selectedMovie(props), props.toggleDeleteMovieModal}
            className="edit_btn"
          >
            EDIT MOVIE
          </button> */}
          <button onClick={props.toggleDeleteMovieModal} className="delete_btn">
            DELETE MOVIE
          </button>
        </section>
        <p className="title">{props.title}</p>
        <div className="year">{props.year}</div>
        <p className="genre">{props.genre}</p>
      </section>
    </>
  );
}

export default Movie;
