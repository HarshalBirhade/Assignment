import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsNextDisabled(false);
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (selectedOption === "yes") {
      navigate("/welcome");
    } else {
    }
  };

  const handleBack = () => {
    navigate("/mobile");
  };

  return (
    <>
      <button className="btn-pre" onClick={handleBack}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">
        Do you want to proceed without OTP verification?
      </h1>
      <Card>
        <form onSubmit={handleNext}>
          <div className="input-group">
            <label className="radio-button">
              <input
                type="radio"
                name="select"
                value="yes"
                onChange={handleOptionChange}
              />
              Yes
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="select"
                value="no"
                onChange={handleOptionChange}
              />
              No, I want to complete OTP verification
            </label>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            Proceed without OTP if you live in an area with low network
            connectivity
          </p>
          <button className="btn" type="submit" disabled={isNextDisabled}>
            Next
          </button>
        </form>
      </Card>
    </>
  );
}

export default OtpVerification;
