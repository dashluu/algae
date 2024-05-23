import './HomePageProduct.scss'

function HomePageProduct({title, description}) {
    return (
        <div className="product-container">
            <div className="product-title">{title}</div>
            <div className="product-description">{description}</div>
        </div>
    )
}

export default HomePageProduct
