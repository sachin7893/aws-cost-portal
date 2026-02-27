import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Cloud, Storage, ViewInAr, Chat } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
	  const navigate = useNavigate();

	  return (
		      <Drawer
		        variant="permanent"
		        sx={{
				        width: drawerWidth,
					        [`& .MuiDrawer-paper`]: {
							          width: drawerWidth,
							          boxSizing: "border-box",
							          background: "#0F2B46",
							          color: "white",
							        },
					      }}
		      >
		        <List sx={{ mt: 10 }}>
		          <ListItemButton onClick={() => navigate("/")}>
		            <ListItemIcon sx={{ color: "white" }}>
		              <Dashboard />
		            </ListItemIcon>
		            <ListItemText primary="Dashboard" />
		          </ListItemButton>

		          <ListItemButton onClick={() => navigate("/finops")}>
		            <ListItemIcon sx={{ color: "white" }}>
		              <Cloud />
		            </ListItemIcon>
		            <ListItemText primary="FinOps" />
		          </ListItemButton>

		          <ListItemButton onClick={() => navigate("/ec2")}>
		            <ListItemIcon sx={{ color: "white" }}>
		              <Storage />
		            </ListItemIcon>
		            <ListItemText primary="EC2" />
		          </ListItemButton>

		          <ListItemButton onClick={() => navigate("/ecs")}>
		            <ListItemIcon sx={{ color: "white" }}>
		              <ViewInAr />
		            </ListItemIcon>
		            <ListItemText primary="ECS" />
		          </ListItemButton>

		          <ListItemButton onClick={() => navigate("/eks")}>
		            <ListItemIcon sx={{ color: "white" }}>
		              <ViewInAr />
		            </ListItemIcon>
		            <ListItemText primary="EKS" />
		          </ListItemButton>
		        </List>
		      </Drawer>
		    );
}
