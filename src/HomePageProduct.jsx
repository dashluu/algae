import './HomePageProduct.scss'

function HomePageProduct({title, description}) {
    return (
        <div className="product-container">
            <div className="product-title">{title}</div>
            <div className="product-description">{description} <a href="/kit" className="product-link">Learn more</a>
            </div>
        </div>
    )
}

export default HomePageProduct
