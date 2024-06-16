import React from 'react';
import './explain.css';

const Explain = () => {
  return (
    <div className="container">
      <section  className="hero"> </section>
      <section  className="services"> 
        <div className="servicesheader">
            <div className="col"></div>
            <div className="col">
                <h1>Services</h1>
            </div>
        </div>
        <div className="service">
            <div className="serviceinfo">
                <h1>Loremp Ipsum</h1>
                <p>Loremp Ipsum</p>
            </div>
            <div className="serviceimg">
                <div className="img">
                <img src="/images/1.jpg" alt="Description" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Explain;