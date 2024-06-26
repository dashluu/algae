import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import "./NavBar.scss";

// Navigation bar component
const NavBar = () => {
    const navbar = useRef(null);

    useEffect(() => {
        if (navbar.current) {
            if (window.scrollY < navbar.current.offsetTop) {
                navbar.current.classList.remove("navbar-sticky");
            } else {
                navbar.current.classList.add("navbar-sticky");
            }
        }
    });

    return (
        <nav className="navbar" ref={navbar}>
            <ul>
                <li>
                    <Link to="/algae/" className="title-nav-link">BioBloom</Link>
                </li>
                <li>
                    <Link to="/algae/algae-info" className="nav-link">
                        <span className="nav-span">Algae</span>
                    </Link>
                </li>
                <li>
                    <Link to="/algae/kit" className="nav-link">
                        <span className="nav-span">DIY Kit</span>
                    </Link>
                </li>
                <li>
                    <Link to="/algae/about" className="nav-link">
                        <span className="nav-span">About</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
