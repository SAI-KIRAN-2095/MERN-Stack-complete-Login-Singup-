import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDR_qYBWTYFS4GdjFBzMheJmnMbUfecBok"; // Put new key here
const genAI = new GoogleGenerativeAI(API_KEY);

function Chatbot() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(userInput);
      const response = await result.response;
      const text = response.text();

      setMessages([...newMessages, { sender: "ai", text }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "⚠️ Failed to get response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg"
        style={{ width: "500px", borderRadius: "15px" }}
      >
        <div className="card-header bg-dark text-white text-center">
          <h4 className="mb-0">AI Chatbot</h4>
        </div>

        <div
          className="card-body"
          style={{ height: "500px", overflowY: "auto", background: "#00000076" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-3 ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-light border"
                }`}
                style={{ maxWidth: "75%" }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="text-muted small">AI is typing...</div>
          )}
        </div>

        <div className="card-footer">
          <form onSubmit={handleSubmit} className="d-flex ">
            <input
              type="text"
              className="form-control  me-2 "
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button
              className="btn btn-secondary"
              type="submit"
              disabled={isLoading}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;