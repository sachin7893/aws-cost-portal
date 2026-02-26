import React from "react";
import KPISection from "../components/KPISection";
import InventoryGraph from "../components/InventoryGraph";

function Dashboard() {
	  return (
		      <>
		        <h2>Executive Dashboard</h2>
		        <KPISection />
		        <InventoryGraph />
		      </>
		    );
}

export default Dashboard;
