import "./HeaderHome.css";
import React, { useEffect, useState } from "react";

function HomeHeader(props) {
  let showDetails = Object.keys(props.choosenMovie).length > 0;
  useEffect(() => {}, [props.choosenMovie]);

  let headerContent = (
    <>
      <div className="container-img"></div>
      <h4 className="prime_text">
        <span>netflix</span>roulette
      </h4>
      <h3 onClick={props.toggleAddMovieModal} className="add_movie">
        + ADD MOVIE
      </h3>
      <h2 className="movie-title">FIND YOUR MOVIE</h2>
      <form className="search_movies">
        <input
          type="text"
          className="search-input"
          placeholder="What do you want to watch?"
        />
        <button type="button" className="search_btn">
          Search
        </button>
      </form>
    </>
  );

  let movieDetaisContent = (
    <>
      <div className="movie_details">
        <h4 className="prime_text">
          <span>netflix</span>roulette
        </h4>
        <img
          className="image_details"
          src={`./${props.choosenMovie.cover}.png`}
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
          <img onClick={() => props.selectedMovie({})} className="search_oval" src={"./Oval.png"} alt="searchIcon"></img>
          <img className="search_line" src={"./Line_2.png"} alt="searchIcon"></img>
      </div>
    </>
  );

  return (
    <>
      <header className="container">
        {showDetails ? movieDetaisContent : headerContent}
      </header>
    </>
  );
}

export default React.memo(HomeHeader);
