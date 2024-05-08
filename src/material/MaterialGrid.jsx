import "./MaterialGrid.scss"
import {useLoaderData} from "react-router-dom";
import NavBar from "../navbar/NavBar.jsx";
import Material from "./Material.jsx";

async function fetchMaterials() {
    try {
        const response = await fetch("http://localhost:8000/materials");

        if (!response.ok) {
            throw new Error("Failed to fetch data.");
        }

        const materialData = await response.json();
        const materials = [];

        for (let i = 0; i < materialData.length; i++) {
            materials.push(
                <Material key={materialData[i].name}
                          img={materialData[i].img}
                          name={materialData[i].name}
                          description={materialData[i].description}
                          content={materialData[i].content}
                />
            );
        }

        return materials;
    } catch (error) {
        console.error(error);
    }
}

export async function loader() {
    const materials = await fetchMaterials();
    return {materials};
}

function MaterialGrid() {
    const {materials} = useLoaderData();

    return (
        <div className="material-page">
            <NavBar/>
            <div className="material-grid">
                {materials}
            </div>
        </div>
    )
}

export default MaterialGrid
