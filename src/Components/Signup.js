import React, { useRef, useState } from "react";
import { Dialog } from '@material-ui/core';
import "./Signup.css";

function Signup({ handleCloseLoginModal}) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleContinueButtonClick = async () => {
    // Create an object with user registration data
    const userData = {
      name: name,
      email: email,
      password: password,
      coutry:selectedCountry
    };

    try {
      // Send POST request to the API
      const response = await fetch("http://localhost:5000/api/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      // Check the response status
      if (response.ok) {
        // Registration successful, you can update your UI or perform other actions here
        console.log("User registered successfully");
      } else {
        // Registration failed, handle error here
        console.error("User registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const containerRef = useRef();

  return (
    <div className="form-container">
      <div className="form-box">
      <svg
        id="Layer_1"
        version="1.1"
        viewBox="0 0 18 18"
        x="0px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        y="0px"
        data-test="apple-logo"
        className="layout-onboarding-auth__apple-icon"
      >
        <path
          d="M8.8,5.2c-0.7,0-1.8-0.8-3-0.8c-1.5,0-2.9,0.9-3.7,2.3c-1.6,2.8-0.4,6.8,1.1,9.1C4,16.8,4.9,18,6.1,18c1.1,0,1.6-0.7,3-0.7
          c1.4,0,1.8,0.7,3,0.7c1.2,0,2-1.1,2.8-2.2c0.9-1.3,1.2-2.5,1.2-2.6c0,0-2.4-0.9-2.4-3.6c0-2.3,1.9-3.4,1.9-3.4
          c-1.1-1.6-2.7-1.7-3.3-1.8C10.7,4.2,9.5,5.2,8.8,5.2z M11.3,2.9c0.6-0.8,1.1-1.8,0.9-2.9c-0.9,0-2,0.6-2.6,1.4C9,2,8.5,3.1,8.6,4.1
          C9.6,4.2,10.7,3.6,11.3,2.9"
        ></path>
      </svg>
        <h2>Sign Up</h2>

        <label htmlFor="name">Enter your Name</label>
        <input
          type="text"
          id="name"
          className="input-field"
          placeholder="Email Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          <label htmlFor="email">Enter your Email</label>
        <input
          type="email"
          id="email"
          className="input-field"
          placeholder="Enter email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <label htmlFor="password">Enter your Password.</label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Enter password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="country">Select your Country</label>
<select
  id="country"
  className="select-field"
  value={selectedCountry}
  onChange={(e) => setSelectedCountry(e.target.value)}
>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  {/* Add more country options */}
</select>

        <span className="forgot-passwd">Sign In</span>
        <div ref={containerRef} className="login__container">
          <p>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support, and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. See how your data is managed...</p>
        </div>
        <button className="submit-btn" onClick={handleContinueButtonClick}>
            Signup
          </button>
      </div>
      <Dialog open={showLoginModal} onClose={handleCloseLoginModal}>
      </Dialog>
    </div>
  );
}

export default Signup;
