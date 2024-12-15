import React from "react";
export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Services</h2>
          <p>
            We offer top-quality grooming services tailored to your needs. Experience the best in barbering.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <i className="fa fa-group"></i>
            <div className="service-desc">
              <h3>Haircuts</h3>
              <p>Get the latest trends or a classic look with our expert barbers. We offer cuts for all styles and preferences.</p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-group"></i>
            <div className="service-desc">
              <h3>Beard Trims</h3>
              <p>Maintain your beard with a precise trim or a full reshaping for the perfect look every time.</p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-group"></i>
            <div className="service-desc">
              <h3>Shaves</h3>
              <p>Experience a relaxing straight razor shave, designed for the ultimate smooth finish.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};