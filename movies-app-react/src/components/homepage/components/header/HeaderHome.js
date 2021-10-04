import './HeaderHome.css';

function HomeHeader(props) {
    return (
        <>
            <header className="container">
                <div className="container-img"></div>
                <h4 className="prime_text">
                    <span>netflix</span>roulette
                </h4>
                <h3 onClick={props.toggleAddMovieModal} className="add_movie">+ ADD MOVIE</h3>
                <h2 className="movie-title">FIND YOUR MOVIE</h2>
                <form className="search_movies">
                    <input type="text" className="search-input" placeholder="What do you want to watch?"/>
                    <button type="button" className="search_btn">Search</button>
                </form>
               
            </header>
        </>
    )
}

export default HomeHeader;