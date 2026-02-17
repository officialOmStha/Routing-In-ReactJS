import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("token");
        navigate("/login")
    }
  return (
    <>
    <div>Dashboard</div>
    <button onClick={handleLogout}>Log out</button>
    </>
  )
}

export default Dashboard