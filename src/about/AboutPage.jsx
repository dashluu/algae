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
                    <div className="team-title">Meet the Team</div>
                    <div className="team-grid">
                        <KitDesign img="/jacob.jpg" title="Jacob Zhang"
                                   body=""
                        ></KitDesign>
                        <KitDesign img="/jessie.jpg" title="Jessie Ouyang"
                                   body=""
                        ></KitDesign>
                        <KitDesign img="/amaris.jpg" title="Amaris Carrera"
                                   body=""
                        ></KitDesign>
                        <KitDesign img="/leslie.jpg" title="Leslie Ruiz"
                                   body=""
                        ></KitDesign>
                        <KitDesign img="/trung.jpg" title="Trung Dat Luu"
                                   body=""
                        ></KitDesign>
                    </div>
                </div>
            </div>
            <div className="contact-container">
                <div className="contact-title">Contact</div>
                <div className="contact-body">
                    <div className="email">If you have any questions, email BioBloom.sd@gmail.com</div>
                </div>
            </div>
            <footer><small>Copyright &copy; 2024, BioBloom. All rights reserved.</small></footer>
        </div>
    )
}

export default AboutPage