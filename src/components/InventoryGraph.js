import {
	  LineChart,
	  Line,
	  BarChart,
	  Bar,
	  XAxis,
	  YAxis,
	  Tooltip,
	  CartesianGrid,
	  Legend,
	  ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const monthlyData = [
	  { month: "Jan", cost: 42000 },
	  { month: "Feb", cost: 46000 },
	  { month: "Mar", cost: 50000 },
	  { month: "Apr", cost: 52430 },
];

const resourceData = [
	  { name: "EC2", utilization: 73 },
	  { name: "ECS", utilization: 65 },
	  { name: "EKS", utilization: 81 },
];

const InventoryGraph = () => {
	  return (
		      <Box sx={{ mt: 4 }}>
		        <Typography variant="h6">Monthly Cost Trend</Typography>
		        <ResponsiveContainer width="100%" height={300}>
		          <LineChart data={monthlyData}>
		            <CartesianGrid strokeDasharray="3 3" />
		            <XAxis dataKey="month" />
		            <YAxis />
		            <Tooltip />
		            <Legend />
		            <Line type="monotone" dataKey="cost" stroke="#ff9900" />
		          </LineChart>
		        </ResponsiveContainer>

		        <Typography variant="h6" sx={{ mt: 4 }}>
		          Resource Utilization
		        </Typography>
		        <ResponsiveContainer width="100%" height={300}>
		          <BarChart data={resourceData}>
		            <CartesianGrid strokeDasharray="3 3" />
		            <XAxis dataKey="name" />
		            <YAxis />
		            <Tooltip />
		            <Legend />
		            <Bar dataKey="utilization" fill="#232f3e" />
		          </BarChart>
		        </ResponsiveContainer>
		      </Box>
		    );
};

export default InventoryGraph;
