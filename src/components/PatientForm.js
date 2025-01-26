import React, { useState } from "react";
import "./PatientForm.css";

const PatientForm = () => {
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);

  // Calculate price based on distance
  const calculatePrice = (distance) => {
    const basePrice = 100; // Base fee
    const distanceRate = 5; // Cost per km
    return basePrice + distance * distanceRate;
  };

  const handleDistanceChange = (e) => {
    const newDistance = e.target.value;
    setDistance(newDistance);
    setPrice(calculatePrice(newDistance));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Patient Information</h2>
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name: 
            <input type="text" name="name" required style={{ marginLeft: "10px", padding: "5px" }} />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Age: 
            <input type="number" name="age" required style={{ marginLeft: "10px", padding: "5px" }} />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Disease: 
            <input type="text" name="disease" required style={{ marginLeft: "10px", padding: "5px" }} />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Distance (km): 
            <input
              type="number"
              value={distance}
              onChange={handleDistanceChange}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Payment Option: 
            <select name="payment" required style={{ marginLeft: "10px", padding: "5px" }}>
              <option value="cash">Cash</option>
              <option value="card">Credit/Debit Card</option>
              <option value="online">Online Transfer</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong>Estimated Price: ${price}</strong>
        </div>

        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "brown", color: "white", border: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientForm;
