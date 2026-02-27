import React from "react";
import Layout from "../components/Layout";
import KPISection from "../components/KPISection";
import InventoryGraph from "../components/InventoryGraph";
import ChatWidget from "../components/ChatWidget";
import { Typography } from "@mui/material";

export default function Dashboard() {
	  return (
		      <Layout>
		        <Typography variant="h5" gutterBottom>
		          Dashboard Overview
		        </Typography>

		        <KPISection />
		        <InventoryGraph />
		        <ChatWidget />
		      </Layout>
		    );
}
