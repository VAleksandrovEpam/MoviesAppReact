import './Footer.css';
import { useLocation, useHistory } from "react-router";
import { useEffect } from "react";

function Footer() {
    const location = useLocation();
    const history = useHistory();
    console.log(location.pathname)
    useEffect(() => {
        if (location.pathname === "/") {
            history.push("search");
          }
    }, [location.pathname])
    return (
        <>
            <footer>
                <p className="primary_color"><span>netflix</span>roulette</p>
            </footer>
        </>
    )
}

export default Footer;