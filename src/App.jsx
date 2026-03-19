import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRout from "./components/privateRout";
import PublicRout from "./components/PublicRout";
import Bkground from "./components/Bkground";
import Cursor from "./components/BkgroundCanvas";
import BkgroundCanvas from "./components/BkgroundCanvas";

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background always rendered behind */}
      {/* <Bkground /> */}
      <BkgroundCanvas />
      <Cursor />

      {/* Page content above the background */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* public route */}
          <Route
            path="/login"
            element={
              <PublicRout>
                <Login />
              </PublicRout>
            }
          />

          {/* private route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRout>
                <Dashboard />
              </PrivateRout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;