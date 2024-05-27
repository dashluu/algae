import './HomePageProduct.scss'
import {useNavigate} from "react-router-dom";

function HomePageProduct({title, description}) {
    const navigate = useNavigate();

    return (
        <div className="product-container">
            <div className="product-title">{title}</div>
            <div className="product-description">{description}</div>
            <button className="product-button" onClick={() => {
                navigate("/kit")
            }}>Learn more
            </button>
        </div>
    )
}

export default HomePageProduct
