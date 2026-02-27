import React, { useEffect, useState, useMemo } from "react";

import Layout from "../components/Layout";
import { Typography, Paper } from "@mui/material";
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
	  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

function FinOpsPage() {
	  const [data, setData] = useState([]);
	  const [activeTab, setActiveTab] = useState("overview");
	  const [loading, setLoading] = useState(true);

	  useEffect(() => {
		      fetch("https://0azsdk6qbb.execute-api.ap-south-1.amazonaws.com/prod/finops")
		        .then((res) => res.json())
		        .then((data) => {
				        setData(data);
				        setLoading(false);
				      })
		        .catch((err) => {
				        console.error(err);
				        setLoading(false);
				      });
		    }, []);

	  /* ===============================
	   *      CALCULATIONS
	   *        =============================== */

	  const totalCost = useMemo(
		      () => data.reduce((acc, curr) => acc + curr.total_cost, 0),
		      [data]
		    );

	  const avgCost = useMemo(
		      () => (data.length ? totalCost / data.length : 0),
		      [data, totalCost]
		    );

	  const maxMonth = useMemo(() => {
		      if (!data.length) return null;
		      return data.reduce((prev, curr) =>
			            curr.total_cost > prev.total_cost ? curr : prev
			          );
		    }, [data]);

	  /* ===============================
	   *      THEME-AWARE CHART COLORS
	   *        =============================== */

	  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

	  const axisColor = isDark ? "#94a3b8" : "#64748b";
	  const gridColor = isDark ? "#334155" : "#e2e8f0";
	  const lineColor = "#3b82f6";
	  const barColor = "#6366f1";

	  return (
		  <Layout>
		    <Typography variant="h5">Page Title</Typography>
		    <Paper sx={{ p:3, mt:3 }}>
		      <div className="main-content">
		        {/* ===============================
			          HEADER
				        =============================== */}
		        <div className="page-header">
		          <div className="page-title">Enterprise FinOps Dashboard</div>
		        </div>

		        {/* ===============================
			          KPI CARDS
				        =============================== */}

		        <div className="kpi-grid">
		          <motion.div
		            className="kpi-card"
		            initial={{ opacity: 0, y: 30 }}
		            animate={{ opacity: 1, y: 0 }}
		            transition={{ duration: 0.5 }}
		          >
		            <div className="kpi-title">Total Spend</div>
		            <div className="kpi-value">
		              ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
		            </div>
		          </motion.div>

		          <motion.div
		            className="kpi-card"
		            initial={{ opacity: 0, y: 30 }}
		            animate={{ opacity: 1, y: 0 }}
		            transition={{ duration: 0.6 }}
		          >
		            <div className="kpi-title">Average Monthly</div>
		            <div className="kpi-value">
		              ${avgCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
		            </div>
		          </motion.div>

		          <motion.div
		            className="kpi-card"
		            initial={{ opacity: 0, y: 30 }}
		            animate={{ opacity: 1, y: 0 }}
		            transition={{ duration: 0.7 }}
		          >
		            <div className="kpi-title">Highest Month</div>
		            <div className="kpi-value">
		              {maxMonth ? maxMonth.month : "-"}
		            </div>
		          </motion.div>
		        </div>

		        {/* ===============================
			          CHARTS
				        =============================== */}

		        <div className="chart-container">
		          {loading ? (
				            <p>Loading financial data...</p>
				          ) : (
						            <>
						              <h2>Monthly Cost Trend</h2>

						              <ResponsiveContainer width="100%" height={320}>
						                <LineChart data={data}>
						                  <XAxis dataKey="month" stroke={axisColor} />
						                  <YAxis stroke={axisColor} />
						                  <Tooltip />
						                  <CartesianGrid
						                    strokeDasharray="3 3"
						                    stroke={gridColor}
						                  />
						                  <Line
						                    type="monotone"
						                    dataKey="total_cost"
						                    stroke={lineColor}
						                    strokeWidth={3}
						                    dot={{ r: 4 }}
						                  />
						                </LineChart>
						              </ResponsiveContainer>

						              <h2 style={{ marginTop: "40px" }}>
						                Monthly Cost Comparison
						              </h2>

						              <ResponsiveContainer width="100%" height={320}>
						                <BarChart data={data}>
						                  <XAxis dataKey="month" stroke={axisColor} />
						                  <YAxis stroke={axisColor} />
						                  <Tooltip />
						                  <CartesianGrid
						                    strokeDasharray="3 3"
						                    stroke={gridColor}
						                  />
						                  <Bar
						                    dataKey="total_cost"
						                    fill={barColor}
						                    radius={[6, 6, 0, 0]}
						                  />
						                </BarChart>
						              </ResponsiveContainer>
						            </>
						          )}
		        </div>

		        {/* ===============================
			          RIGHT PANEL TABS
				        =============================== */}

		        <div style={{ marginTop: "40px" }}>
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

		          <div className="chart-container" style={{ marginTop: "20px" }}>
		            {activeTab === "overview" && (
				                <p>
				                  Monitor AWS cost trends, track spend growth, and analyze
				                  financial KPIs across months.
				                </p>
				              )}

		            {activeTab === "anomalies" && (
				                <p>
				                  Identify abnormal spikes across EC2, S3, Lambda and other
				                  services using AI-based anomaly detection.
				                </p>
				              )}

		            {activeTab === "recommendations" && (
				                <p>
				                  Optimize costs by right-sizing workloads, applying Savings
				                  Plans, Reserved Instances, and eliminating idle resources.
				                </p>
				              )}
		          </div>
		        </div>

		        {/* ===============================
			          FLOATING BEDROCK CHAT
				        =============================== */}

		        <FinOpsChat />
		      </div>
		  </Paper>
		  </Layout>
		    );
}

export default FinOpsPage;
