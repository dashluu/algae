import "./Material.scss"
import React from "react";

const Material = ({img, name, description, content}) => {
    return (
        <div className="material-container">
            <div className="img-container">
                <img className="material-img" src="/ideas.jpg" alt=""/>
            </div>
            <div className="info-container">
                <div className="info-wrapper">
                    <div className="name-description-container">{name}. {description}.</div>
                    <div className="content-container">{content}</div>
                </div>
            </div>
        </div>
    )
}

export default Material
