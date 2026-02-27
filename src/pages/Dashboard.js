import React from "react";
import KpiCard from "../components/KpiCard";

function Dashboard() {
	  return (
		      <div style={{ padding: "30px" }}>
		        <h2>Executive Dashboard</h2>

		        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
		          <KpiCard title="Total Monthly Cost" value="$42,300" />
		          <KpiCard title="Savings Identified" value="$8,950" />
		          <KpiCard title="Idle Resources" value="17" />
		          <KpiCard title="Optimization Score" value="84%" />
		        </div>
		      </div>
		    );
}

export default Dashboard;
