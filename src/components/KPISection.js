import { Grid, Card, CardContent, Typography } from "@mui/material";

const KPICard = ({ title, value }) => (
	  <Card elevation={4}>
	    <CardContent>
	      <Typography variant="subtitle2">{title}</Typography>
	      <Typography variant="h5">{value}</Typography>
	    </CardContent>
	  </Card>
);

const KPISection = () => {
	  return (
		      <Grid container spacing={3}>
		        <Grid item xs={3}>
		          <KPICard title="Total Cost (Monthly)" value="$52,430" />
		        </Grid>
		        <Grid item xs={3}>
		          <KPICard title="EC2 Utilization" value="73%" />
		        </Grid>
		        <Grid item xs={3}>
		          <KPICard title="ECS Utilization" value="65%" />
		        </Grid>
		        <Grid item xs={3}>
		          <KPICard title="EKS Utilization" value="81%" />
		        </Grid>
		      </Grid>
		    );
};

export default KPISection;
