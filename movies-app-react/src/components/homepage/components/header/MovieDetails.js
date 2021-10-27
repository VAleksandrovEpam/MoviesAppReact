import "./HeaderHome.css";
import React from "react";

const MovieDetails = (props) => {
  return (
    <>
      <header className="container">
        <div className="movie_details">
          <h4 className="prime_text">
            <span>netflix</span>roulette
          </h4>
          <img
            className="image_details"
            src={props.choosenMovie.cover}
            alt="cover"
          ></img>
          <div className="title_rating">
            <h1>{props.choosenMovie.title}</h1>
            <h2>{props.choosenMovie.rating}</h2>
          </div>
          <h6>{props.choosenMovie.genre}</h6>
          <div className="year_duration_wrapper">
            <h4>{props.choosenMovie.year}</h4>
            <h4 className="runtime">{props.choosenMovie.runtime}</h4>
            <p>{props.choosenMovie.description}</p>
          </div>
          <img
            onClick={() => props.selectedMovie({})}
            className="search_oval"
            src={"./Oval.png"}
            alt="searchIcon"
          ></img>
          <img
            className="search_line"
            src={"./Line_2.png"}
            alt="searchIcon"
          ></img>
        </div>
      </header>
    </>
  );
};

export default React.memo(MovieDetails);
