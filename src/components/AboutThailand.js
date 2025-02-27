import React from "react";
import "../styles/AboutThailand.css";

const AboutThailand = () => {
  return (
    <div className="about-thailand">
      <h2>About Thailand</h2>
      <p>
        Thailand, known as the "Land of Smiles," is a Southeast Asian country
        famous for its tropical beaches, opulent royal palaces, ancient ruins,
        and ornate temples. From the bustling streets of Bangkok to the serene
        islands of Phuket and Koh Samui, Thailand offers something for every
        traveler.
      </p>
      <div className="image-gallery">
        <img src="/images/thailand-1.jpg" alt="Thailand 1" />
        <img src="/images/thailand-2.jpg" alt="Thailand 2" />
        <img src="/images/thailand-3.jpg" alt="Thailand 3" />
      </div>
    </div>
  );
};

export default AboutThailand;
