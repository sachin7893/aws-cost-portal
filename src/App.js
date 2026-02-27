import React from "react";
import "./global.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="page-container">
      <Sidebar />

      <div className="main-wrapper">
        <div className="topbar">
          <div>Executive Dashboard</div>
          <div>Welcome, Admin</div>
        </div>

        <Dashboard />
      </div>
    </div>
  );
}

export default App;
