import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [clearData, setClearData] = useState("");
  const navigate = useNavigate();

  // Function to navigate to pages
  const handleLogin = () => {
    navigate("/login");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleSetting = () => {
    navigate("/setting");
  };
  // Function to clear user data from localStorage
  const clearUserData = () => {
    localStorage.removeItem("userInfo");
    setClearData("user data clear successfully");
    setTimeout(() => {
      setClearData("");
    }, 2000);
  };

  return (
    <div className="Home">
      <h1>you are on home page </h1>
      <p>you are able to access home page only because this is not protected</p>
      <div className="home-page-spacing">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleDashboard}>Dashboard</button>
        <button onClick={handleSetting}>Setting</button>
        <button onClick={clearUserData}>
          clear user data from local storage
        </button>
        {/* Display message after clearing user data */}
        <p>{clearData}</p>
      </div>
    </div>
  );
};

export default HomePage;
