import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="Barbershop" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Classic Cuts Barbershop has been serving the community for over a decade,
                offering the best haircuts, beard trims, and personalized grooming experiences.
                Our team of experienced barbers is dedicated to making you look and feel your
                best every time you visit.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Expert barbers with years of experience</li>
                    <li>Relaxing and welcoming atmosphere</li>
                    <li>Top-quality grooming products</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Convenient booking system</li>
                    <li>Customized grooming services for every client</li>
                    <li>Competitive pricing and great value</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
