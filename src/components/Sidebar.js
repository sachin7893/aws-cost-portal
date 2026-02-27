import {
	  Drawer,
	  List,
	  ListItem,
	  ListItemText,
	  Toolbar,
	  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
	  return (
		      <Drawer variant="permanent">
		        <Toolbar>
		          <Typography variant="h6">FinOps Portal</Typography>
		        </Toolbar>
		        <List>
		          {[
				            { text: "Dashboard", path: "/" },
				            { text: "FinOps", path: "/finops" },
				            { text: "CloudOps", path: "/cloudops" },
				            { text: "EC2", path: "/ec2" },
				            { text: "ECS", path: "/ecs" },
				            { text: "EKS", path: "/eks" },
				          ].map((item) => (
						            <ListItem button key={item.text} component={Link} to={item.path}>
						              <ListItemText primary={item.text} />
						            </ListItem>
						          ))}
		        </List>
		      </Drawer>
		    );
};

export default Sidebar;
