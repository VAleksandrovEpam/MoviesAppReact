import React from "react";
import { useFormik } from 'formik';
import "../../../../../../styles/styles.css";
import "../AddEditMovie.css";

const AddMovie = (props) => {

  const formik = useFormik({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      vote_average: '',
      genres: '',
      runtime: '',
      overview: ''
    },
   onSubmit(values) {
     console.log(values)
   }
  })

  return (
    <>
      <aside className="addMovieModal">
        <h1 className="modal_title">ADD MOVIE</h1>
        
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <label htmlFor="movie_title">TITLE</label>
            <input
              id="movie_title"
              className="large_input"
              type="text"
              placeholder="Select Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <label htmlFor="movie_date">RELEASE DATE</label>
            <input
              id="movie_date"
              className="small_input"
              type="date"
              placeholder="Select Date"
              onChange={formik.handleChange}
              value={formik.values.release_date}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="movie_url">MOVIE URL</label>
            <input
              id="movie_url"
              className="large_input"
              type="text"
              placeholder="Select Title"
              onChange={formik.handleChange}
              value={formik.values.poster_path}
            />

            <label htmlFor="movie_rating">REATING</label>
            <input
              id="movie_rating"
              className="small_input"
              type="text"
              placeholder="Select Title"
              onChange={formik.handleChange}
              value={formik.values.vote_average}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="movie_genre">GENRE</label>
            <select
              className="large_input"
              name="movie_genre"
              id="movie_genre"
              placeholder="Select Genre"
              onChange={formik.handleChange}
              value={formik.values.genres}
            >
              <option value="date">Horror</option>
              <option value="titlte">Action</option>
              <option value="genre">Drama</option>
            </select>

            <label htmlFor="movie_runtime">RUNTIME</label>
            <input
              id="movie_runtime"
              className="small_input"
              type="text"
              placeholder="Select Title"
              onChange={formik.handleChange}
              value={formik.values.runtime}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="movie_overview">OVERVIEW</label>
            <textarea
              id="movie_overview"
              placeholder="Movie description"
              onChange={formik.handleChange}
              value={formik.values.overview}
            ></textarea>
          </fieldset>

          <button type="submit" className="submit_btn">SUBMIT</button>
          <button className="reset_btn">RESET</button>
        </form>
        <button className="close_btn" onClick={props.toggleAddMovieModal}>
          &times;
        </button>
      </aside>
    </>
  );
};

export default AddMovie;
