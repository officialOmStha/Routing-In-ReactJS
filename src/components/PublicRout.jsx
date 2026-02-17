import { Navigate } from "react-router-dom"

const PublicRout = ({ children }) => {
    const isAuthinticated = localStorage.getItem("token");

  return isAuthinticated ? <Navigate to={"/dashboard"} /> : children;
}

export default PublicRout