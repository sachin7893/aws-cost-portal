import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const kpis = [
	  { title: "Monthly Spend", value: "$42,300" },
	  { title: "Savings Identified", value: "$8,500" },
	  { title: "Idle Resources", value: "23" },
	  { title: "Coverage %", value: "71%" }
];

function KPISection() {
	  return (
		      <Grid container spacing={3}>
		        {kpis.map((kpi, index) => (
				        <Grid item xs={12} md={3} key={index}>
				          <Card>
				            <CardContent>
				              <Typography variant="subtitle2">{kpi.title}</Typography>
				              <Typography variant="h5">{kpi.value}</Typography>
				            </CardContent>
				          </Card>
				        </Grid>
				      ))}
		      </Grid>
		    );
}

export default KPISection;
