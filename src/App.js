import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import FinOpsPage from "./pages/FinOpsPage";
import CloudOpsPage from "./pages/CloudOpsPage";
import EC2Page from "./pages/EC2Page";
import ECSPage from "./pages/ECSPage";
import "./global.css";

function App({ toggleTheme, mode }) {
	  return (
		      <Router>
		        <div className="page-container">
		          <Sidebar />

		          <div className="main-wrapper">
		            <div className="topbar">
		              <div>🚀 FinOps CloudOps Portal</div>

		              <button className="theme-btn" onClick={toggleTheme}>
		                {mode === "light" ? "🌙 Dark" : "☀ Light"}
		              </button>
		            </div>

		            <Routes>
		              <Route path="/" element={<Dashboard />} />
		              <Route path="/finops" element={<FinOpsPage />} />
		              <Route path="/cloudops" element={<CloudOpsPage />} />
		              <Route path="/ec2" element={<EC2Page />} />
		              <Route path="/ecs" element={<ECSPage />} />
		            </Routes>
		          </div>
		        </div>
		      </Router>
		    );
}

export default App;
