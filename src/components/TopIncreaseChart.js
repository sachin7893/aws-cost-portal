import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function TopIncreaseChart({ data }) {
	  return (
		      <BarChart width={600} height={300} data={data}>
		        <XAxis dataKey="resource" />
		        <YAxis />
		        <Tooltip />
		        <Bar dataKey="increase" fill="#ff4d4f" />
		      </BarChart>
		    );
}

export default TopIncreaseChart;
