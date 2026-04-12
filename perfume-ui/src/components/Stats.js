import React from "react";
import "../styles/Stats.css";

function Stats() {
  return (
    <section className="stats">
      <h2>Supported By Science, Driven By Results</h2>

      <div className="stats-box">
        <div>
          <h3>30</h3>
          <p>Products</p>
        </div>

        <div>
          <h3>300+</h3>
          <p>Customers</p>
        </div>

        <div>
          <h3>18</h3>
          <p>Countries</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;