import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const kpis = [
	  { title: "Total Cost", value: "$12,450" },
	  { title: "EC2 Cost", value: "$5,200" },
	  { title: "Savings Potential", value: "$1,340" },
	  { title: "Unused Resources", value: "17" },
];

export default function KPISection() {
	  return (
		      <Grid container spacing={3}>
		        {kpis.map((kpi, index) => (
				        <Grid item xs={12} md={3} key={index}>
				          <Paper
				            elevation={4}
				            sx={{
						                  p: 3,
							                  borderRadius: 3,
							                  transition: "0.3s",
							                  "&:hover": {
										                  transform: "translateY(-5px)",
										                },
							                }}
				          >
				            <Typography variant="h6" color="text.secondary">
				              {kpi.title}
				            </Typography>
				            <Typography variant="h4" sx={{ mt: 1 }}>
				              {kpi.value}
				            </Typography>
				          </Paper>
				        </Grid>
				      ))}
		      </Grid>
		    );
}
