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
                    <video className="video-player" controls src="https://www.youtube.com/watch?v=VHoNVuh24hc"
                           onMouseEnter={(e) => {
                               e.currentTarget.classList.add("video-player-hover");
                           }}

                           onMouseLeave={(e) => {
                               e.currentTarget.classList.remove("video-player-hover");
                           }}
                    ></video>
                </div>
                <div className="design-container">
                    <div className="design-title">Design</div>
                    <div className="design-grid">
                        <KitDesign img="" title="Glass Container"
                                   body="Glass containers serve as the primary vessels for cultivating algae. Their
                                   transparency allows for easy observation and monitoring of algae growth, while their
                                   non-reactive nature ensures a suitable environment for algae cultivation without
                                   contamination."
                        ></KitDesign>
                        <KitDesign img="" title="3D Printed Lid" body="3D printed cover acts as protective barriers for
                        the algae cultivation containers, shielding them from external contaminants and maintaining
                        optimal growing conditions. It also helps regulate temperature and humidity levels, promoting
                        consistent algae growth and productivity."
                        ></KitDesign>
                        <KitDesign img="" title="Algae Culture Kit" body="Algae culture kit and fertilizer are essential
                        for initiating algae cultivation and serve as the starting point for algae growth. By providing
                        high-quality algae, the project ensures successful cultivation and robust algae production."
                        ></KitDesign>
                        <KitDesign img="" title="LED Lights" body="LED lights serve as a way to decorate the algae box.
                        LED lights provide aesthetic appeal to the algae cultivation setup, enhancing its visual appeal
                        and educational value."
                        ></KitDesign>
                    </div>
                </div>
                <div className="instruction-container">
                    <div className="instruction-title">Instructions</div>
                </div>
            </div>
        </div>
    )
}

export default KitPage