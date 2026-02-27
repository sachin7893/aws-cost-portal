import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SavingsIcon from "@mui/icons-material/Savings";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import "../global.css";

function Sidebar() {
	  const [collapsed, setCollapsed] = useState(false);

	  return (
		      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
		        <div className="sidebar-header">
		          <h2>{collapsed ? "🚀" : "FinOps Portal"}</h2>
		          <MenuIcon onClick={() => setCollapsed(!collapsed)} className="menu-btn" />
		        </div>

		        <NavLink to="/" end>
		          <DashboardIcon /> {!collapsed && "Dashboard"}
		        </NavLink>

		        <NavLink to="/finops">
		          <SavingsIcon /> {!collapsed && "FinOps"}
		        </NavLink>

		        <NavLink to="/cloudops">
		          <CloudIcon /> {!collapsed && "CloudOps"}
		        </NavLink>

		        <NavLink to="/ec2">
		          <StorageIcon /> {!collapsed && "EC2"}
		        </NavLink>

		        <NavLink to="/ecs">
		          <AppsIcon /> {!collapsed && "ECS"}
		        </NavLink>
		      </div>
		    );
}

export default Sidebar;
