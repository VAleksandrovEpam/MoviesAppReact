import "./HeaderHome.css";
import React, { useEffect, useState } from "react";

function HomeHeader(props) {
  // let movie = props.choosenMovie;
  // const movieHandler = props.selectedMovie;
  // console.log(props)
  // const [selectedMovie, movieHandler] = useState(null);
  let showDetails = Object.keys(props.choosenMovie).length > 0;
  useEffect(() => {
    console.log("useEfect");
    console.log(showDetails);
  }, [props.choosenMovie]);

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
      <section className="movie_details">
      <h4 className="prime_text">
        <span>netflix</span>roulette
      </h4>
      <img src={`./${props.choosenMovie.cover}.png`} alt="cover"></img>
      </section>
    </>
  );

  return (
    <>
      <header className="container">{showDetails ? movieDetaisContent : headerContent}</header>
    </>
  );
}

export default HomeHeader;
