import React, { useState } from "react";
import Layout from "./components/Layout";
import CostOptimization from "./pages/CostOptimization";
import EC2Page from "./pages/EC2Page";
import ECSPage from "./pages/ECSPage";
import EKSPage from "./pages/EKSPage";

function App() {
  const [active, setActive] = useState("cost");

  const renderPage = () => {
    switch (active) {
      case "ec2":
        return <EC2Page />;
      case "ecs":
        return <ECSPage />;
      case "eks":
        return <EKSPage />;
      default:
        return <CostOptimization />;
    }
  };

  return (
    <Layout active={active} setActive={setActive}>
      {renderPage()}
    </Layout>
  );
}

export default App;
