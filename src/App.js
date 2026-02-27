import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import FinOpsPage from "./pages/FinOpsPage";
import CloudOpsPage from "./pages/CloudOpsPage";
import EC2Page from "./pages/EC2Page";
import ECSPage from "./pages/ECSPage";
import EKSPage from "./pages/EKSPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/finops" element={<FinOpsPage />} />
      <Route path="/cloudops" element={<CloudOpsPage />} />
      <Route path="/ec2" element={<EC2Page />} />
      <Route path="/ecs" element={<ECSPage />} />
      <Route path="/eks" element={<EKSPage />} />
    </Routes>
  );
}

export default App;
