import React from "react";

export const Header = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                 Welcome to Barbershop
                  <span></span>
                </h1>
                <p> Your one-stop shop for a classic cut, beard grooming, and a
                relaxing atmosphere. Come in, unwind, and leave looking fresh.
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Take a Seat, Relax & Enjoy!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
