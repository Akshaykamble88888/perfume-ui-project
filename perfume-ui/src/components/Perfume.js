import React from "react";
import "../styles/Perfume.css";
import bottle from "../images/bottle.jpg";




function Perfume() {
  return (
    <section className="perfume">
      <div className="perfume-left">
        
  <div className="perfume-inner"></div>
        <h2>A New Standard Of Luxury Fragrance</h2>
        <p>
          Long-lasting premium perfume crafted with
          rare ingredients.
        </p>
        <button>Buy Now</button>
      </div>

      <div className="perfume-right">
        <img src={bottle} alt="bottle" />
      </div>
    </section>
  );
}

export default Perfume;