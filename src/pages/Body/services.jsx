// ServicesPage.js
import React from 'react';
import './servicess.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="service-images">
        <img src="https://example.com/salon1.jpg" alt="Salon 1" />
        <img src="https://example.com/salon2.jpg" alt="Salon 2" />
        {/* Add more image URLs as needed */}
      </div>
    </div>
  );
};

export default Services;
