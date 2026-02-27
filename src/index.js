import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import { getTheme } from "./theme";

const Root = () => {
	  const [mode, setMode] = useState("light");

	  const theme = useMemo(() => getTheme(mode), [mode]);

	  const toggleTheme = () => {
		      setMode((prev) => (prev === "light" ? "dark" : "light"));
		    };

	  return (
		      <ThemeProvider theme={theme}>
		        <CssBaseline />
		        <App toggleTheme={toggleTheme} mode={mode} />
		      </ThemeProvider>
		    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
