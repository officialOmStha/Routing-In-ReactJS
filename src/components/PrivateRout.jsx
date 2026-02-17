import { Navigate } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const isAuthinticated = localStorage.getItem("token");

  return isAuthinticated ? children : <Navigate to="/login" />;
};

export default PrivateRout;
