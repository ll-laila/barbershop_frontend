import { useState } from "react";
import React from "react";

const Appointment = ()  => {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    appointmentDate: "",
    numberOfPeople: 1,
    serviceType: "",
  });

  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://barbershop-backend-dlbc.onrender.com/appointments/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setAppointmentConfirmed(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };





  return (
    <>
    <div id="appointment" className="container pt-3">
    <div className="section-title text-center">
          <h2>Get Your Appointment</h2>
          <p>
           <hr/>
          </p>
        </div>
      <div className="container">
        {!appointmentConfirmed ? (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    required
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Appointment Date</label>
              <input
                type="date"
                name="appointmentDate"
                className="form-control"
                required
                onChange={handleChange}
                value={formData.appointmentDate}
              />
            </div>
            <div className="form-group">
              <label>Number of People</label>
              <input
                type="number"
                name="numberOfPeople"
                className="form-control"
                min="1"
                required
                onChange={handleChange}
                value={formData.numberOfPeople}
              />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select
                name="serviceType"
                className="form-control"
                required
                onChange={handleChange}
                value={formData.serviceType}
              >
                <option value="">Select Service</option>
                <option value="Haircut">Haircut</option>
                <option value="Beard Trim">Beard Trim</option>
                <option value="Shave">Shave</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Book Appointment
            </button>
          </form>
        ) : (
          <div className="confirmation text-center">
            <h3>Appointment Confirmed</h3>
            <p>
              Thank you for booking your appointment with us! Your appointment is scheduled for {formData.appointmentDate}.
              We will contact you shortly to confirm your booking.
            </p>
          </div>
        )}
      </div>
    </div>
    <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 BARBERSHOP
          </p>
        </div>
      </div>
    </>  
  );
};

export default Appointment;
