import React from "react";
import "../styles/Testimonials.css";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";

function Testimonials() {
  return (
    <div className="testimonials">

      <h2>Client testimonials</h2>

      <div className="testimonials-box">

        <div className="card">
          <h3>Incredible Experience</h3>
          <p>
          I've been feeling really confident without makeup lately...
          </p>

          <div className="user">
            <img src={user1} alt="user1" />
          
            <div>
              <h4>MS Dhoni</h4>
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Genious products</h3>
          <p>
          I've tried so many things for my skin...
          </p>

          <div className="user">
            <img src={user2} alt="user2" />

            <div>
              <h4>King kohli</h4>
              <span>India</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Testimonials;