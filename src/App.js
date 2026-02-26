import React, { useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import FinOpsPage from "./pages/FinOpsPage";
import CloudOpsPage from "./pages/CloudOpsPage";
import EC2Page from "./pages/EC2Page";
import ECSPage from "./pages/ECSPage";
import EKSPage from "./pages/EKSPage";

function App() {
	  const [active, setActive] = useState("dashboard");

	  const renderPage = () => {
		      switch (active) {
			            case "finops":
				              return <FinOpsPage />;
				            case "cloudops":
				              return <CloudOpsPage />;
				            case "ec2":
				              return <EC2Page />;
				            case "ecs":
				              return <ECSPage />;
				            case "eks":
				              return <EKSPage />;
				            default:
				              return <Dashboard />;
				          }
		    };

	  return (
		      <Layout active={active} setActive={setActive}>
		        {renderPage()}
		      </Layout>
		    );
}

export default App;
