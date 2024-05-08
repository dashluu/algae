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
                    <Link to="/" className="title-nav-link">BioBloom</Link>
                </li>
                <li>
                    <Link to="/materials" className="nav-link">
                        <span className="nav-span">Mission</span>
                    </Link>
                </li>
                <li>
                    <Link to="/materials" className="nav-link">
                        <span className="nav-span">Materials</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
