import './KitPage.scss'
import NavBar from "../navbar/NavBar.jsx";
import {useEffect, useRef} from "react";
import KitDesign from "./KitDesign.jsx";
import InstructionCard from "./InstructionCard.jsx";
import Config from "../config.js";

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
                <div className="design-container">
                    <div className="design-title">Design</div>
                    <div className="design-grid">
                        <KitDesign img={`${Config.url}/glass_container.jpg`} title="Glass Container"
                                   body="Glass containers serve as the primary vessels for cultivating algae. Their
                                   transparency allows for easy observation and monitoring of algae growth, while their
                                   non-reactive nature ensures a suitable environment for algae cultivation without
                                   contamination."
                        ></KitDesign>
                        <KitDesign img={`${Config.url}/lid.jpg`} title="3D Printed Lid" body="3D printed cover acts as protective barriers for
                        the algae cultivation containers, shielding them from external contaminants and maintaining
                        optimal growing conditions. It also helps regulate temperature and humidity levels, promoting
                        consistent algae growth and productivity."
                        ></KitDesign>
                        <KitDesign img={`${Config.url}/algae_culture_kit.jpg`} title="Algae Culture Kit" body="Algae culture kit and fertilizer are essential
                        for initiating algae cultivation and serve as the starting point for algae growth. By providing
                        high-quality algae, the project ensures successful cultivation and robust algae production."
                        ></KitDesign>
                        <KitDesign img={`${Config.url}/led.jpg`} title="LED Lights" body="LED lights serve as a way to decorate the algae box.
                        LED lights provide aesthetic appeal to the algae cultivation setup, enhancing its visual appeal
                        and educational value."
                        ></KitDesign>
                        <KitDesign img={`${Config.url}/shipping_box.jpg`} title="Shipping Box" body="The shipping box is made of carbon so
                        it is environmentally friendly. It includes a glass container, a lid, an algae culture kit, and
                        LED lights."
                        ></KitDesign>
                    </div>
                </div>
                <div className="instruction-container">
                    <div className="instruction-title">Instructions</div>
                    <div className="instruction-grid">
                        <InstructionCard
                            title="1. Dissolve the salts"
                            body="Pour a bag of salts into a half-liter bottle of drinking water. Shake until it
                            dissolves."
                        ></InstructionCard>
                        <InstructionCard
                            title="2. Add the nutrients"
                            body="Add the entire vial of the nutrients to the bottle of water. This is now your culture
                            media. Store it in a cool dark place."
                        ></InstructionCard>
                        <InstructionCard
                            title="3. Fill the culture flask with culture media"
                            body="Fill to 2/3 full, approximately 50mL."
                        ></InstructionCard>
                        <InstructionCard
                            title="4. Add the inoculum"
                            body="Cap the culture and shake."
                        ></InstructionCard>
                        <InstructionCard
                            title="5. Place in light"
                            body="Dim light for the first 2 days. Avoid direct sunlight (culture can get too hot). A
                            good place to start the culture is next to a light source (a fluorescent bulb) with a timer
                            (12-hour light cycle)."
                        ></InstructionCard>
                        <InstructionCard
                            title="6. Shake as often as you can"
                            body="Give the culture a little mixing at least once daily."
                        ></InstructionCard>
                    </div>
                </div>
            </div>
            <footer><small>Copyright &copy; 2024, BioBloom. All rights reserved.</small></footer>
        </div>
    )
}

export default KitPage