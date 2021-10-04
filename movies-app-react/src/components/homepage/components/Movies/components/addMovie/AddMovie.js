import React from "react";
import "../../../../../../styles/styles.css";
import "./AddMovie.css";

class AddMovie extends React.PureComponent {
    toggleAddMovieModal = () => {
        this.props.toggleAddMovieModal();
    }

  render() {
    return (
      <>
        <aside className="addMovieModal">
          <h1 className="modal_title">ADD MOVIE</h1>
          <form>
            <fieldset>
              <label htmlFor="movie_title">TITLE</label>
              <input
                id="movie_title"
                className="large_input"
                type="text"
                placeholder="Select Title"
              />
              <label htmlFor="movie_date">RELEASE DATE</label>
              <input
                id="movie_date"
                className="small_input"
                type="date"
                placeholder="Select Date"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="movie_url">MOVIE URL</label>
              <input
                id="movie_url"
                className="large_input"
                type="text"
                placeholder="Select Title"
              />
          
              <label htmlFor="movie_rating">REATING</label>
              <input
                id="movie_rating"
                className="small_input"
                type="text"
                placeholder="Select Title"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="movie_genre">GENRE</label>
              <select
                className="large_input"
                name="movie_genre"
                id="movie_genre"
                placeholder="Select Genre"
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
              />
            </fieldset>
            <fieldset>
              <label htmlFor="movie_overview">OVERVIEW</label>
              <textarea
                id="movie_overview"
                placeholder="Movie description"
              ></textarea>
            </fieldset>

            <button className="submit_btn">SUBMIT</button>
            <button className="reset_btn">RESET</button>
        
          </form>
          <button className="close_btn" onClick={this.toggleAddMovieModal}>&times;</button>
        </aside>
      </>
    );
  }
}

export default AddMovie;
