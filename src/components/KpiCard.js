import React from "react";
import { motion } from "framer-motion";

const kpis = [
	  { title: "Monthly Spend", value: "$42,300" },
	  { title: "Savings Identified", value: "$8,500" },
	  { title: "Idle Resources", value: "23" },
	  { title: "Coverage %", value: "71%" }
];
function KpiCard({ title, value }) {
	  return (
		      <motion.div
		        className="kpi-card"
		        initial={{ opacity: 0, y: 30 }}
		        animate={{ opacity: 1, y: 0 }}
		        transition={{ duration: 0.4 }}
		      >
		        <h4>{title}</h4>
		        <h2>{value}</h2>
		      </motion.div>
		    );
}

export default KpiCard;
