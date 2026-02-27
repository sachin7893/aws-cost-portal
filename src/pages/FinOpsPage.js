import React, { useEffect, useState } from "react";
import FinOpsChat from "../components/FinOpsChat";
import {
	  LineChart,
	  Line,
	  XAxis,
	  YAxis,
	  Tooltip,
	  ResponsiveContainer,
	  BarChart,
	  Bar,
	  CartesianGrid
} from "recharts";
import { motion } from "framer-motion";

function FinOpsPage() {
	  const [data, setData] = useState([]);
	  const [activeTab, setActiveTab] = useState("overview");

	  useEffect(() => {
		      fetch("https://0azsdk6qbb.execute-api.ap-south-1.amazonaws.com/prod/finops")
		        .then(res => res.json())
		        .then(data => setData(data))
		        .catch(err => console.error(err));
		    }, []);

	  const totalCost = data.reduce((acc, curr) => acc + curr.total_cost, 0);
	  const avgCost = data.length ? totalCost / data.length : 0;
	  const maxMonth = data.length
	    ? data.reduce((prev, curr) =>
		            curr.total_cost > prev.total_cost ? curr : prev
		          )
	    : null;

	  return (
		      <div className="dashboard-container">

		        {/* MAIN CONTENT */}
		        <div className="dashboard-main">

		          <h1 className="dashboard-title">Enterprise FinOps Dashboard</h1>

		          {/* KPI CARDS */}
		          <div className="kpi-grid">

		            <motion.div
		              className="kpi-card"
		              whileHover={{ scale: 1.05 }}
		            >
		              <h3>Total Spend</h3>
		              <p>${totalCost.toFixed(2)}</p>
		            </motion.div>

		            <motion.div
		              className="kpi-card"
		              whileHover={{ scale: 1.05 }}
		            >
		              <h3>Avg Monthly</h3>
		              <p>${avgCost.toFixed(2)}</p>
		            </motion.div>

		            <motion.div
		              className="kpi-card"
		              whileHover={{ scale: 1.05 }}
		            >
		              <h3>Highest Month</h3>
		              <p>{maxMonth ? maxMonth.month : "-"}</p>
		            </motion.div>

		          </div>

		          {/* CHARTS */}
		          <div className="chart-container">

		            <h2>Monthly Cost Trend</h2>
		            <ResponsiveContainer width="100%" height={300}>
		              <LineChart data={data}>
		                <XAxis dataKey="month" stroke="#cbd5e1" />
		                <YAxis stroke="#cbd5e1" />
		                <Tooltip />
		                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
		                <Line
		                  type="monotone"
		                  dataKey="total_cost"
		                  stroke="#38bdf8"
		                  strokeWidth={3}
		                />
		              </LineChart>
		            </ResponsiveContainer>

		            <h2 style={{ marginTop: "40px" }}>Monthly Cost Comparison</h2>
		            <ResponsiveContainer width="100%" height={300}>
		              <BarChart data={data}>
		                <XAxis dataKey="month" stroke="#cbd5e1" />
		                <YAxis stroke="#cbd5e1" />
		                <Tooltip />
		                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
		                <Bar dataKey="total_cost" fill="#6366f1" />
		              </BarChart>
		            </ResponsiveContainer>

		          </div>

		        </div>

		        {/* RIGHT PANEL TABS */}
		        <div className="dashboard-right">

		          <div className="tab-buttons">
		            <button
		              className={activeTab === "overview" ? "active" : ""}
		              onClick={() => setActiveTab("overview")}
		            >
		              Overview
		            </button>

		            <button
		              className={activeTab === "anomalies" ? "active" : ""}
		              onClick={() => setActiveTab("anomalies")}
		            >
		              Anomalies
		            </button>

		            <button
		              className={activeTab === "recommendations" ? "active" : ""}
		              onClick={() => setActiveTab("recommendations")}
		            >
		              Recommendations
		            </button>
		          </div>

		          <div className="tab-content">
		            {activeTab === "overview" && (
				                <p>Monitor AWS cost trends and financial performance metrics.</p>
				              )}

		            {activeTab === "anomalies" && (
				                <p>Identify abnormal spikes in EC2, S3, or Lambda usage.</p>
				              )}

		            {activeTab === "recommendations" && (
				                <p>Optimize by right-sizing EC2, applying Savings Plans, and removing idle resources.</p>
				              )}
		          </div>

		        </div>

		      </div>
		    );
}

export default FinOpsPage;
