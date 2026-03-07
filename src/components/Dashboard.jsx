import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 rounded hover:bg-red-500 transition"
      >
        Log out
      </button>
    </div>
  );
};

export default Dashboard;