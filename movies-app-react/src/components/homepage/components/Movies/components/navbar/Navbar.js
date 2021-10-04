import './Navbar.css';

function Navbar({genres}) {
    return (
        <>
        <nav>
            <ul className="navbar_links">
               {genres.map((genre, index) => (
                   <li key={index}>{genre}</li>
               ))}
            </ul>
            <form className="sort_movies_form">
                <label htmlFor="sort_movies">SORT BY</label>
                <select name="sort_movies" id="sort_movies">
                    <option value="date">RELEASE DATE</option>
                    <option value="titlte">TITLE</option>
                    <option value="genre">GENRE</option>
                </select>
            </form>
        </nav>
        </>
    )
}

export default Navbar;