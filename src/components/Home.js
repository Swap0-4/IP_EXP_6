import React, { useState } from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [avgPackage] = useState(4.5);

  const handleClick = () => {
    alert(`Average Package is ${avgPackage} LPA!`);
  };

  return (
    <div className="home-container">
      <h1>Welcome to VESIT College</h1>
      <p className="average-package">
        Our average package is <strong>{avgPackage} LPA</strong>.
      </p>
      <button className="button" onClick={handleClick}>
        Show Average Package
      </button>
    </div>
  );
};

export default Home;
