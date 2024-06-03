import "./KitDesign.scss"
import React from "react";

const KitDesign = ({img, title, body}) => {
    return (
        <div className="design-container">
            <div className="img-container">
                <img className="design-img" src={img} alt=""/>
            </div>
            <div className="description-container">
                <div className="description-title">{title}</div>
                <div className="description-body">{body}</div>
            </div>
        </div>
    )
}

export default KitDesign
