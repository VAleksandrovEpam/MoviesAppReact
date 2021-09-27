import './Navbar.css';

function Navbar(props) {
    return (
        <>
        <nav>
            <ul>
               {props.genres.map((genre, index) => (
                   <li key={index}>{genre}</li>
               ))}
            </ul>
        </nav>
        </>
    )
}

export default Navbar;