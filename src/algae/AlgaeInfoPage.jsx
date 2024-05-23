import './AlgaeInfoPage.scss'
import NavBar from "../navbar/NavBar.jsx";
import AlgaeInfoCard from "./AlgaeInfoCard.jsx";

function AlgaeInfoPage() {
    return (
        <div className="algae-info-page">
            <NavBar/>
            <div className="algae-info-grid-container">
                <img src="/green_algae.jpg" alt="" className="algae-info-img"/>
                <div className="algae-info-grid">
                    <AlgaeInfoCard
                        title="Leading oxygen producer"
                        body="Algae makes up 70% of Earth's oxygen. However, its most impressive ability is its efficient
                        usage of photosynthesis. Microalgae can fix carbon dioxide 10-50 times more
                         efficiently than terrestrial plants. Under optimal conditions, microalgae can achieve carbon
                         dioxide capture efficiencies as high as 80% to 99%."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Mighty microorganism"
                        body="Algae has a myriad of practical applications, such as fuel, fertilizer, food, animal feed,
                         cosmetic products, and bioplastics."
                    ></AlgaeInfoCard>
                    <AlgaeInfoCard
                        title="Not all is good"
                        body="Algal bloom is a dangerous phenomenon where once species of algae takes over a body of
                        water, depriving it of nutrients and sunlight. They can be caused by a variety of factors, from
                        fertilizer runoff or animal feces to warmer water temperatures."
                    ></AlgaeInfoCard>
                </div>
            </div>
        </div>
    )
}

export default AlgaeInfoPage