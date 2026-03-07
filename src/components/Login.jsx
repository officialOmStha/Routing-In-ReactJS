import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "12345");
    navigate("/dashboard");
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Login Page</h1>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;