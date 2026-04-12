import React from "react";
import "../styles/Hero.css";
import hero from "../images/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Discover Your <br /> Signature Scent
        </h1>
        <p>Luxury fragrance crafted for elegance</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-right">
        <img src={hero} alt="perfume" />
      </div>
    </section>
  );
}

export default Hero;