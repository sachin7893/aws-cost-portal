import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
	  createTheme({
		      palette: {
			            mode: mode,
			            primary: {
					            main: "#2563eb",
					          },
			            background: {
					            default: mode === "light" ? "#f3f4f6" : "#0f172a",
					            paper: mode === "light" ? "#ffffff" : "#1e293b",
					          },
			          },
		      typography: {
			            fontFamily: "Inter, Roboto, Arial",
			            h2: {
					            fontWeight: 600,
					          },
			            h4: {
					            fontWeight: 500,
					          },
			          },
		      shape: {
			            borderRadius: 12,
			          },
		    });
