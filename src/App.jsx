import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRout from "./components/privateRout";
import PublicRout from "./components/PublicRout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* public */}
      <Route
        path="/login"
        element={
          <PublicRout>
            <Login />
          </PublicRout>
        }
      />

        {/* private */}
      <Route
        path="/dashboard"
        element={
          <PrivateRout>
            <Dashboard />
          </PrivateRout>
        }
      />
    </Routes>
  );
}

export default App;
