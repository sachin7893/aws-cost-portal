import React from "react";
import { Paper, Typography } from "@mui/material";

export default function InventoryGraph() {
	  return (
		      <Paper elevation={3} sx={{ p: 3, mt: 4, borderRadius: 3 }}>
		        <Typography variant="h6" gutterBottom>
		          Cost Trend (Monthly)
		        </Typography>
		        <div style={{ height: 300 }}>
		          {/* Insert your chart component here */}
		        </div>
		      </Paper>
		    );
}
