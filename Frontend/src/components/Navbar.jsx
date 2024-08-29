import React, { useState } from "react";
import "../index.css";
import Lottie from "lottie-react";
import addtocartanime from "../Animations/addtocartanime.json";
import favourites from "../Animations/favouritesanime.json";

function Navbar() {
    const [isHoveredAddToCart, setIsHoveredAddToCart] = useState(false);
    const [isHoveredFavourites, setIsHoveredFavourites] = useState(false);

    const handleMouseEnterAddToCart = () => {
        setIsHoveredAddToCart(true);
    };

    const handleMouseLeaveAddToCart = () => {
        setIsHoveredAddToCart(false);
    };

    const handleMouseEnterFavourites = () => {
        setIsHoveredFavourites(true);
    };

    const handleMouseLeaveFavourites = () => {
        setIsHoveredFavourites(false);
    };


    return (
        <div>
            <nav className="navbar">
                <p className="logo">Fashion Today</p>
                <div className="dropdown">
                    <button className="dropbtn">Today's Top Deals &#9660;</button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                        <a href="#">Link 5</a>
                        <a href="#">Link 6</a>
                    </div>
                </div>
                <a
                    href="#"
                    className="other-btn first"
                    onMouseEnter={handleMouseEnterAddToCart}
                    onMouseLeave={handleMouseLeaveAddToCart}
                >
                    <Lottie
                        className="lottie-animation"
                        animationData={addtocartanime}
                        play={isHoveredAddToCart}
                        loop={isHoveredAddToCart}
                    />
                </a>
                <a
                    href="#"
                    className="other-btn"
                    onMouseEnter={handleMouseEnterFavourites}
                    onMouseLeave={handleMouseLeaveFavourites}
                >
                    <Lottie
                        className="lottie-animation-favourites"
                        animationData={favourites}
                        play={isHoveredFavourites}
                        loop={isHoveredFavourites}
                    />
                </a>
                <a href="#" className="other-btn">Help ?</a>
                <button className="login-btn other-btn">Login/Sign Up</button>

            </nav>
            <hr />
        </div>
    );
}

export default Navbar;
