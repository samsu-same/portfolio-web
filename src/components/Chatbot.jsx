


import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are an AI chatbot for Samsuddin Ansari's portfolio. You can answer questions about his skills, projects, experience, and expertise in React, Node.js, and AI integrations.",
            },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessages([
        ...newMessages,
        { sender: "bot", text: response.data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-4 flex flex-col items-end">
      {!isOpen && (
        <motion.button
          className="bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-[999999]  space-x-2 pointer-events-auto"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          💬 <span>Chat AI</span>
        </motion.button>

      )}

      {isOpen && (
        <motion.div
          className="w-80 bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden flex flex-col fixed bottom-20 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="bg-gray-800 p-3 text-lg font-semibold flex justify-between items-center">
            <span>AI Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">✕</button>
          </div>

          {/* Chat Window */}
          <div className="flex flex-col p-3 space-y-2 overflow-y-auto h-64 z-100">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 max-w-[80%] rounded-lg ${msg.sender === "user" ? "self-end bg-green-600" : "self-start bg-blue-600"}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <strong>{msg.sender === "user" ? "You" : "AI"}:</strong> {msg.text}
              </motion.div>
            ))}
            {loading && <div className="text-gray-400 text-sm">Typing...</div>}
          </div>

          {/* Input Field */}
          <div className="flex border-t border-gray-700 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 p-2 bg-gray-800 text-white rounded-l-lg outline-none"
            />
            <button onClick={handleSendMessage} className="bg-green-600 px-4 py-2 rounded-r-lg">Send</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
