import "./HeaderHome.css";
import React from "react";
import { useHistory, useParams, useLocation } from "react-router";
import { useFormik } from "formik";

const HomeHeader = (props) => {
  const history = useHistory();
  const location = useLocation();
  let path = location.pathname;
  let { searchParam } = useParams();
  const formik = useFormik({
    initialValues: {
      search: searchParam || "",
    },
    onSubmit(values) {
      history.push(location.pathname + '/' + values.search);
      // if(searchParam) {
      //   path = path.slice(0, 7)
      // }
      // history.replace({pathname: `${path}/${values.search}`, state: {isActive: true}});
    },
  });

  return (
    <>
      <header className="container">
        <div className="container-img"></div>
        <h4 className="prime_text">
          <span>netflix</span>roulette
        </h4>
        <h3 onClick={props.toggleAddMovieModal} className="add_movie">
          + ADD MOVIE
        </h3>
        <h2 className="movie-title">FIND YOUR MOVIE</h2>
        <form onSubmit={formik.handleSubmit} className="search_movies">
          <input
            id="search"
            name="search"
            type="text"
            className="search-input"
            placeholder="What do you want to watch?"
            onChange={formik.handleChange}
            defaultValue={formik.initialValues.search}
          />
          <button type="submit" className="search_btn">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default React.memo(HomeHeader);
