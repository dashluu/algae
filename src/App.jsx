import './App.scss'
import NavBar from "./navbar/NavBar.jsx";
import HomePageProduct from "./HomePageProduct.jsx";
import {useEffect, useRef} from "react";

function App() {
    const homeImg = useRef(null);

    useEffect(() => {
        if (homeImg.current) {
            if (window.scrollY < homeImg.current.offsetTop) {
                homeImg.current.classList.remove("home-img-sticky");
            } else {
                homeImg.current.classList.add("home-img-sticky");
            }
        }
    });

    return (
        <div className="home-page">
            <NavBar/>
            <div className="product-grid">
                <img src="/science_lab.jpg" alt="" className="home-img" ref={homeImg}/>
                <HomePageProduct
                    title={"BioBloom Kit. Grow It Yourself."}
                    description={"Our mission is to develop a product that educates our customers about the benefits of algae. " +
                        "Allowing our customers to grow the algae brings more fun to the process and makes them appreciate " +
                        "algae more. The kit also comes with LED lights enhancing customization capabilities."}>
                </HomePageProduct>
            </div>
        </div>
    )
}

export default App
