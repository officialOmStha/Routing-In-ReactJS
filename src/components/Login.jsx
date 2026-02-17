import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "12345");
    navigate("/dashboard");
  };
  return (
    <>
      <div>Login page</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
