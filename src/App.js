import React from "react";
import { ThemeProvider } from "./theme";
import "./global.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
	  return (
		      <ThemeProvider>
		        <div className="page-container">
		          <Sidebar />
		          <Dashboard />
		        </div>
		      </ThemeProvider>
		    );
}

export default App;
