import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="card">
          <h3>Joint Tours</h3>
          <p>Explore Thailand with a group of like-minded travelers.</p>
          <p>Price: $200 per person</p>
        </div>
        <div className="card">
          <h3>1-Day Trips</h3>
          <p>Short trips to the most popular destinations in Thailand.</p>
          <p>Price: $50 per person</p>
        </div>
        <div className="card">
          <h3>Free Entrance Places</h3>
          <p>Visit stunning locations with no entrance fees.</p>
          <p>Price: Free</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
