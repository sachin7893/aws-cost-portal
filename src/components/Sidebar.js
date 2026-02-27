import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🚀 FinOps CloudOps</h2>

      <NavLink to="/" end>
        Dashboard
      </NavLink>

      <NavLink to="/finops">
        FinOps
      </NavLink>

      <NavLink to="/cloudops">
        CloudOps
      </NavLink>

      <NavLink to="/ec2">
        EC2
      </NavLink>

      <NavLink to="/ecs">
        ECS
      </NavLink>

      <NavLink to="/eks">
        EKS
      </NavLink>
    </div>
  );
}

export default Sidebar;
