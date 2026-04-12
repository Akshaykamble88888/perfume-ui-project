import "./Hero.css";
import hero from "./images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Luxury Fragrance<br/>For Modern Women</h1>
        <p>
          Discover premium perfume crafted with elegance and long lasting aroma
          for your daily style.
        </p>

        <button>Explore Now</button>
      </div>

      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </section>
  );
}