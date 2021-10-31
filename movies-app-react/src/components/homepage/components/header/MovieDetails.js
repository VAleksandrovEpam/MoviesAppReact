import "./HeaderHome.css";
import React from "react";
import { useSelector } from "react-redux";

const MovieDetails = (props) => {
 const movie = useSelector((state) => state.selectedMovie)
 console.log(movie)
  return (
    <>
      <header className="container">
        <div className="movie_details">
          <h4 className="prime_text">
            <span>netflix</span>roulette
          </h4>
          <img
            className="image_details"
            src={movie.poster_path}
            alt="cover"
          ></img>
          <div className="title_rating">
            <h1>{movie.title}</h1>
            <h2>{movie.vote_average}</h2>
          </div>
          <div className="ratings">
            {movie.genres.map((genre) => (
              <h6>{genre}</h6>
            ))}
          </div>
          <div className="year_duration_wrapper">
            <h4>{movie.release_date}</h4>
            <h4 className="runtime">{movie.runtime}</h4>
            <p>{movie.overview}</p>
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
