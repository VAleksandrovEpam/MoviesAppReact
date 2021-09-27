import './Movie.css';


function Movie(props) {
    return (
        <>
            <section className="movie_section">
                <img className="background_image" src={`./${props.cover}.png`} alt='Cover'/>
                <p className="title">{props.title}</p>
                <div className="year">{props.year}</div>
                <p className="genre">{props.genre}</p>
            </section>   
        </>
    )
}

export default Movie;