import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h3> you are visiting the dashboard page</h3>
      <Link to="/">go back to home page</Link>
    </>
  );
};

export default Dashboard;
