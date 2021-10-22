import React from "react";
import { useFormik } from 'formik';
import "../../../../../../styles/styles.css";
import "../AddEditMovie.css";
import { addMovie } from '../../../../../../redux';
import { useSelector, useDispatch } from 'react-redux';


// budget: 150000000
// genres: (4) ['Animation', 'Adventure', 'Family', 'Comedy']
// id: 269149
// overview: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery."
// poster_path: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg"
// release_date: "2016-02-11"
// revenue: 1023784195
// runtime: 108
// tagline: "Welcome to the urban jungle."
// title: "Zootopia"
// vote_average: 7.7
// vote_count: 6795


const AddMovie = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      release_date: "",
      poster_path: "",
      vote_average: 0,
      genres: [],
      runtime: "",
      overview: ""
    },

   onSubmit(values) {
     console.log(values);
      const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
      };
     fetch('http://localhost:4000/movies', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch(addMovie(data))
      })
   }
  })

  return (
    <>
      <aside className="addMovieModal">
        <h1 className="modal_title">ADD MOVIE</h1>
        
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              className="large_input"
              name="title"
              type="text"
              onChange={formik.handleChange}
              defaultValue={formik.initialValues.title}
            />
            <label htmlFor="release_date">RELEASE DATE</label>
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
            <label htmlFor="poster_path">MOVIE URL</label>
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

            <label htmlFor="vote_average">RATING</label>
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
            <label htmlFor="genres">GENRE</label>
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

            <label htmlFor="runtime">RUNTIME</label>
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
            <label htmlFor="overview">OVERVIEW</label>
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
