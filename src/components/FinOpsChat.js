import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";

function FinOpsChat() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi 👋 I'm your FinOps AI Assistant. Ask me about cost trends, EC2 spikes, S3 comparison, or optimization suggestions."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://0azsdk6qbb.execute-api.ap-south-1.amazonaws.com/prod/chat",
        { prompt: input }
      );

      const botMessage = {
        role: "assistant",
        content: response.data.answer || "No response received."
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Unable to connect to FinOps backend."
        }
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="chat-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </motion.div>

      {/* Chatbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="chatbox"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.3 }}
            style={{
              background: theme.palette.background.paper
            }}
          >
            {/* Header */}
            <div className="chat-header">
              💰 FinOps AI Assistant
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`msg ${msg.role}`}
                  initial={{ opacity: 0, x: msg.role === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {msg.content}
                </motion.div>
              ))}

              {loading && (
                <div className="msg assistant">
                  Analyzing cost data...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input">
              <input
                type="text"
                value={input}
                placeholder="Ask about EC2 spike, S3 cost trend..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />

              <button onClick={sendMessage}>
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FinOpsChat;