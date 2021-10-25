import React from "react";
import { useFormik } from 'formik';
import "../../../../../../styles/styles.css";
import "../AddEditMovie.css";
import { addMovie } from '../../../../../../redux';
import { useDispatch } from 'react-redux';
import validationSchema from '../validation';

const AddMovie = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      release_date: "",
      poster_path: "",
      vote_average: "",
      genres: [],
      runtime: "",
      overview: ""
    },
    validationSchema,
   onSubmit(values) {
      const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
      };
     fetch('http://localhost:4000/movies', requestOptions)
      .then(response => response.json())
      .then(data => {
        dispatch(addMovie(data))
      })
   },
   validator() {
     return {}
   }
  })

  return (
    <>
      <aside className="addMovieModal">
        <h1 className="modal_title">ADD MOVIE</h1>
        
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <label htmlFor="title">TITLE {formik.errors.title && formik.touched.title && (
            <span className="error">{formik.errors.title}</span>
          )}</label>
            <input
              id="title"
              className="large_input"
              name="title"
              type="text"
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.title}
            />
            <label htmlFor="release_date">RELEASE DATE {formik.errors.release_date && formik.touched.release_date && (
            <span className="error">{formik.errors.release_date}</span>
          )}</label>
            <input
              id="release_date"
              className="small_input"
              type="date"
              name="release_date"
              placeholder="Select Date"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.release_date}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="poster_path">MOVIE URL {formik.errors.poster_path && formik.touched.poster_path && (
            <span className="error">{formik.errors.poster_path}</span>
          )}</label>
            <input
              id="poster_path"
              className="large_input"
              type="text"
              name="poster_path"
              placeholder="Select Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.poster_path}
            />

            <label htmlFor="vote_average">RATING {formik.errors.vote_average && formik.touched.vote_average && (
            <span className="error">{formik.errors.vote_average}</span>
          )}</label>
            <input
              id="vote_average"
              className="small_input"
              type="number"
              name="vote_average"
              placeholder="Select Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.vote_average}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="genres">GENRE {formik.errors.genres && formik.touched.genres && (
            <span className="error">{formik.errors.genres}</span>
          )}</label>
            <select
              className="large_input"
              name="genres"
              id="genres"
              multiple={true}
              placeholder="Select Genre"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.genres}
            >
              <option value={['horror']}>Horror</option>
              <option value={['action']}>Action</option>
              <option value={['drama']}>Drama</option>
            </select>

            <label htmlFor="runtime">RUNTIME {formik.errors.runtime && formik.touched.runtime && (
            <span className="error">{formik.errors.runtime}</span>
          )}</label>
            <input
              id="runtime"
              className="small_input"
              type="number"
              name="runtime"
              placeholder="Select Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.runtime}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="overview">OVERVIEW {formik.errors.overview && formik.touched.overview && (
            <span className="error">{formik.errors.overview}</span>
          )}</label>
            <textarea
              id="overview"
              name="overview"
              placeholder="Movie description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.overview}
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
