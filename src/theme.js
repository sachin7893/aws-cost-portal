import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F36F21",
    },
    secondary: {
      main: "#0F2B46",
    },
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
