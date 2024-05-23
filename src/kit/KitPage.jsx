import './KitPage.scss'
import NavBar from "../navbar/NavBar.jsx";
import {useEffect, useRef} from "react";
import KitDesign from "./KitDesign.jsx";

function KitPage() {
    const kitBackground = useRef(null);

    useEffect(() => {
        if (kitBackground.current) {
            if (window.scrollY < kitBackground.current.offsetTop) {
                kitBackground.current.classList.remove("kit-background-sticky");
            } else {
                kitBackground.current.classList.add("kit-background-sticky");
            }
        }
    });

    return (
        <div className="kit-page">
            <NavBar/>
            <div className="kit-container">
                <div className="kit-background" ref={kitBackground}></div>
                <div className="video-container">
                    <video className="video-player" controls src="https://www.youtube.com/watch?v=VHoNVuh24hc"></video>
                </div>
                <div className="design-container">
                    <div className="design-title">Design</div>
                    <div className="design-grid">
                        <KitDesign img="" title="Glass container" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                        <KitDesign img="" title="Glass container" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KitPage