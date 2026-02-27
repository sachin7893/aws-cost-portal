import React from "react";
import { Fab } from "@mui/material";
import { Chat } from "@mui/icons-material";

export default function ChatWidget() {
	  return (
		      <Fab
		        color="primary"
		        sx={{
				        position: "fixed",
					        bottom: 30,
					        right: 30,
					      }}
		      >
		        <Chat />
		      </Fab>
		    );
}
