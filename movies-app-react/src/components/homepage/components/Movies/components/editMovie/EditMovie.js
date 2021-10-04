import React from "react";
import "../../../../../../styles/styles.css";
import "../AddEditMovie.css";

class EditMovie extends React.PureComponent {
  toggleEditMovieModal = (e) => {
        this.props.toggleEditMovieModal();
    }

  render() {
    return (
      <>
        <aside className="addMovieModal">
          <h1 className="modal_title">EDIT MOVIE</h1>
          <form>
            <fieldset>
              <label htmlFor="movie_title">TITLE</label>
              <input
                id="movie_title"
                className="large_input"
                type="text"
                placeholder="Select Title"
                value={this.props.choosenMovie.title}
              />
              <label htmlFor="movie_date">RELEASE DATE</label>
              <input
                id="movie_date"
                className="small_input"
                type="date"
                placeholder="Select Date"
                value={this.props.choosenMovie.year}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="movie_url">MOVIE URL</label>
              <input
                id="movie_url"
                className="large_input"
                type="text"
                placeholder="Select Title"
                value={this.props.choosenMovie.cover}
              />
          
              <label htmlFor="movie_rating">RATING</label>
              <input
                id="movie_rating"
                className="small_input"
                type="text"
                placeholder="Select Title"
                value={this.props.choosenMovie.rating}
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
                value={this.props.choosenMovie.runtime}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="movie_overview">OVERVIEW</label>
              <textarea
                id="movie_overview"
                placeholder="Movie description"
                value={this.props.choosenMovie.description}
              ></textarea>
            </fieldset>

            <button className="submit_btn">SUBMIT</button>
            <button className="reset_btn">RESET</button>
        
          </form>
          <button className="close_btn" onClick={this.toggleEditMovieModal}>&times;</button>
        </aside>
      </>
    );
  }
}

export default EditMovie;
