import React from "react";
import { deleteMovie } from '../../../../../../redux';
import "../../../../../../styles/styles.css";
import { useSelector, useDispatch } from 'react-redux';

const DeleteMovie = (props) => {
    const dispatch = useDispatch();
    let movieID = useSelector((state) => state.movieId);
    const deleteMovieWithID = (movieID) => {
        fetch(`http://localhost:4000/movies/${movieID}`, {method: "DELETE"})
            .then(data => {
                if(data.ok) {
                    dispatch(deleteMovie(movieID));
                    props.toggleDeleteMovieModal();
                }
            })
    }
        return(
            <>
                <aside className="addDeleteModal">
                    <h1> DELETE MOVIE </h1>
                    <p>Are you sure you want to delete this movie?</p>
                    <button className="submit_btn" onClick={() => {deleteMovieWithID(movieID)}}>CONFIRM</button>
                    <button className="close_btn" onClick={props.toggleDeleteMovieModal}>&times;</button>
                </aside>
            </>
        )

}

export default DeleteMovie;