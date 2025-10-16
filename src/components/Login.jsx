import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log("✅ Login response:", res.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center items-center  mt-10">
      <div className="card bg-base-300 w-96 shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-3 justify-center">Login Here!</h2>
          {/* Email Field*/}
          <input
            className="input validator"
            type="email"
            required
            placeholder="Email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          {/* Password Field*/}
          <input
            type="password"
            className="input validator"
            required
            placeholder="Password"
            minLength="8"
            attern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$"
            title="Must be at least 8 characters and include a letter, a number, and a special symbol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="validator-hint">
            Must be more than 8 characters, including
            <br />
            At least one letter, number and special symbol.
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
