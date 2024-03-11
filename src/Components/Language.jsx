import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";

function Language() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedLanguage, setSelectedLanguage] = useState(""); // State to track selected language
  const [isNextDisabled, setIsNextDisabled] = useState(true); // State to track whether "Next" button should be disabled

  // Function to handle radio button change
  const handleRadioChange = (e) => {
    setSelectedLanguage(e.target.value);
    setIsNextDisabled(false); // Enable "Next" button when a radio button is selected
  };

  // Function to handle "Next" button click
  const handleNextClick = () => {
    navigate("/login"); // Navigate to "/login" path
  };

  // Function to handle "Back" button click
  const handleBackClick = () => {
    navigate("/"); // Navigate to "/" path
  };

  return (
    <>
      <button className="btn-pre" onClick={handleBackClick}>
        <FaArrowLeft />
      </button>
      <h1 className="headline">Which language do you prefer?</h1>
      <Card>
        <form>
          <div className="input-group">
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="English"
                onChange={handleRadioChange}
              />
              English
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="Hindi"
                onChange={handleRadioChange}
              />
              हिंदी
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="language"
                value="Kannada"
                onChange={handleRadioChange}
              />
              ಕನ್ನಡ
            </label>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This allows you to experience the app in a language of your
            preference.
          </p>
          <button
            className="btn"
            type="button"
            onClick={handleNextClick}
            disabled={isNextDisabled} // Disable "Next" button when no radio button is selected
          >
            Next
          </button>
        </form>
      </Card>
    </>
  );
}

export default Language;
