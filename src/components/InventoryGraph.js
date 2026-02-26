import React from "react";
import {
	  BarChart,
	  Bar,
	  XAxis,
	  YAxis,
	  Tooltip,
	  ResponsiveContainer
} from "recharts";

const data = [
	  { name: "EC2", count: 42 },
	  { name: "ECS", count: 18 },
	  { name: "EKS", count: 6 },
	  { name: "RDS", count: 12 },
	  { name: "S3", count: 58 }
];

function InventoryGraph() {
	  return (
		      <div style={{ height: 350, marginTop: 40 }}>
		        <ResponsiveContainer>
		          <BarChart data={data}>
		            <XAxis dataKey="name" />
		            <YAxis />
		            <Tooltip />
		            <Bar dataKey="count" fill="#4f46e5" />
		          </BarChart>
		        </ResponsiveContainer>
		      </div>
		    );
}

export default InventoryGraph;
