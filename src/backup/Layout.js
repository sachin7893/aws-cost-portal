import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import ChatWidget from "./ChatWidget";

function Layout({ children, active, setActive }) {
	  return (
		      <Box display="flex" height="100vh">
		        <Sidebar active={active} setActive={setActive} />
		        <Box flex={1} p={4} bgcolor="background.default">
		          {children}
		        </Box>
		        <ChatWidget />
		      </Box>
		    );
}

export default Layout;
