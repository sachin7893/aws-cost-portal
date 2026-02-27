import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	  palette: {
		      mode: "light",
		      primary: {
			            main: "#232f3e", // AWS dark blue
			          },
		      secondary: {
			            main: "#ff9900", // AWS orange
			          },
		      background: {
			            default: "#f4f6f8",
			          },
		    },
	  typography: {
		      fontFamily: "Roboto, sans-serif",
		    },
});

export default theme;
