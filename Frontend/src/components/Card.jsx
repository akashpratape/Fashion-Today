import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadinganimation from "../Animations/loadinganimation.json";
import "../index.css";

function truncateDescrition(description, wordLimit) {
    if (!description) return "";         // incase  there is no description return empty string
    const words = description.split(" ");

    if (words.length <= wordLimit) {
        return description;
    }
    return words.slice(0, wordLimit).join(" ") + "..."
}

function Card() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from API from backend
        fetch("/store")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error occurred during data fetching", error));
    }, []);

    return (
        <div>
            {data ? (
                <div className="grid-container">
                    {data.map((item, index) => (
                        <div className="card-container" key={index}>
                            <img 
                                className="card-image" 
                                src={item.image}
                                alt="Product Image" 
                            />
                            <div className="card-content">
                                <p className="card-title">{item.title || "Product name not avilable"}</p>
                                <p className="card-price">${item.price || "Price not availiable"}</p>
                            </div>
                            <div className="card-descript">
                                <p className="card-des">{truncateDescrition(item.description, 50)|| "No description available."}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="animation-container">
                    <p>
                        <Lottie 
                            className="loading-animation"
                            animationData={loadinganimation}
                            play={true}
                            loop={true}
                        />
                    </p>
                </div>
            )}
        </div>
    );
}

export default Card;
