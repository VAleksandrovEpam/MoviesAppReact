import React from "react";
import "../../../../../../styles/styles.css";


class DeleteMovie extends React.Component {
    toggleDeleteMovieModal = () => {
        this.props.toggleDeleteMovieModal();
    }

    render() {
        return(
            <>
                <aside className="addDeleteModal">
                    <h1> DELETE MOVIE </h1>
                    <p>Are you sure you want to delete this movie?</p>
                    <button className="submit_btn">CONFIRM</button>
                    <button className="close_btn" onClick={this.toggleDeleteMovieModal}>&times;</button>
                </aside>
            </>
        )
    }
}

export default DeleteMovie;