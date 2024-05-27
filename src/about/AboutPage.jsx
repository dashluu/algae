import KitDesign from "../kit/KitDesign.jsx";
import NavBar from "../navbar/NavBar.jsx";
import './AboutPage.scss'
import {useEffect, useRef} from "react";

function AboutPage() {
    const aboutBackground = useRef(null);

    useEffect(() => {
        if (aboutBackground.current) {
            if (window.scrollY < aboutBackground.current.offsetTop) {
                aboutBackground.current.classList.remove("about-background-sticky");
            } else {
                aboutBackground.current.classList.add("about-background-sticky");
            }
        }
    });

    return (
        <div className="about-page">
            <NavBar/>
            <div className="about-container">
                <div className="about-background" ref={aboutBackground}></div>
                <div className="story-container">
                    <div className="story-title">Why BioBloom Kit?</div>
                    <div className="story-body">
                        We came up with the idea of BioBloom Kit while discussing the massive potential of algae, from
                        jet fuel and cosmetics to fertilizers and gastronomy, but its most impressive feat is its
                        standing as the world’s leading oxygen producer by far. There are many algae products out there.
                        However, what differentiates our product from theirs is its ability to customize using LED
                        lights while being more affordable. This kit is designed to be both educational and fun,
                        providing a practical, interactive way to learn about algae and its benefits. Join the algae
                        revolution today. Grow, learn, and innovate with our BioBloom Kit - because sustainability
                        starts from something small.
                    </div>
                </div>
                <div className="team-container">
                    <div className="team-title">The Team</div>
                    <div className="team-grid">
                        <KitDesign img="" title="Jacob Zhang"
                                   body="CEO, Founder"
                        ></KitDesign>
                        <KitDesign img="" title="Jessie Ouyang"
                                   body="CTO, Founder"
                        ></KitDesign>
                        <KitDesign img="" title="Amaris Carrera"
                                   body="Head of Design, Founder"
                        ></KitDesign>
                        <KitDesign img="" title="Leslie Ruiz"
                                   body="Head of Marketing, Founder"
                        ></KitDesign>
                        <KitDesign img="" title="Trung Dat Luu"
                                   body="Software Engineer, Founder"
                        ></KitDesign>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage