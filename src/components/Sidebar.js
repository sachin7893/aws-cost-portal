import React from "react";
import {
	  Box,
	  List,
	  ListItemButton,
	  ListItemText,
	  Typography
} from "@mui/material";

function Sidebar({ active, setActive }) {
	  const menu = [
		      { id: "dashboard", label: "Dashboard" },
		      { id: "finops", label: "FinOps" },
		      { id: "cloudops", label: "CloudOps" },
		      { id: "ec2", label: "EC2" },
		      { id: "ecs", label: "ECS" },
		      { id: "eks", label: "EKS" }
		    ];

	  return (
		      <Box width={260} bgcolor="background.paper" p={2}>
		        <Typography variant="h6" mb={3}>
		          🚀 FinOps CloudOps Portal
		        </Typography>
		        <List>
		          {menu.map((item) => (
				            <ListItemButton
				              key={item.id}
				              selected={active === item.id}
				              onClick={() => setActive(item.id)}
				              sx={{
						                    borderRadius: 2,
							                    mb: 1
						                  }}
				            >
				              <ListItemText primary={item.label} />
				            </ListItemButton>
				          ))}
		        </List>
		      </Box>
		    );
}

export default Sidebar;
