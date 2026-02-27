import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
	  return (
		      <Box sx={{ display: "flex" }}>
		        
		        {/* Top Header */}
		        <AppBar position="fixed" sx={{ background: "#F36F21" }}>
		          <Toolbar>
		            <Typography variant="h6" sx={{ fontWeight: 700 }}>
		              FinOps Enterprise Portal
		            </Typography>
		          </Toolbar>
		        </AppBar>

		        {/* Sidebar */}
		        <Sidebar />

		        {/* Main Content */}
		        <Box
		          component="main"
		          sx={{
				            flexGrow: 1,
					            bgcolor: "background.default",
					            p: 4,
					            mt: 8,
					            minHeight: "100vh",
					          }}
		        >
		          {children}
		        </Box>
		      </Box>
		    );
}
