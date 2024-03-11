import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");

  const handleInputChange = (event) => {
    // Accept only numeric input and limit to 10 digits
    const inputNumber = event.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(inputNumber);
  };

  const handleNext = (event) => {
    event.preventDefault();
    navigate("/otp_verification");
  };

  const isNextDisabled = mobileNumber.length !== 10;

  return (
    <>
      <button className="btn-pre" onClick={() => navigate("/login")}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">What is your mobile number?</h1>
      <Card>
        <form>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This is used to create an account in your name on the Haqdarshak
            app.
          </p>
          <button
            className="btn"
            type="submit"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </form>
      </Card>
    </>
  );
};

export default Mobile;
