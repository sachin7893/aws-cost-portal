import React, { useState } from "react";
import { sendPrompt } from "../services/api";

function ChatBot() {
	  const [prompt, setPrompt] = useState("");
	  const [response, setResponse] = useState("");

	  const handleSubmit = async () => {
		      const res = await sendPrompt(prompt);
		      setResponse(res.data.answer);
		    };

	  return (
		      <div>
		        <h2>AWS Cost Optimization Assistant</h2>
		        <textarea
		          rows="4"
		          value={prompt}
		          onChange={(e) => setPrompt(e.target.value)}
		        />
		        <button onClick={handleSubmit}>Ask</button>
		        <p>{response}</p>
		      </div>
		    );
}

export default ChatBot;
