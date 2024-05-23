import './App.scss'
import NavBar from "./navbar/NavBar.jsx";
import HomePageProduct from "./HomePageProduct.jsx";

function App() {
    return (
        <div className="home-page">
            <NavBar/>
            <div className="product-grid">
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
