import React from "react";
import "./styles.css";

import hero from "./images/hero.jpg";
import bottle from "./images/bottle.jpg";
import user1 from "./images/user1.jpg";
import user2 from "./images/user2.jpg";

export default function App() {
  return (
    <div className="page">

  
      <header className="navbar">
        <div className="logo">🌸 Taaj</div>

        <nav>
          <a>Home</a>
          <a>Shop</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        <div className="icons">
          🔍 🛒
        </div>
      </header>

   
      <section className="hero">
        <div className="hero-left">
          <h1>Discover Your <br/> Signature Scent</h1>
          <p>Luxury fragrance crafted for elegance</p>
          <button>Shop Now</button>
        </div>

        <div className="hero-right">
          <img src={hero} alt="" />
        </div>
      </section>

      <section className="second">
        <div className="second-left">
          <h2>A New Standard Of Luxury Fragrance</h2>
          <p>
            Long-lasting premium perfume crafted with
            rare ingredients.
          </p>
          <button>Buy Now</button>
        </div>

        <div className="second-right">
          <img src={bottle} alt="" />
        </div>
      </section>


      <section className="stats">
        <h3>Supported By Science, Driven By Results</h3>

        <div className="stat-grid">
          <div>
            <h2>30</h2>
            <p>Products</p>
          </div>

          <div>
            <h2>300+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2>18</h2>
            <p>Countries</p>
          </div>
        </div>
      </section>

 
      <section className="testimonials">
        <h2>Client testimonials</h2>

        <div className="cards">
          <div className="card">
            <p>Good smell and longlasting </p>

            <div className="user">
              <img src={user1} />
              <div>
                <b>MS Dhoni</b>
                <span>India</span>
              </div>
            </div>
          </div>

          <div className="card">
            <p>Perfumes smell seems like good like it..!</p>

            <div className="user">
              <img src={user2} />
              <div>
                <b>King Kohli</b>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>🌸 Taaj</h3>
            <p>Taaj Perfumes
            </p>
          </div>

          <div>
            <h4>Hot links</h4>
            <a>Home</a>
            <a>Shop</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>

          <div>
            <h4>More info</h4>
            <a>How it works</a>
            <a>About us</a>
            <a>Terms</a>
          </div>

          <div>
            <h4>Customer care</h4>
            <a>FAQ</a>
            <a>Privacy</a>
            <a>Support</a>
          </div>

        </div>

        <div className="copyright">
          © All rights reserved
        </div>

      </footer>

    </div>
  );
}
