import './App.scss'
import NavBar from "./navbar/NavBar.jsx";
import HomePageProduct from "./HomePageProduct.jsx";
import {useEffect, useRef} from "react";
import Config from "./config.js";

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
                <img src={`${Config.url}/product.jpg`} alt="" className="home-img" ref={homeImg}/>
                <HomePageProduct
                    title="BioBloom Kit. Grow It Yourself."
                    description="Our innovative BioBloom Kit is designed to help you grow your own algae right in the
                     classroom or at home. It comes equipped with everything you need to cultivate your own algae,
                     including customizable LED lights.">
                </HomePageProduct>
            </div>
        </div>
    )
}

export default App
