import React, { useState } from "react";
import { Dialog, TextField, Button } from "@material-ui/core";
import "./Login.css";

function Password({ handleClosePasswordModal, email }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "projectid": "bmc60xnvc646",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        // Handle successful login
        handleClosePasswordModal();
      } else {
        setError("Invalid email or password"); // Set an error message
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Sign In</h2>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <p className="error-message">{error}</p>}
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Log In
        </Button>
      </div>
      <Dialog onClose={handleClosePasswordModal}>
        {/* Content of the password modal */}
      </Dialog>
    </div>
  );
}

export default Password;
