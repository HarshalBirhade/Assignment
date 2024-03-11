import React, { useNavigate, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./shared/Card";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const PersonalDetails = () => {
  const [birthdate, setBirthdate] = useState(null);

  return (
    <>
      <button className="btn-pre">
        <FaArrowLeft />
      </button>
      <h1 className="headline">Personal Details</h1>
      <Card>
        <form>
          <div className="input-group">
            <input
              className="input-field"
              type="text"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          <label
            htmlFor="Gender"
            style={{
              marginRight: "200px",
              fontWeight: "bold",
            }}
          >
            Gender
          </label>
          <div
            className="radio-button"
            style={{
              display: "flex",
              justifyContent: "center",

              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <label>
              <input type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" />
              Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" />
              Other
            </label>
          </div>
          <label
            htmlFor="DOB"
            style={{
              marginRight: "200px",
              fontWeight: "bold",
            }}
          >
            DOB
          </label>
          <div className="input-group">
            <div>
              <DatePicker
                selected={birthdate}
                onChange={(date) => setBirthdate(date)}
                dateFormat="MM/dd/yyyy"
                placeholderText="Enter your birthdate"
                className="input-field"
              />
            </div>
          </div>
          <p style={{ margin: "0px 0px 30px 5px", textAlign: "start" }}>
            This information helps us suggest schemes that are right for you.
          </p>
          <button className="btn" type="submit">
            Next
          </button>
        </form>
      </Card>
    </>
  );
};

export default PersonalDetails;
