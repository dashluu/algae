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
                        <KitDesign img="" title="Glass container" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                        <KitDesign img="" title="Plastic Lid" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                        <KitDesign img="" title="Algae Culture Kit" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                        <KitDesign img="" title="LED Lights" body="Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        ></KitDesign>
                    </div>
                </div>
                <div className="instruction-container">
                    <div className="instruction-title">Instructions</div>
                    <ol className="instruction-body">
                        <li>
                            <strong>Dissolve the salts</strong>:<br/>Pour a bag of salts into a half-liter bottle of
                            drinking water. Shake until it dissolves.
                        </li>
                        <li>
                            <strong>Add the Nutrients</strong>:<br/>Add the entire vial of the nutrients to the bottle
                            of water. This is now your "culture media". Store it in a cool dark place.
                        </li>
                        <li>
                            <strong>Fill the culture flask with culture media</strong>:<br/>Fill to 2/3 full,
                            approximately 50mL.
                        </li>
                        <li>
                            <strong>Add the inoculum</strong>:<br/>Cap the culture and shake.
                        </li>
                        <li>
                            <strong>Place in light</strong>:<br/>Dim light for the first 2 days. Avoid direct sunlight
                            (culture can get too hot). A good place to start the culture is next to a light source
                            (a fluorescent bulb) with a timer (12-hour light cycle).
                        </li>
                        <li>
                            <strong>Shake as often as you can</strong>:<br/>Give the culture a little mixing at least
                            once daily.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default KitPage