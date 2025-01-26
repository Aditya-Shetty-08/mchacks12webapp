import React, { useState } from "react";
import "./PatientForm.css";

const PatientForm = () => {
    const [roomType, setRoomType] = useState("");
    const [price, setPrice] = useState(0);
  
    // Calculate price based on room type
    const calculatePrice = (roomType) => {
      switch (roomType) {
        case "smallSingle":
          return 200; // Base price for Semi-Private Room
        case "largeSingle":
          return 300; // Base price for Private room
        case "smallSharing":
          return 150; // Base price for Sharing room
        case "largeSharing":
          return 100; // Base price for Ward
        default:
          return 0; // Default price
      }
    };
  
    const handleRoomTypeChange = (e) => {
      const selectedRoomType = e.target.value;
      setRoomType(selectedRoomType);
      setPrice(calculatePrice(selectedRoomType));
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
            Emergency:  
            <input type="text" name="disease" required style={{ marginLeft: "10px", padding: "5px" }} />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
          Room Type: 
            <select
              value={roomType}
              onChange={handleRoomTypeChange}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Select Room Type</option>
              <option value="smallSingle">Semi-Private Room</option>
              <option value="largeSingle">Private Room</option>
              <option value="smallSharing">Sharing Room</option>
              <option value="largeSharing">Ward</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Payment Option: 
            <select name="payment" required style={{ marginLeft: "10px", padding: "5px" }}>
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
