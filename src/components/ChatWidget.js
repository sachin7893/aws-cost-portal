import React, { useState } from "react";
import { Fab, Drawer, TextField, Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

function ChatWidget() {
	  const [open, setOpen] = useState(false);

	  return (
		      <>
		        <Fab
		          color="primary"
		          sx={{ position: "fixed", bottom: 20, left: 20 }}
		          onClick={() => setOpen(true)}
		        >
		          <ChatIcon />
		        </Fab>

		        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
		          <div style={{ width: 320, padding: 20 }}>
		            <h3>AI FinOps Assistant</h3>
		            <TextField fullWidth label="Ask about cost or infra..." />
		            <Button variant="contained" fullWidth sx={{ mt: 2 }}>
		              Send
		            </Button>
		          </div>
		        </Drawer>
		      </>
		    );
}

export default ChatWidget;
