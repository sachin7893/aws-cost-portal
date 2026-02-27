import React, { useContext } from "react";
import { ThemeContext } from "../theme";

function Layout({ children }) {
	  const { theme, toggleTheme } = useContext(ThemeContext);

	  return (
		      <>
		        <div className="topbar">
		          <h2>Enterprise Cloud Portal</h2>
		          <button className="theme-toggle" onClick={toggleTheme}>
		            {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
		          </button>
		        </div>
		        {children}
		      </>
		    );
}

export default Layout;
