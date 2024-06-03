import './AlgaeInfoPage.scss'
import NavBar from "../navbar/NavBar.jsx";
import AlgaeInfoCard from "./AlgaeInfoCard.jsx";
import {useEffect, useRef} from "react";

function AlgaeInfoPage() {
    const algaeInfoImg = useRef(null);

    useEffect(() => {
        if (algaeInfoImg.current) {
            if (window.scrollY < algaeInfoImg.current.offsetTop) {
                algaeInfoImg.current.classList.remove("algae-info-img-sticky");
            } else {
                algaeInfoImg.current.classList.add("algae-info-img-sticky");
            }
        }
    });

    return (
        <div className="algae-info-page">
            <NavBar/>
            <div className="algae-info-grid-container">
                <img src="/green_algae_2.jpg" alt="" className="algae-info-img" ref={algaeInfoImg}/>
                <div className="algae-info-title">Did you know?</div>
                <div className="algae-info-grid">
                    <AlgaeInfoCard
                        title="Leading Oxygen Producer"
                        body="Algae makes up 70% of Earth's oxygen. However, its most impressive ability is its efficient
                        usage of photosynthesis. Microalgae can fix carbon dioxide 10-50 times more
                         efficiently than terrestrial plants and can achieve carbon dioxide capture efficiencies as
                         high as 80% to 99%."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Mighty Microorganism"
                        body="Algae has a myriad of practical applications, such as fuel, fertilizer, food, animal feed,
                         cosmetic products, and bioplastics."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Not All Is Good"
                        body="Algal bloom is a dangerous phenomenon where once species of algae takes over a body of
                        water, depriving it of nutrients and sunlight. They can be caused by a variety of factors, from
                        fertilizer runoff or animal feces to warmer water temperatures."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Nutrients Provider"
                        body="Algal has many health benefits. A study found that spirulina, a type of algae, can improve
                        anemia in adults. It is also found to provide nutrients, including copper and iron, improve muscle
                        strength and endurance, and support blood sugar control."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Marine Friendly"
                        body="Algal plays an important role for the marine wildlife. For example, Zooxanthellae
                        provide the coral with oxygen and help remove waste through photosynthesis, while the coral
                        shelters the zooxanthellae and provides necessary compounds for photosynthesis. Another example is
                        algae provides nutrient for damselfish while they help protect algae so they can grow
                        more productively."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="UCSD Biotechnology"
                        body="UCSD has tremenedous experience in researching and producing numerous algae-based products,
                        including renewable flip-flops and surfing boards."
                    ></AlgaeInfoCard>
                </div>
            </div>
            <footer>
                <small>Copyright &copy; 2024, BioBloom. All rights reserved.</small>
            </footer>
        </div>
    )
}

export default AlgaeInfoPage